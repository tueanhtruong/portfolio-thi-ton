import useSWRMutation from "swr/mutation";
import { LoginApi } from "..";
import { QUERY_KEYS, authResponseWrapper } from "../helpers";

export function useLogOut(options) {
  const { data, trigger, isMutating, error, reset } = useSWRMutation(
    QUERY_KEYS._LOG_OUT,
    (_, options) => authResponseWrapper(LoginApi.logOut, [options]),

    options
  );
  return {
    data,
    logout: trigger,
    isMutating,
    error,
    reset,
  };
}
