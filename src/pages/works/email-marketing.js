import ImageBtn from "components/imageBtn";
import ModalImage from "components/modalImage";
import { Box, Flex, Heading } from "theme-ui";
import { PATHS } from "theme/constant";

import email1 from "assets/email/e1.webp";
import email2 from "assets/email/e2.webp";
import email3 from "assets/email/e3.webp";
import email4 from "assets/email/e4.webp";
import email5 from "assets/email/e5.webp";

import keyWord from "assets/key-word.webp";
import socialContent from "assets/social-content.webp";
import { useStickyDispatch } from "contexts/app/app.provider";
import { useEffect } from "react";
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
const EmailFBImages = [email3, email4, email5];

const emailImagesUrls = EmailImages.map((u, idx) => ({
  url: u,
  title: `Email marketing ${idx + 1}`,
}));

const emailFBImagesUrls = EmailFBImages.map((u, idx) => ({
  url: u,
  title: `F&B Merchants email marketing ${idx + 1}`,
}));

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
  const dispatch = useStickyDispatch();
  useEffect(() => {
    dispatch({
      type: "SET_LAYOUT_PROPS",
      scrollOptions,
      endButton,
    });
    return () =>
      dispatch({
        type: "SET_LAYOUT_PROPS",
        scrollOptions: [],
        endButton: null,
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Box
        sx={{ ...commonStyles.container, paddingTop: 80, marginTop: 60 }}
        id="email-marketing"
      >
        <Heading as="h1" sx={commonStyles.h1}>
          Email Marketing
        </Heading>
        <Heading as="p" sx={{ ...commonStyles.p, marginBottom: 32 }}>
          As a content writer, I also have an opportunity to generate some email
          marketing.
        </Heading>
        <Heading
          as="p"
          sx={{
            ...commonStyles.p,
            marginBottom: 32,
            color: "#999",
            fontSize: 16,
          }}
        >
          This project is about creating email marketing content for an
          e-commerce website. These are automation emails for the
          lastest-purchasing anniversaries.
        </Heading>

        {EmailImages.map((img, idx) => (
          <ImageBtn
            sx={{ width: "100%" }}
            src={img}
            alt={`keyword-works-${idx}`}
            startIndex={idx}
            urls={emailImagesUrls}
          />
        ))}
        <Heading
          as="p"
          sx={{
            ...commonStyles.p,
            marginBottom: 32,
            marginTop: 64,
            color: "#999",
            fontSize: 16,
          }}
        >
          This is an email marketing campaign targeting the F&B Merchants in
          Singapore to provide them with a “FREE Point of Sale (POS)”.
        </Heading>
        {EmailFBImages.map((img, idx) => (
          <ImageBtn
            sx={{ width: "100%" }}
            src={img}
            alt={`emailFBImages-works-${idx}`}
            startIndex={idx}
            urls={emailFBImagesUrls}
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
    </>
  );
}
