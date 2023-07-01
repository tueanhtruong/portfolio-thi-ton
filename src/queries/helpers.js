/* eslint-disable no-async-promise-executor */

export async function responseWrapper(func, [...args] = []) {
  return new Promise(async (res, rej) => {
    try {
      const response = (await func(...args)) || {};
      if (response.ok) res(response.data);
      if (response?.originalError?.message === "CONNECTION_TIMEOUT") {
        console.error(
          "Connection timeout. Please check your network and try again."
        );
      }
      rej(response.data);
    } catch (err) {
      rej(err);
    }
  });
}

export async function authResponseWrapper(func, [...args] = []) {
  return new Promise(async (res, rej) => {
    try {
      const response = (await func(...args)) || {};
      res(response);
    } catch (err) {
      rej(err);
    }
  });
}

// "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpSWQiOjE3MjksImNJZCI6IkRVSXVwRldVeHA2MnpRdmJsIiwiaWF0IjoxNjg2OTcyOTkwfQ.oZd5oQSQKdpWX0VDVBPtxPwLVTseuF_D-SQESNOLn6oEW4bPALEB2kunsgMGdeD09vmSdQQZvRfdRvSijZwS1g";
export const QUERY_KEYS = {
  _INIT_LOGIN: "_INIT_LOGIN",
  _LOG_OUT: "_LOG_OUT",
  _INIT_CURRENT_USER: "_INIT_CURRENT_USER",
};
