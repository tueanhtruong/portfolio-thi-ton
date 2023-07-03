import useSWRMutation from "swr/mutation";
import { LoginApi } from "..";
import { QUERY_KEYS, authResponseWrapper } from "../helpers";

export function useVerifyEmail(options) {
  const { data, trigger, isMutating, error, reset } = useSWRMutation(
    QUERY_KEYS._EMAIL_VERIFY,
    (_, options) => authResponseWrapper(LoginApi.verifyEmail, [options]),

    options
  );
  return {
    data,
    verify: trigger,
    isVerifying: isMutating,
    error,
    reset,
  };
}
