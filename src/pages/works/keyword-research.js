import ImageBtn from "components/imageBtn";
import Layout from "components/layout";
import ModalImage from "components/modalImage";
import { Slide } from "react-slideshow-image";
import { Box, Flex, Heading } from "theme-ui";
import { PATHS } from "theme/constant";

import keyword1 from "assets/keyword/k1.webp";
import keyword10 from "assets/keyword/k10.webp";
import keyword11 from "assets/keyword/k11.webp";
import keyword12 from "assets/keyword/k12.webp";
import keyword2 from "assets/keyword/k2.webp";
import keyword3 from "assets/keyword/k3.webp";
import keyword4 from "assets/keyword/k4.webp";
import keyword5 from "assets/keyword/k5.webp";
import keyword6 from "assets/keyword/k6.webp";
import keyword7 from "assets/keyword/k7.webp";
import keyword8 from "assets/keyword/k8.webp";
import keyword9 from "assets/keyword/k9.webp";

import emailMarketing from "assets/email-marketing.webp";
import webContent from "assets/web-content.webp";
import { FigureImage } from ".";
import { commonStyles, responsiveSettings } from "./web-content";

const OtherWorkItems = [
  {
    src: webContent,
    title: "Web Content",
    year: "2023",
    path: PATHS.WEB_CONTENT,
  },
  {
    src: emailMarketing,
    title: "Email Marketing",
    year: "2023",
    path: PATHS.EMAIL_MARKETING,
    blackTheme: true,
  },
];

const KeywordImages = [
  keyword1,
  keyword2,
  keyword3,
  keyword4,
  keyword5,
  keyword6,
  keyword7,
  keyword8,
  keyword9,
  keyword10,
  keyword11,
  keyword12,
];

const keywordImagesUrls = KeywordImages.map((u, idx) => ({
  url: u,
  title: `Keyword research ${idx + 1}`,
}));

const scrollOptions = [
  {
    path: "keyword-research",
    label: "Keyword Research",
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
        id="keyword-research"
      >
        <Heading as="h1" sx={commonStyles.h1}>
          Keyword Research
        </Heading>
        <Heading as="p" sx={commonStyles.p}>
          This project is about researching keywords for a PBN website using
          Ahrefs, Google Keyword Planner, Keyword Tool, etc.
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
          {KeywordImages.map((img, idx) => (
            <Box sx={commonStyles.slideImg} key={`keyword-works-${idx}`}>
              <ImageBtn
                sx={{ height: 580, objectFit: "cover" }}
                src={img}
                alt={`keyword-works-${idx}`}
                startIndex={idx}
                urls={keywordImagesUrls}
              />
            </Box>
          ))}
        </Slide>
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
