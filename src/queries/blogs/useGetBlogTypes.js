import useSWR from "swr";
import { LoginApi } from "..";
import { QUERY_KEYS, authResponseWrapper } from "../helpers";

export function useGetBlogTypes(options) {
  const { data, error, isLoading, mutate } = useSWR(
    QUERY_KEYS._BLOG_TYPES,
    () => authResponseWrapper(LoginApi.getBlogTypes, []),

    options
  );
  return {
    data,
    refresh: mutate,
    isLoading,
    error,
  };
}
