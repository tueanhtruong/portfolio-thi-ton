import useSWRMutation from "swr/mutation";
import { LoginApi } from "..";
import { QUERY_KEYS, authResponseWrapper } from "../helpers";

export function useDeleteBlogType(options) {
  const { data, trigger, isMutating, error, reset } = useSWRMutation(
    QUERY_KEYS._DELETE_BLOG_TYPE,
    (_, options) => authResponseWrapper(LoginApi.deleteBlogType, [options]),

    options
  );
  return {
    data,
    deleteBlog: trigger,
    isDeleting: isMutating,
    error,
    reset,
  };
}
