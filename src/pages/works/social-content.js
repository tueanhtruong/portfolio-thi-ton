import ImageBtn from "components/imageBtn";
import ModalImage from "components/modalImage";
import { Slide } from "react-slideshow-image";
import { Box, Button, Flex, Heading } from "theme-ui";
import { PATHS } from "theme/constant";

import social1 from "assets/social-content/s1.webp";
import social2 from "assets/social-content/s2.webp";
import social3 from "assets/social-content/s3.webp";

import social10 from "assets/social-content/s10.webp";
import social4 from "assets/social-content/s4.webp";
import social5 from "assets/social-content/s5.webp";
import social6 from "assets/social-content/s6.webp";
import social7 from "assets/social-content/s7.webp";
import social8 from "assets/social-content/s8.webp";
import social9 from "assets/social-content/s9.webp";

import emailMarketing from "assets/email-marketing.webp";
import keyWord from "assets/key-word.webp";
import { useStickyDispatch } from "contexts/app/app.provider";
import { useEffect } from "react";
import { FigureImage } from ".";
import { commonStyles, responsiveSettings } from "./web-content";

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

const SocialFacebookImages = [social1, social2, social3];
const SocialContentImages = [
  social4,
  social5,
  social6,
  social7,
  social8,
  social9,
  social10,
];

const socialFacebookImagesUrls = SocialFacebookImages.map((u, idx) => ({
  url: u,
  title: `Facebook content plan ${idx + 1}`,
}));

const socialImagesUrls = SocialContentImages.map((u, idx) => ({
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
        id="social-content"
      >
        <Heading as="h1" sx={commonStyles.h1}>
          Social Content
        </Heading>
        <Heading as="p" sx={{ ...commonStyles.p, marginBottom: 32 }}>
          This page is about some of the content I generated and plans I made on
          Facebook mainly.
        </Heading>
        <Heading
          as="p"
          sx={{ ...commonStyles.p, fontSize: 15, fontWeight: 700 }}
        >
          Facebook Content Plan
        </Heading>
        <Heading
          as="p"
          sx={{ ...commonStyles.p, marginBottom: 32, color: "#999" }}
        >
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
        {SocialFacebookImages.map((img, idx) => (
          <ImageBtn
            sx={{ width: "100%" }}
            src={img}
            alt={`social-works-${idx}`}
            startIndex={idx}
            urls={socialFacebookImagesUrls}
          />
        ))}

        <Heading
          as="p"
          sx={{
            ...commonStyles.p,
            fontSize: 15,
            fontWeight: 700,
            marginTop: 32,
          }}
        >
          Social Content
        </Heading>
        <Heading
          as="p"
          sx={{ ...commonStyles.p, marginBottom: 32, color: "#999" }}
        >
          This project is about introducing a course on Enterprise Legal Status
          and telling a story about freckle treating journey.
        </Heading>
        <Slide
          indicators={true}
          duration={5000}
          transitionDuration={500}
          autoplay={false}
          slidesToScroll={3}
          slidesToShow={3}
          responsive={responsiveSettings}
        >
          {SocialContentImages.map((img, idx) => (
            <Box sx={commonStyles.slideImg} key={`gift-statistic-works-${idx}`}>
              <ImageBtn
                sx={{ height: 580, objectFit: "cover" }}
                src={img}
                alt={`gift-statistic-works-${idx}`}
                startIndex={idx}
                urls={socialImagesUrls}
              />
            </Box>
          ))}
        </Slide>

        <Heading
          as="h3"
          sx={{ ...commonStyles.p, fontSize: "22px", mt: "40px" }}
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
