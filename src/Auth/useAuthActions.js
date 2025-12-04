/*
 * Handles signup/Login flows. Firestore document creation uses "verified-first" pattern:
 * - For email signup: Send verification email but DO NOT create the Firestore user doc yet.
 * - When verification confirmed (e.g., after reload or login), create/update the user doc.
 */

import {
  applyActionCode,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { auth, db, googleProvider } from "../Firebase";
import { toaster } from "../components/ui/toaster";

/*
 * Creates or updates the Firestore user document when emailVerified === true.
 * This is used both for OAuth flows and for the email-verified completion flow.
 */
const createOrUpdateUserDocIfVerified = async (user) => {
  if (!user) throw new Error("No user Provided");
  // Ensure the latest state on the client
  await user.reload();

  if (!user.emailVerified) {
    // Don't create the doc if not verified (verified-first)
    return null;
  }

  const ref = doc(db, "users", user.uid);
  const snap = await getDoc(ref);

  const payload = {
    email: user.email,
    displayName: user.displayName || null,
    provider: user.providerData?.[0]?.providerId || "email",
    createdAt: snap.exists() ? undefined : new Date(),
    emailVerified: true,
  };

  if (!snap.exists()) {
    // Create user
    await setDoc(ref, payload);
  } else {
    await updateDoc(ref, {
      emailVerified: true,
      ...(user.displayName && { displayName: user.displayName }),
    });
  }

  return true;
};

const useAuthActions = () => {
  /*
   * Email Sign up
   * - Create Firebase auth user
   * - Send verification email
   * - Do NOT create Firestore user doc here (verified-first)
   */
  const signUpWithEmail = async (email, password) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Send verification email
    await sendEmailVerification(user, {
      url:
        import.meta.env.VITE_EMAIL_VERIFY_URL ||
        `${window.location.origin}/email-verification-completed`,
    });

    // IMPORTANT: Do NOT create Firestore doc here
    // The doc will be created when the user verifies

    return userCredential;
  };

  /*
   * Email Login (Verified-first)
   * - If user.emailVerified === false --> reject + resend email
   * - If true --> Create Firestore doc only if not exists
   */
  const loginWithEmail = async (email, password) => {
    const result = await signInWithEmailAndPassword(auth, email, password);
    const user = result.user;

    if (!user.emailVerified) {
      // Re-send verification email
      await sendEmailVerification(user, {
        url:
          import.meta.env.VITE_EMAIL_VERIFY_URL ||
          `${window.location.origin}/email-verification-completed`,
      });

      // Force logout so user isn't signed in
      await auth.signOut();

      throw new Error(
        "Your email is not verified yet. A new verification email has been sent."
      );
    }

    await createOrUpdateUserDocIfVerified(user);
    return result;
  };

  /*
   * Google OAuth
   */
  const authenticateWithGoogle = async () => {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    await createOrUpdateUserDocIfVerified(user);

    return result;
  };

  /*
   * applyActionCode helper - validate oobCode and apply action.
   * This is for the EmailVerificationCompletedPage flow.
   */
  const applyActionCodeAndReturn = async (oobCode) => {
    if (!oobCode) throw new Error("Missing code");
    await applyActionCode(auth, oobCode);
    // applyActionCode will mark the email as verified server-side
    return true;
  };

  /*
   * wrapToaster - expects a function that returns a promise.
   * Returns the promise so callers can await it.
   */
  const wrapToaster = (promiseFn, successText, failText) => {
    const promise = promiseFn();
    toaster.promise(() => promise, {
      success: () => ({ title: successText }),
      error: (err) => ({
        title: failText,
        description: err?.message || "Something went wrong.",
      }),
      loading: { title: "Processing..." },
    });

    return promise;
  };

  return {
    signUpWithEmail,
    loginWithEmail,
    authenticateWithGoogle,
    createOrUpdateUserDocIfVerified,
    applyActionCodeAndReturn,
    wrapToaster,
  };
};

export { useAuthActions };
