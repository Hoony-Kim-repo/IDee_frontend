/*
 * Subscribe only Firebase Auth status
 */
import { onIdTokenChanged } from "firebase/auth";
import { createContext, useCallback, useEffect, useState } from "react";
import { auth } from "../Firebase";
import { tokenRef } from "./tokenRef";

const AuthContext = createContext({
  user: null,
  loading: true,
  reloadUser: async () => {},
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [idToken, setIdToken] = useState(null);

  useEffect(() => {
    const unsubscribe = onIdTokenChanged(auth, async (firebaseUser) => {
      if (!firebaseUser) {
        setUser(null);
        setIdToken(null);
        tokenRef.current = null;
        setLoading(false);
        return;
      }

      // Get token before "Render"
      const token = await firebaseUser.getIdToken();
      setUser(firebaseUser);
      setIdToken(token);
      tokenRef.current = token;
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Reload helper - ensures return fresh user from auth
  const reloadUser = useCallback(async () => {
    if (!auth.currentUser) return null;

    try {
      await auth.currentUser.reload();
      const token = await auth.currentUser.getIdToken();

      setUser(auth.currentUser);
      setIdToken(token);

      return auth.currentUser;
    } catch (err) {
      console.error("reloadUser error: ", err);
      return null;
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, idToken, loading, reloadUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
