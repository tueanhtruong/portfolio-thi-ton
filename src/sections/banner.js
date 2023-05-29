import { Box, Flex, Heading, Text, Button } from "theme-ui";

import { FaBehance, FaLinkedinIn, FaMailBulk } from "react-icons/fa";

import BannerImage from "assets/banner-image-1.webp";
import { useRouter } from "next/router";

const Banner = () => {
  const route = useRouter();
  return (
    <Box id="banner" sx={styles.banner}>
      <Flex sx={styles.banner.row}>
        <Box sx={styles.banner.col}>
          <Box sx={styles.banner.content}>
            <Heading as="h1">Ton Nu Mai Thi</Heading>
            <Text as="p">
              I am a creative, organized, and efficient specialist in writing
              English content with experience and knowledge of search engine
              algorithms. I'm also skilled with keyword research and data mining
              instruments and ranking techniques.
            </Text>
            <Heading as="h2">SOCIAL MEDIA</Heading>

            <Box sx={styles.banner.partner}>
              <a href={"https://www.behance.net/maithitnn"} target="_blank">
                <FaBehance size={20} color="#2374E1" />
              </a>
              <a
                href={"https://www.linkedin.com/in/mai-thi-ton-nu/"}
                target="_blank"
              >
                <FaLinkedinIn size={20} color="#004182" />
              </a>
              <a href={"mailto:maithitnmt@gmail.com"} target="_blank">
                <FaMailBulk size={20} color="#000000" />
              </a>
            </Box>
            <Button onClick={() => route.push("/works")} sx={{ mt: 4 }}>
              See more about my works
            </Button>
          </Box>
        </Box>
        <Box sx={styles.banner.col}>
          <Box sx={styles.banner.imageInner}></Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Banner;

const styles = {
  banner: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    overflow: "auto",
    backgroundImage: ["linear-gradient(-180deg, #F5F0EA 0%, #0361d015 100%)"],
    backgroundPosition: "left top",
    backgroundRepeat: "no-repeat",
    container: {
      maxWidth: "100%",
      pl: "0px !important",
      pr: "0px !important",
      height: "100vh !important",
    },
    row: {
      flexWrap: "wrap-reverse",
      display: "flex",
      height: ["100%", null, "100vh"],
    },
    col: {
      flex: ["1 1 100%", null, "0 0 50%"],
      alignItems: "center",
    },
    content: {
      padding: "24px 64px",
      color: "#c89956",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      h2: {
        color: "#c89956",
        mt: 3,
      },
      h1: {
        color: "#c89956",
        lineHeight: 1.18,
        fontWeight: "600",
        position: "relative",
        width: "100%",
        fontSize: ["28px", "32px", null, "40px", null, "48px", "64px"],
        maxWidth: ["500px", null, null, null, null, null, "100%"],
        textAlign: "center",
      },
      p: {
        textAlign: "center",
        color: "#877b58",
        lineHeight: 1.8,
        // color: "#02073E",
        marginTop: ["10px", null, null, "35px"],
        fontSize: ["15px", "18px"],
        pr: ["15px", 0],
        br: {
          display: ["none", null, null, null, null, "block"],
        },
      },
    },

    partner: {
      display: "flex",
      flexDirection: ["row", null, null, null, null, "row"],
      alignItems: ["center", null, null, null, null, "center"],
      color: "rgba(2, 7, 62,.6)",
      fontSize: ["15px", null, "18px"],
      marginTop: "8px",

      span: {
        display: ["block", null, "inline-block"],
      },
      a: {
        mx: "4px",
        height: 44,
        width: 44,
        background: "rgba(84, 65, 1, 0.08)",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
    },
    imageInner: {
      position: "relative",
      width: "100%",
      minHeight: "50vh",
      height: "100%",
      backgroundImage: `url(${BannerImage})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: [
        "contain",
        "contain",
        "contain",
        "contain",
        null,
        "cover",
      ],

      ".videoBtn": {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        zIndex: 10,
      },
    },
  },
};
