import { Heading, Box, Text, Container, Grid } from "theme-ui";
import BlockTitle from "components/block-title";
import React from "react";

import ArrowOdd from "assets/arrow-odd.png";
import ArrowEven from "assets/arrow-even.png";

const workflowData = [
  {
    title: "Web Developer Intern, Dec 2020 - May 2021",
    text: [
      "I participated in the Winter Software Engineer internship at DataHouse Asia as a Frontend Web Developer.",
    ],
  },
  {
    title: "Junior Web Developer, May 2021 - Jul 2022",
    text: ["I mainly work as an FE developer for the Lumisight platform."],
  },
  {
    title: "Medior Software Developer, Jul 2022 - Present",
    text: [
      "- Develop a solution for designing and implementing a web app.",
      "- Review code and support other team members.",
      "- Manage tasks and estimate effort for the FE team, responsible for quality.",
      "- Technical mentor for interns.",
    ],
  },
  // {
  //   title: "Customer receives funds payment",
  //   text: "Get your blood tests delivered at home collect a sample from the your blood tests.",
  // },
];

const WorkFlow = () => {
  return (
    <Box as="section" id="experience" sx={styles.workflow}>
      <Container>
        <BlockTitle
          sx={styles.workflow.blockTitle}
          tagline="Work Experience"
          heading=""
        />

        <Grid gap="50px 54px" columns={3} sx={styles.workflow.grid}>
          {workflowData.map((item, index) => (
            <Box sx={styles.workflow.card} key={index}>
              <Box sx={styles.workflow.iconBox}>{`0${index + 1}`}</Box>
              <Box sx={styles.workflow.wrapper}>
                <Heading sx={styles.workflow.wrapper.title}>
                  {item.title}
                </Heading>
                {item.text?.map((text) => (
                  <Text sx={styles.workflow.wrapper.subTitle} key={text}>
                    {text}
                  </Text>
                ))}
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WorkFlow;

const styles = {
  workflow: {
    background: "linear-gradient(180deg, #EBF9FF 0%, #F6F6FF 100%)",
    position: "relative",
    pt: "100px",
    pb: "100px",
    "@media screen and (max-width: 1366px)": {
      pb: "100px",
    },
    "@media screen and (max-width: 992px)": {
      pb: "60px",
      paddingTop: "60px",
    },
    blockTitle: {
      marginBottom: [30, null, 55],
      textAlign: "center",
    },
    grid: {
      pt: 55,
      "@media screen and (max-width: 1366px)": {
        pt: 0,
      },
      "@media screen and (max-width: 1200px)": {
        gridGap: "50px 30px",
      },
      "@media screen and (max-width: 992px)": {
        gridTemplateColumns: "repeat(2,1fr)",
        gridGap: "50px 50px",
      },
      "@media screen and (max-width: 480px)": {
        gridTemplateColumns: "repeat(1,1fr)",
        gridGap: "35px 0",
      },
    },
    card: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      "&::before": {
        position: "absolute",
        content: '""',
        top: 0,
        left: 75,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: "center center",
        width: 275,
        height: 60,
        "@media screen and (max-width: 1366px)": {
          left: 75,
        },
        "@media screen and (max-width:1200px)": {
          display: "none",
        },
      },
      "&:nth-of-type(2n-1)::before": {
        backgroundImage: `url(${ArrowOdd})`,
      },
      "&:nth-of-type(2n)::before": {
        backgroundImage: `url(${ArrowEven})`,
        top: 17,
      },
      "&:last-child::before": {
        display: "none",
      },
    },

    iconBox: {
      width: "70px",
      height: "70px",
      borderRadius: "40%",
      backgroundColor: "white",
      display: "flex",
      alignItems: "center",
      mb: 30,
      fontSize: 30,
      fontWeight: 700,
      justifyContent: "center",
      color: "black",
      boxShadow: "0px 14px 20px rgba(76, 119, 171, 0.1)",
      "@media screen and (max-width: 560px)": {
        width: "50px",
        height: "50px",
        fontSize: 24,
        borderRadius: 20,
        mb: 25,
      },
      "@media screen and (max-width: 480px)": {
        mb: 20,
      },
    },
    wrapper: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      mt: "-5px",
      title: {
        fontSize: 22,
        color: "black",
        lineHeight: 1.55,
        fontWeight: 500,
        mb: "15px",
        "@media screen and (max-width: 1200px)": {
          fontSize: 20,
          lineHeight: 1.4,
        },
        "@media screen and (max-width: 480px)": {
          fontSize: "18px",
          lineHeight: 1.45,
          mb: "10px",
        },
      },

      subTitle: {
        fontSize: "15px",
        fontWeight: 400,
        lineHeight: "1.73",
        color: "#343D48",
        "@media screen and (max-width: 480px)": {
          fontSize: "15px",
          lineHeight: "1.85",
        },
      },
    },
  },
};
