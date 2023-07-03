import ModalLoading from "components/modalLoading";
import { useStickyState } from "contexts/app/app.provider";
import { useRouter } from "next/router";
import { commonStyles } from "pages/works/web-content";
import { useLogOut, useVerifyEmail } from "queries";
import { AddBlogType, BlogTypes } from "sections/blogs";
import { Box, Button, Heading } from "theme-ui";
import { PATHS } from "theme/constant";

export default function IndexPage() {
  const router = useRouter();
  const { logout, isMutating } = useLogOut();
  const { verify, isVerifying } = useVerifyEmail();
  const user = useStickyState("user");
  const isVerifyEmail = user?.emailVerified;

  const isAuthenticated = useStickyState("isAuthenticated");

  return (
    <>
      <Box sx={commonStyles.container} id="resume-content">
        <Heading as="h1" sx={commonStyles.h1}>
          Dashboard
        </Heading>
        <AddBlogType isAuth={isAuthenticated && isVerifyEmail} />
        <BlogTypes isAuth={isAuthenticated && isVerifyEmail} />

        {isAuthenticated ? (
          <>
            <Button variant="text" className="mr-4" onClick={() => logout()}>
              Logout
            </Button>
            {!isVerifyEmail && (
              <Button onClick={verify}>Verify Your Email</Button>
            )}
          </>
        ) : (
          <Button onClick={() => router.push(PATHS.ADMIN_LOGIN)}>Login</Button>
        )}
        <ModalLoading isLoading={isMutating || isVerifying} />
      </Box>
    </>
  );
}
