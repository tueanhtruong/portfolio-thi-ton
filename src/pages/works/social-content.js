import ImageBtn from "components/imageBtn";
import Layout from "components/layout";
import ModalImage from "components/modalImage";
import { Box, Flex, Heading, Button } from "theme-ui";
import { PATHS } from "theme/constant";

import social1 from "assets/social-content/s1.webp";
import social2 from "assets/social-content/s2.webp";
import social3 from "assets/social-content/s3.webp";

import emailMarketing from "assets/email-marketing.webp";
import keyWord from "assets/key-word.webp";
import { FigureImage } from ".";
import { commonStyles } from "./web-content";

const OtherWorkItems = [
  {
    src: emailMarketing,
    title: "Email Marketing",
    year: "2023",
    path: PATHS.EMAIL_MARKETING,
    blackTheme: true,
  },
  {
    src: keyWord,
    title: "Keyword Research",
    year: "2023",
    path: PATHS.KEYWORD_RESEARCH,
    blackTheme: true,
  },
];

const SocialImages = [social1, social2, social3];

const socialImagesUrls = SocialImages.map((u, idx) => ({
  url: u,
  title: `Social content ${idx + 1}`,
}));

const scrollOptions = [
  {
    path: "social-content",
    label: "Social Content",
  },
];

const endButton = {
  label: "My Works",
  path: PATHS.WORKS,
};

export default function IndexPage() {
  return (
    <Layout scrollOptions={scrollOptions} endButton={endButton}>
      <Box
        sx={{ ...commonStyles.container, paddingTop: 80, marginTop: 60 }}
        id="social-content"
      >
        <Heading as="h1" sx={commonStyles.h1}>
          Social Content
        </Heading>
        <Heading as="p" sx={{ ...commonStyles.p, marginBottom: 32 }}>
          This project is about planning a content strategy on Facebook for a
          ten-member group for a fashion event. I was also responsible for
          finding sponsors, contacting guests and special guests, and setting up
          the event.
        </Heading>
        <Flex>
          <Button
            sx={{ margin: "16px auto 24px" }}
            onClick={() =>
              window.open(
                "https://fb.me/e/157nBFoXg",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            Click here to see the live campaign
          </Button>
        </Flex>
        {SocialImages.map((img, idx) => (
          <ImageBtn
            sx={{ width: "100%" }}
            src={img}
            alt={`social-works-${idx}`}
            startIndex={idx}
            urls={socialImagesUrls}
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
