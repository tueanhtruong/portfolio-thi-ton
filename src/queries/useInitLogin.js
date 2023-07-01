import useSWRMutation from "swr/mutation";
import { LoginApi } from ".";
import { QUERY_KEYS, authResponseWrapper } from "./helpers";

export function useInitLogin(options) {
  const { data, trigger, isMutating, error, reset } = useSWRMutation(
    QUERY_KEYS._INIT_LOGIN,
    (_, options) => authResponseWrapper(LoginApi.initLogin, [options]),

    options
  );
  return {
    data,
    initLogin: trigger,
    isMutating,
    error,
    reset,
  };
}
