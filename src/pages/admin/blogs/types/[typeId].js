import ModalLoading from "components/modalLoading";
import { commonStyles } from "pages/works/web-content";
import { useCheckPageValid } from "queries";
import { Box, Heading } from "theme-ui";
import { PATHS } from "theme/constant";

export default function IndexPage() {
  useCheckPageValid({ isRequireAuth: true, fallbackPath: PATHS.ADMIN_LOGIN });

  return (
    <>
      <Box sx={commonStyles.container} id="resume-content">
        <Heading as="h1" sx={commonStyles.h1}>
          Blog Type Detail
        </Heading>

        <ModalLoading />
      </Box>
    </>
  );
}
