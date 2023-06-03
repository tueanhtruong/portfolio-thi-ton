import Layout from "components/layout";
import { Box, Heading, Flex } from "theme-ui";
import webContent from "assets/web-content.webp";
import socialContent from "assets/social-content.webp";
import keyWord from "assets/key-word.webp";
import emailMarketing from "assets/email-marketing.webp";
import { Link } from "components/link";
import Image from "components/image";
import { PATHS } from "theme/constant";

const WorkItems = [
  {
    src: webContent,
    title: "Web Content",
    year: "2023",
    path: PATHS.WEB_CONTENT,
  },
  {
    src: keyWord,
    title: "Keyword Research",
    year: "2023",
    path: PATHS.KEYWORD_RESEARCH,
    blackTheme: true,
  },
  {
    src: emailMarketing,
    title: "Email Marketing",
    year: "2023",
    path: PATHS.EMAIL_MARKETING,
    blackTheme: true,
  },
  {
    src: socialContent,
    title: "Social Content",
    year: "2023",
    path: PATHS.SOCIAL_CONTENT,
  },
];

export default function IndexPage() {
  return (
    <Layout>
      <Box sx={styles.container}>
        <Heading as="h1" sx={styles.h1}>
          My Works
        </Heading>
        <Heading as="p" sx={styles.p}>
          Welcome to my page! Below are some of my recent works. Scroll down for
          more details!
        </Heading>
        <Flex sx={{ flexWrap: "wrap", justifyContent: "center" }}>
          {WorkItems.map((item) => (
            <FigureImage {...item} key={`FigureImage-${item.path}`} />
          ))}
        </Flex>
      </Box>
    </Layout>
  );
}

export const FigureImage = ({
  src,
  title = "The Content",
  year = "2023",
  path = "/",
  blackTheme = false,
}) => (
  <Link path={path}>
    <Box sx={styles.figureImageBox}>
      <figure style={{ "--c": blackTheme ? "#0009" : "#fff" }}>
        <Image
          src={src}
          alt="banner image"
          css={{
            maxWidth: 540,
            maxHeight: 350,
          }}
        />
        <figcaption>
          <p>
            {/* <span>{year}</span>
            <br /> */}
            {title}
          </p>
        </figcaption>
      </figure>
    </Box>
  </Link>
);

const styles = {
  figureImageBox: {
    figure: {
      display: "grid",
      overflow: "hidden",
      cursor: "pointer",
      transition: ".2s",
      margin: "16px",
    },
    "figure > *": {
      gridArea: "1/1",
      transition: ".4s",
    },
    "figure figcaption": {
      // "--c": "#fff",
      // "--_i": ["0%", null, null, "100%"],
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "2.5rem",
      fontWeight: "bold",
      color: "#0000",
      padding: ".75rem",
      zIndex: 2,
      margin: "32px 32px",

      // background: "var(--c,#0009)",
      // clipPath: "inset(32px var(--_i,100%) 32px 0)",
      // "-webkit-mask": "linear-gradient(#000 0 0), linear-gradient(#000 0 0)",
      // "-webkit-mask-composite": "xor",
      // "-webkit-mask-clip": "text, padding-box",
      span: {
        fontSize: "1.5rem",
      },
      p: {
        lineHeight: "3rem",
      },
    },
    "figure:hover figcaption": {
      // "--_i": "0%",
      margin: "64px 0",
      background: "#fff",
      color: "#012B55",
    },
    "figure:hover img": {
      transform: "scale(1.2)",
    },
    "figure:hover": {
      boxShadow: "0px 25px 100px rgba(69, 88, 157, 0.6)",
    },
    // "@supports not (-webkit-mask-clip: text)": {
    //   "figure figcaption": {
    //     "-webkit-mask": "none",
    //     color: "#fff",
    //   },
    // },
  },
  container: {
    padding: "16px",
    maxWidth: 1280,
    margin: "132px auto",
  },
  h1: {
    color: "#012B55",
    fontSize: "28px",
    fontStyle: "normal",
    fontWeight: "500",
    marginBottom: "10px",
    marginTop: "0px",
    textAlign: "center",
  },
  p: {
    color: "#597188",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "500",
    marginBottom: "10px",
    marginTop: "0px",
    textAlign: "center",
  },
};
