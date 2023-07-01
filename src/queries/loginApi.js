import firebase from "firebase";
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

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
    const auth = getAuth(app);

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
    const auth = getAuth(app);
    return signOut(auth);
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
  };
};

export default {
  create,
};
