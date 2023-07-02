import useSWRMutation from "swr/mutation";
import { LoginApi } from ".";
import { QUERY_KEYS, authResponseWrapper } from "./helpers";

export function useSetBlogType(options) {
  const { data, trigger, isMutating, error, reset } = useSWRMutation(
    QUERY_KEYS._SET_BLOG_TYPE,
    (_, options) => authResponseWrapper(LoginApi.setBlogType, [options]),

    options
  );
  return {
    data,
    setBlog: trigger,
    isSetting: isMutating,
    error,
    reset,
  };
}
