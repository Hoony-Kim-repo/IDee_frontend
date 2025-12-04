/*
 * Subscribe only Firebase Auth status
 */
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useCallback, useEffect, useState } from "react";
import { auth } from "../Firebase";

const AuthContext = createContext({
  user: null,
  loading: true,
  reloadUser: async () => {},
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // onAuthStateChanged Listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser || null);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Reload helper - ensures return fresh user from auth
  const reloadUser = useCallback(async () => {
    if (!auth.currentUser) return null;

    try {
      await auth.currentUser.reload();
      setUser(auth.currentUser);
      return auth.currentUser;
    } catch (err) {
      console.error("reloadUser error: ", err);
      return null;
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, reloadUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
