import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { LoginApi } from "..";

export const useGetCurrentUser = () => {
  const auth = LoginApi.getCurrentAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    // Cleanup the listener when component unmounts
    return () => unsubscribe();
  }, []);

  return { user };
};
