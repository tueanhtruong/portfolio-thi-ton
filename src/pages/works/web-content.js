import banner1 from "assets/web-contents/banner1.webp";
import banner2 from "assets/web-contents/banner2.webp";
import banner3 from "assets/web-contents/banner3.webp";
import gift1 from "assets/web-contents/g1.webp";
import gift10 from "assets/web-contents/g10.webp";
import gift11 from "assets/web-contents/g11.webp";
import gift12 from "assets/web-contents/g12.webp";
import gift13 from "assets/web-contents/g13.webp";
import gift14 from "assets/web-contents/g14.webp";
import gift15 from "assets/web-contents/g15.webp";
import gift16 from "assets/web-contents/g16.webp";
import gift17 from "assets/web-contents/g17.webp";
import gift18 from "assets/web-contents/g18.webp";
import gift19 from "assets/web-contents/g19.webp";
import gift2 from "assets/web-contents/g2.webp";
import gift20 from "assets/web-contents/g20.webp";
import gift21 from "assets/web-contents/g21.webp";
import gift22 from "assets/web-contents/g22.webp";
import gift23 from "assets/web-contents/g23.webp";
import gift24 from "assets/web-contents/g24.webp";
import gift25 from "assets/web-contents/g25.webp";
import gift26 from "assets/web-contents/g26.webp";
import gift27 from "assets/web-contents/g27.webp";
import gift28 from "assets/web-contents/g28.webp";
import gift29 from "assets/web-contents/g29.webp";
import gift3 from "assets/web-contents/g3.webp";
import gift30 from "assets/web-contents/g30.webp";
import gift31 from "assets/web-contents/g31.webp";
import gift32 from "assets/web-contents/g32.webp";
import gift33 from "assets/web-contents/g33.webp";
import gift34 from "assets/web-contents/g34.webp";
import gift35 from "assets/web-contents/g35.webp";
import gift4 from "assets/web-contents/g4.webp";
import gift5 from "assets/web-contents/g5.webp";
import gift6 from "assets/web-contents/g6.webp";
import gift7 from "assets/web-contents/g7.webp";
import gift8 from "assets/web-contents/g8.webp";
import gift9 from "assets/web-contents/g9.webp";
import ImageBtn from "components/imageBtn";
import Layout from "components/layout";
import ModalImage from "components/modalImage";
import { Box, Flex, Heading, Button } from "theme-ui";
import giftHead1 from "assets/web-contents/gh1.webp";
import giftHead2 from "assets/web-contents/gh2.webp";
import giftHead3 from "assets/web-contents/gh3.webp";
import { PATHS } from "theme/constant";
import { Slide } from "react-slideshow-image";
import wedding1 from "assets/wedding/w1.webp";
import wedding2 from "assets/wedding/w2.webp";
import wedding3 from "assets/wedding/w3.webp";
import wedding4 from "assets/wedding/w4.webp";
import wedding5 from "assets/wedding/w5.webp";
import wedding6 from "assets/wedding/w6.webp";
import wedding7 from "assets/wedding/w7.webp";
import wedding8 from "assets/wedding/w8.webp";
import wedding9 from "assets/wedding/w9.webp";
import wedding10 from "assets/wedding/w10.webp";
import wedding11 from "assets/wedding/w11.webp";
import wedding12 from "assets/wedding/w12.webp";
import wedding13 from "assets/wedding/w13.webp";
import wedding14 from "assets/wedding/w14.webp";
import pet1 from "assets/pets/p1.webp";
import pet2 from "assets/pets/p2.webp";
import pet3 from "assets/pets/p3.webp";
import pet4 from "assets/pets/p4.webp";
import pet5 from "assets/pets/p5.webp";
import pet6 from "assets/pets/p6.webp";
import pet7 from "assets/pets/p7.webp";
import pet8 from "assets/pets/p8.webp";
import pet9 from "assets/pets/p9.webp";
import pet10 from "assets/pets/p10.webp";
import pet11 from "assets/pets/p11.webp";
import pet12 from "assets/pets/p12.webp";
import pet13 from "assets/pets/p13.webp";
import pet14 from "assets/pets/p14.webp";
import pet15 from "assets/pets/p15.webp";
import pet16 from "assets/pets/p16.webp";
import pet17 from "assets/pets/p17.webp";

const GiftHeader = [giftHead1, giftHead2, giftHead3];
const GiftImages = [
  gift1,
  gift2,
  gift3,
  gift4,
  gift5,
  gift6,
  gift7,
  gift8,
  gift9,
  gift10,
  gift11,
  gift12,
  gift13,
  gift14,
  gift15,
  gift16,
  gift17,
  gift18,
  gift19,
  gift20,
  gift21,
  gift22,
  gift23,
  gift24,
  gift25,
  gift26,
  gift27,
  gift28,
  gift29,
  gift30,
  gift31,
  gift32,
  gift33,
  gift34,
  gift35,
];

const WeddingImages = [
  wedding1,
  wedding2,
  wedding3,
  wedding4,
  wedding5,
  wedding6,
  wedding7,
  wedding8,
  wedding9,
  wedding10,
  wedding11,
  wedding12,
  wedding13,
  wedding14,
];

const PetImages = [
  pet1,
  pet2,
  pet3,
  pet4,
  pet5,
  pet6,
  pet7,
  pet8,
  pet9,
  pet10,
  pet11,
  pet12,
  pet13,
  pet14,
  pet15,
  pet16,
  pet17,
];

const scrollOptions = [
  {
    path: "gift-ideas",
    label: "Gift Ideas",
  },
  {
    path: "wedding-planning",
    label: "Wedding Planning",
  },
  {
    path: "pets",
    label: "Pets",
  },
];

const endButton = {
  label: "My Works",
  path: PATHS.WORKS,
};

const responsiveSettings = [
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
    },
  },
  {
    breakpoint: 800,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
    },
  },
  {
    breakpoint: 300,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  },
];

export default function IndexPage() {
  return (
    <Layout scrollOptions={scrollOptions} endButton={endButton}>
      <Box sx={styles.container}>
        <Heading as="h1" sx={styles.h1}>
          Web Contents
        </Heading>
        <Heading as="p" sx={styles.p}>
          As a content writer, I can write up to 2 SEO English blog posts with
          over 2000 words, including images, within a day. Moreover, I am also
          responsible for auditing websites to optimize the search engine using
          Screaming Frog, Google Search Console, Surferseo, Ahrefs, etc., and
          making it user-friendly.{" "}
        </Heading>
        <Heading
          as="p"
          sx={{ ...styles.p, color: "#c89956", fontSize: "22px", mt: "40px" }}
          id="gift-ideas"
        >
          GIFT IDEAS
        </Heading>
        <Heading as="p" sx={{ ...styles.p, color: "#877b58" }}>
          This article about Gift Ideas is now on the 1st Google ranking and has
          about 100 clicks in about 5000 traffics. It is now live on an
          E-commerce website which has about 4000 clicks in about 180000
          traffics.
        </Heading>
        <Heading as="p" sx={styles.caption}>
          Statics about Oh Canvas, an E-commerce website that focusing on
          selling artwork.
        </Heading>
        <Flex sx={styles.banner}>
          <ImageBtn
            sx={styles.bannerImg}
            src={banner1}
            alt="web-content-banner1"
          />
          <ImageBtn
            sx={styles.bannerImg}
            src={banner2}
            alt="web-content-banner2"
          />
          <ImageBtn
            sx={styles.bannerImg}
            src={banner3}
            alt="web-content-banner3"
          />
        </Flex>
        <Heading as="p" sx={styles.caption}>
          Statics about the article that generated by me.
        </Heading>
        <Slide
          indicators={true}
          duration={5000}
          transitionDuration={500}
          autoplay={false}
        >
          {GiftHeader.map((img, idx) => (
            <Box sx={styles.slideImg} key={`gift-statistic-works-${idx}`}>
              <ImageBtn
                sx={{ height: 580 }}
                src={img}
                alt={`gift-statistic-works-${idx}`}
              />
            </Box>
          ))}
        </Slide>
        <Flex>
          <Button
            sx={{ margin: "16px auto 24px" }}
            onClick={() =>
              window.open(
                "https://ohcanvas.com/creative-diy-anniversary-gifts/",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            Click here to see the live article
          </Button>
        </Flex>
        <Slide
          indicators={true}
          duration={5000}
          transitionDuration={500}
          autoplay={false}
          slidesToScroll={3}
          slidesToShow={3}
          responsive={responsiveSettings}
        >
          {GiftImages.map((img, idx) => (
            <Box sx={styles.slideImg} key={`gift-works-${idx}`}>
              <ImageBtn
                sx={{ height: 580 }}
                src={img}
                alt={`gift-works-${idx}`}
              />
            </Box>
          ))}
        </Slide>
        <Heading
          as="p"
          sx={{ ...styles.p, color: "#c89956", fontSize: "22px", mt: "40px" }}
          id="wedding-planning"
        >
          WEDDING PLANNING
        </Heading>
        <Heading as="p" sx={{ ...styles.p, color: "#877b58" }}>
          This article about Wedding Planning is on the PBN project. I am also
          responsible for creating the keyword plan for the whole website and
          ensuring all contents' quality including good information, internal
          links, external links, backlinks.
        </Heading>
        <Flex>
          <Button
            sx={{ margin: "16px auto 24px" }}
            onClick={() =>
              window.open(
                "https://vivaweddingphotography.com/average-price-of-a-wedding/",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            Click here to see the live article
          </Button>
        </Flex>
        <Slide
          indicators={true}
          duration={5000}
          transitionDuration={500}
          autoplay={false}
          slidesToScroll={3}
          slidesToShow={3}
          responsive={responsiveSettings}
        >
          {WeddingImages.map((img, idx) => (
            <Box sx={styles.slideImg} key={`gift-works-${idx}`}>
              <ImageBtn
                sx={{ height: 580 }}
                src={img}
                alt={`gift-works-${idx}`}
              />
            </Box>
          ))}
        </Slide>
        <Heading
          as="p"
          sx={{ ...styles.p, color: "#c89956", fontSize: "22px", mt: "40px" }}
          id="pets"
        >
          PETS
        </Heading>
        <Heading as="p" sx={{ ...styles.p, color: "#877b58" }}>
          This article is about Pets. On this website, I am responsible for
          creating content, ensuring the quality of the content and keyword
          plan, make the website friendly to users and Google bots.
        </Heading>
        <Flex>
          <Button
            sx={{ margin: "16px auto 24px" }}
            onClick={() =>
              window.open(
                "https://blog.canvaspersonalized.com/lynx-point-siamese/",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            Click here to see the live article
          </Button>
        </Flex>
        <Slide
          indicators={true}
          duration={5000}
          transitionDuration={500}
          autoplay={false}
          slidesToScroll={3}
          slidesToShow={3}
          responsive={responsiveSettings}
        >
          {PetImages.map((img, idx) => (
            <Box sx={styles.slideImg} key={`gift-works-${idx}`}>
              <ImageBtn
                sx={{ height: 580 }}
                src={img}
                alt={`gift-works-${idx}`}
              />
            </Box>
          ))}
        </Slide>
      </Box>
      <ModalImage alt="Web Content Works" />
    </Layout>
  );
}

const styles = {
  container: {
    padding: "16px",
    maxWidth: 1280,
    margin: "132px auto",
  },
  banner: {
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: "48px",
  },
  slideImg: {
    minHeight: 580,
    height: "100%",
    display: "flex",
    justifyContent: "center",
  },
  bannerImg: {
    margin: "8px",
    minWidth: 280,
    maxWidth: 400,
  },
  h1: {
    color: "#222",
    fontSize: "30px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "34px",
    paddingBottom: "20px",
    paddingTop: "0px",
    textAlign: "center",
  },
  p: {
    color: "#222",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "26px",
    paddingBottom: "20px",
    paddingTop: "0px",
    textAlign: "center",
  },
  caption: {
    color: "#999",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "18px",
    paddingBottom: "0px",
    paddingTop: "15px",
    textAlign: "center",
    margin: "24px 0 12px",
  },
};
