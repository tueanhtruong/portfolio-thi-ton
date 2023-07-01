// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import configs from "configs";

// Your web app's Firebase configuration
const config = {
  apiKey: configs.API_KEY,
  authDomain: configs.AUTH_DOMAIN,
  projectId: configs.PROJECT_ID,
  storageBucket: configs.STORAGE_BUCKET,
  messagingSenderId: configs.MESSAGING_SENDER_ID,
  appId: configs.APP_ID,
  measurementId: configs.MEASUREMENT_ID,
};

// const storage = getStorage(app);

export default { config };
