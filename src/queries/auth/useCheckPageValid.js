import { useStickyState } from "contexts/app/app.provider";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { PATHS } from "theme/constant";

export const useCheckPageValid = ({
  isRequireAuth = false,
  fallbackPath = PATHS.ADMIN,
}) => {
  const router = useRouter();
  const isAuthenticated = useStickyState("isAuthenticated");
  useEffect(() => {
    if (isAuthenticated !== isRequireAuth) router.push(fallbackPath);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);
  return null;
};
