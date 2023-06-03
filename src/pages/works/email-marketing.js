import ImageBtn from "components/imageBtn";
import Layout from "components/layout";
import ModalImage from "components/modalImage";
import { Box, Flex, Heading } from "theme-ui";
import { PATHS } from "theme/constant";

import email1 from "assets/email/e1.webp";
import email2 from "assets/email/e2.webp";
import socialContent from "assets/social-content.webp";
import keyWord from "assets/key-word.webp";
import { FigureImage } from ".";
import { commonStyles } from "./web-content";

const OtherWorkItems = [
  {
    src: keyWord,
    title: "Keyword Research",
    year: "2023",
    path: PATHS.KEYWORD_RESEARCH,
    blackTheme: true,
  },
  {
    src: socialContent,
    title: "Social Content",
    year: "2023",
    path: PATHS.SOCIAL_CONTENT,
  },
];

const EmailImages = [email1, email2];

const scrollOptions = [
  {
    path: "email-marketing",
    label: "Email Marketing",
  },
];

const endButton = {
  label: "My Works",
  path: PATHS.WORKS,
};

export default function IndexPage() {
  return (
    <Layout scrollOptions={scrollOptions} endButton={endButton}>
      <Box sx={commonStyles.container} id="email-marketing">
        <Heading as="h1" sx={commonStyles.h1}>
          Email Marketing
        </Heading>
        <Heading as="p" sx={{ ...commonStyles.p, marginBottom: 32 }}>
          This project is about creating email marketing content for an
          e-commerce website. These are automation emails for the
          lastest-purchasing anniversaries.
        </Heading>

        {EmailImages.map((img, idx) => (
          <ImageBtn
            sx={{ width: "100%" }}
            src={img}
            alt={`keyword-works-${idx}`}
          />
        ))}
        <Heading
          as="h3"
          sx={{ ...commonStyles.p, fontSize: "22px", mt: "40px" }}
          id="fashion"
        >
          You may also like
        </Heading>
        <Flex sx={{ flexWrap: "wrap", justifyContent: "center" }}>
          {OtherWorkItems.map((item) => (
            <FigureImage {...item} key={`FigureImage-${item.path}`} />
          ))}
        </Flex>
      </Box>
      <ModalImage alt="Web Content Works" />
    </Layout>
  );
}
