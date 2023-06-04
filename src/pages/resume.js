import ImageBtn from "components/imageBtn";
import Layout from "components/layout";
import ModalImage from "components/modalImage";
import { Box, Button, Flex, Heading } from "theme-ui";
import { PATHS } from "theme/constant";

import resume1 from "assets/resume/r1.webp";
import resume2 from "assets/resume/r2.webp";

import { commonStyles } from "./works/web-content";
import { useRouter } from "next/router";

const ResumeImages = [resume1, resume2];

export default function IndexPage() {
  const router = useRouter();
  return (
    <Layout>
      <Box sx={commonStyles.container} id="resume-content">
        <Heading as="h1" sx={commonStyles.h1}>
          Resume
        </Heading>
        <Heading
          as="p"
          sx={{
            ...commonStyles.p,
            marginBottom: "8px",
            textAlign: "left",
          }}
        >
          I have around 3 years of experience in content writing about gifts,
          pets, wedding planning, finance, product review, and home decor in
          both English and Vietnamese.
        </Heading>
        <Heading
          as="p"
          sx={{
            ...commonStyles.p,
            marginBottom: "8px",
            textAlign: "left",
          }}
        >
          In addition, I also have experience in ranking keywords on the first
          Google page, which is about reviewing the content on websites;
          including ensuring the quality of the content and internal and
          external links; creating website backlinks; researching keywords; and
          making the website friendly to both users and Google bots.
        </Heading>
        <Heading
          as="p"
          sx={{
            ...commonStyles.p,
            marginBottom: "8px",
            textAlign: "left",
          }}
        >
          I love to invest my time profoundly and understand the Marketing
          industry. With all my experience and enthusiasm, I strive to be the
          greatest at work!
        </Heading>

        {ResumeImages.map((img, idx) => (
          <ImageBtn sx={{ width: "100%" }} src={img} alt={`resume-${idx}`} />
        ))}
        <Flex>
          <Button
            sx={{ margin: "64px auto 0" }}
            onClick={() => router.push(PATHS.WORKS)}
          >
            Click here to see more about my works
          </Button>
        </Flex>
      </Box>
      <ModalImage alt="Web Content Works" />
    </Layout>
  );
}
