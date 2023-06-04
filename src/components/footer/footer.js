/** @jsx jsx */
import { jsx, Heading, Box, Divider, Container } from "theme-ui";
import { Link } from "components/link";
import menuItems from "./footer.data";
import logoFull from "assets/logo-footer.svg";
import { Image } from "theme-ui";
import { PATHS } from "theme/constant";
import { webContentScrollOptions } from "pages/works/web-content";

const mySkills = [
  "Experienced in managing, coaching and motivating creative teams",
  "Writing contents in website, social media in both Vietnamese and English",
  "Building a group on Facebook",
  "Possesses good communication, organizational and problem-solving skills",
  "Proficient in Canva and Photoshop ",
  "Well-versed in market and customer trends",
  "Good at teamwork",
  "Planning events",
];

const subItems = [
  // {
  //   path: PATHS.WEB_CONTENT,
  //   label: "Web Content",
  // },
  {
    path: PATHS.KEYWORD_RESEARCH,
    label: "Keyword Research",
  },
  {
    path: PATHS.EMAIL_MARKETING,
    label: "Email Marketing",
  },
  {
    path: PATHS.SOCIAL_CONTENT,
    label: "Social Content",
  },
];

export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Divider sx={styles.footer.divider} />
      <Container sx={styles.footer.container}>
        <Box sx={styles.footer.widget}>
          <Heading sx={styles.footer.title}>About Me</Heading>
          <Heading as="p" sx={styles.footer.caption} mb={3}>
            A creative, organized, and efficient specialist with 3+ years of
            content writing experience and knowledge of search engine algorithms
            and ranking techniques.
          </Heading>
          <Heading as="p" sx={styles.footer.caption}>
            I'm also skilled with keyword research and data mining instruments
            such as Google Search Console, Google Keyword Planner, Google
            Analytics, Ahrefs, Majestic, Screaming Frog, Keyword Tool, SEO
            Quake, Surferseo, SERP Robot, etc., to make the content more
            friendly with both users and search engines.
          </Heading>
        </Box>
        <Box sx={styles.footer.widget}>
          <Heading sx={styles.footer.title}>My Works</Heading>
          <Link
            sx={styles.footer.text}
            path={PATHS.WEB_CONTENT}
            label={"Web Content"}
            variant="footer"
          />
          {webContentScrollOptions.map(({ path, label }, i) => (
            <Link
              sx={{ ...styles.footer.text, fontSize: 14, marginLeft: 4 }}
              path={`${PATHS.WEB_CONTENT}#${path}`}
              key={label + path + i}
              label={label}
              variant="footer"
            />
          ))}
          {subItems.map(({ path, label }, i) => (
            <Link
              sx={styles.footer.text}
              path={path}
              key={label + path + i}
              label={label}
              variant="footer"
            />
          ))}
        </Box>
        <Box sx={styles.footer.widget}>
          <Link
            sx={styles.footer.title}
            path={PATHS.RESUME}
            label={"Resume"}
            variant="footer"
          />
          {mySkills.map((s, i) => (
            <Heading
              as="p"
              sx={{ ...styles.footer.caption, display: "list-item" }}
              key={`skill-${i}`}
              mb={2}
              ml={3}
            >
              {s}
            </Heading>
          ))}
        </Box>
        <Box sx={styles.footer.widget}>
          <Heading sx={styles.footer.title}>Contact Information</Heading>
          <Heading as="p" sx={styles.footer.text} mb={3}>
            Email:
            <a style={{ marginLeft: 8 }} href="mailto:maithitnmt@gmail.com">
              maithitnmt@gmail.com
            </a>
          </Heading>
          <Heading as="p" sx={styles.footer.text}>
            Phone:
            <span style={{ marginLeft: 8 }}>0935065925</span>
          </Heading>
          <Image
            src={logoFull}
            alt="footer logo"
            css={{
              width: 380,
              objectFit: "cover",
              display: "block",
            }}
          />
        </Box>
      </Container>
    </footer>
  );
}

const styles = {
  footer: {
    paddingBottom: "60px",
    "@media(max-width: 1024px)": {
      paddingBottom: "70px",
    },
    "@media(max-width: 991px)": {
      paddingBottom: "30px",
    },
    divider: {
      borderColor: "secondary",
      margin: 0,
      borderWidth: "1px",
      width: "100%",
      maxWidth: "1430px",
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: "55px",
    },
    container: {
      maxWidth: "1430px",
      // paddingLeft: "8px",
      // paddingRight: "8px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
      "@media(max-width: 1100px)": {
        gridTemplateColumns: "1fr 1fr",
      },
      "@media(max-width: 768px)": {
        gridTemplateColumns: "1fr",
      },
    },
    widget: {
      mx: 3,
      mb: 3,
      "@media(max-width: 991px)": {
        marginBottom: "30px",
      },
      "a:hover": {
        color: "primary",
        cursor: "pointer",
      },
      "a+a": {
        marginTop: "6px",
      },
    },
    title: {
      fontSize: "18px",
      fontWeight: 500,
      lineHeight: 1.67,
      margin: 0,
      marginBottom: "14px",
      color: "black",
    },
    text: {
      fontSize: "16px",
      cursor: "pointer",
      fontWeight: 400,
      lineHeight: 1.6,
    },
    caption: {
      fontSize: "14px",
      fontWeight: 350,
      lineHeight: 1.4,
    },
  },
};
