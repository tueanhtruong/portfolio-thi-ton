import firebase from "firebase";
import { getApp, getApps, initializeApp } from "firebase/app";
import {
  getAuth,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import { DB_KEYS } from "./helpers";

// export function newCancelToken(timeout = 30000) {
// 	const source = CancelToken.source();
// 	setTimeout(() => {
// 		source.cancel();
// 	}, timeout);

// 	return { cancelToken: source.token };
// }

// axios.defaults.withCredentials = true;

const create = () => {
  const app = getApps().length > 0 ? getApp() : initializeApp(firebase.config);
  const db = getFirestore(app);
  const auth = getAuth(app);

  //
  // Create and configure an apisauce-based api object.
  //

  // const api = apisauce.create({
  // 	baseURL,
  // 	headers: {
  // 		"Cache-Control": "no-cache",
  // 		Pragma: "no-cache",
  // 		Expires: 0,
  // 		Accept: "application/json",
  // 	},
  // 	timeout: 30000, // 30s
  // });

  // api.axiosInstance.interceptors.request.use((config) => {
  // 	// eslint-disable-next-line no-param-reassign
  // 	config.headers.Authorization = `Bearer ${token}`;
  // 	return Promise.resolve(config);
  // });

  // const getRoot = () => api.get("");

  // ====================== Auth ======================
  const initLogin = (payload) => {
    return signInWithEmailAndPassword(
      auth,
      payload.arg.email,
      payload.arg.password
    );
  };

  const getCurrentAuth = () => {
    const auth = getAuth(app);
    return auth;
  };
  const logOut = () => {
    return signOut(auth);
  };
  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };

  const getBlogTypes = async () => {
    const docRef = collection(db, DB_KEYS.BLOG_TYPES);
    const querySnapshot = await getDocs(docRef);
    let res = [];
    querySnapshot.forEach((doc) => res.push(doc.data() ?? {}));
    return res;
  };

  const setBlogType = async ({ arg }) => {
    console.log("arg: ", arg);
    const docRef = doc(db, DB_KEYS.BLOG_TYPES, arg.id);
    return await setDoc(docRef, arg);
  };
  // api.post("/user/customer/login", payload.arg, newCancelToken());

  //
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  //
  // Notice we're not returning back the `api` created in step 1. That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  return {
    // ====================== Content ======================
    initLogin,
    getCurrentAuth,
    logOut,
    getBlogTypes,
    verifyEmail,
    setBlogType,
  };
};

export default {
  create,
};
