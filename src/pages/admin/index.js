import Layout from "components/layout";
import ModalLoading from "components/modalLoading";
import { useStickyState } from "contexts/app/app.provider";
import { useRouter } from "next/router";
import { commonStyles } from "pages/works/web-content";
import { useLogOut } from "queries/useLogOut";
import { Box, Button, Heading } from "theme-ui";
import { PATHS } from "theme/constant";

export default function IndexPage() {
  const router = useRouter();
  const { logout, isMutating } = useLogOut();
  const isAuthenticated = useStickyState("isAuthenticated");

  return (
    <Layout>
      <Box sx={commonStyles.container} id="resume-content">
        <Heading as="h1" sx={commonStyles.h1}>
          Dashboard
        </Heading>

        {isAuthenticated && (
          <Button variant="text" className="mr-4" onClick={() => logout()}>
            Logout
          </Button>
        )}
        <Button onClick={() => router.push(PATHS.ADMIN_LOGIN)}>Login</Button>
        <ModalLoading isLoading={isMutating} />
      </Box>
    </Layout>
  );
}
