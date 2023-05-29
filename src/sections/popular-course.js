import { Box, Container } from "theme-ui";
import React from "react";
import BlockTitle from "components/block-title";
import PopularCard from "components/popular-card";
import dlirLogo from "assets/dlir-logo.webp";
import bppLogo from "assets/bpp-logo.webp";
import talofaLogo from "assets/talofa-logo.webp";
import lumisightLogo from "assets/lumisight-logo.webp";

const popularCourseData = [
  {
    logo: dlirLogo,
    title:
      "Department of Labor & Industrial Relation Unemployment Insurance, Sep 2022 – Present",
    description:
      "The new cloud-based system to proceed all processes relating to unemployment benefits.",
    reviewCount: "5.0 (392 reviews)",
    watchCount: "2,538 students watched",
    videoLink: "L9jU-IIN0ng",
    starCount: 5,
    expanded: true,
    list: [
      {
        content:
          "Front-End Development for 3 applications (web-app, web-admin, web-login) based on Figma UI Design.",
      },
      {
        content: "Presentation (giving demo project features regularly).",
      },
      {
        content: "Setup project skeleton Frontend repository.",
      },
      {
        content:
          "Working independently and interacting with members in different time zone.",
      },
    ],
  },
  {
    logo: bppLogo,
    title: "Lumisight BPP-MS, Software Engineer, Feb 2022 – Sep 2022",
    reviewCount: "5.0 (392 reviews)",
    watchCount: "2,538 students watched",
    videoLink: "L9jU-IIN0ng",
    starCount: 5,
    expanded: true,
    description:
      "A SaaS solution that serves as a platform to digitalize business processes. The solution will focus on business processing and automation, status and progress management. Module-based architecture to maintain flexibility and scalability with less dependencies.",
    list: [
      {
        content:
          "Front-End Development for 3 applications (web-app, web-admin, web-login) based on Figma UI Design.",
      },
      {
        content: "Presentation (giving demo project features regularly).",
      },
      {
        content: "Setup project skeleton Frontend repository.",
      },
      {
        content:
          "Working independently and interacting with members in different time zone.",
      },
      {
        content:
          "Research and implement R&D feature: Workflow Diagram, Json Form Builder.",
      },
      {
        content: "Mentoring a new intern of BPP.",
      },
    ],
  },
  {
    logo: dlirLogo,
    title: "DOE SBBH Web Development, Software Engineer, Jul 2022 – Aug 2022",
    description:
      "SBBH provides a continuum of behavioral health supports for students experiencing social, emotional, and/or behavioral difficulties that impair their ability to function in school. The SBBH professionals include behavioral health specialists, clinical and school psychologists, and social workers.",
    reviewCount: "4.5 (524 reviews)",
    watchCount: "3,532 students watched",
    videoLink: "L9jU-IIN0ng",
    starCount: 4,
    expanded: true,
    list: [
      {
        content:
          "Consult, discuss with the team and give solutions to improve the performance of web applications.",
      },
    ],
  },
  {
    logo: talofaLogo,
    title: "TALOFAPass, Software Engineer, Jul 2021 –  Feb 2022",
    description: `TALOFAPass was developed as a free mobile app and web-based travel tool for Travelers to apply and track their travel process to American Samoa. Users can declare coming trips to American Samoa, check the application status, receive safety guidance to satisfy the travel requirements, and more.`,
    reviewCount: "5.0 (392 reviews)",
    watchCount: "1,037 students watched",
    videoLink: "L9jU-IIN0ng",
    starCount: 5,
    expanded: true,
    list: [
      {
        content:
          "Front-End Development for 3 applications (web-app, web-admin, web-login) based on Figma UI Design.",
      },
      {
        content: "Giving advice for B.A and Q.C about UI UX solutions.",
      },
      {
        content: "Familiar with Typescript and Redux, Redux-Saga.",
      },

      {
        content: "Multi-language with i18n library.",
      },
    ],
  },
  {
    logo: lumisightLogo,
    title: "LumiSight M&O Projects, Software Engineer, Dec 2020 –  Jul 2021",
    description: `LumiSight is a Platform as a Service (PaaS) solution that leverages industry-leading cloud infrastructure, applications, and security services to create exceptional user experiences. It’s an accelerator that achieves your goals faster and better prepares you for the future.`,
    reviewCount: "5.0 (392 reviews)",
    watchCount: "1,037 students watched",
    videoLink: "L9jU-IIN0ng",
    starCount: 5,
    expanded: true,
    list: [
      {
        content: "Front-End Development, working on Web applications.",
      },
      {
        content:
          "Maintenance & Operations, support to build new features for around 20 tenants in this application.",
      },
      {
        content: "Familiar with React.",
      },
      {
        content: "Multi-language with i18n library.",
      },
      {
        content: "Using Git for working in a team.",
      },
    ],
  },
];

const PopularCourse = () => {
  return (
    <Box as="section" sx={styles.popularCourse}>
      <Container>
        <BlockTitle
          sx={styles.popularCourse.blockTitle}
          tagline="Latest Works"
          heading=""
        />
        {popularCourseData.map((course, index) => (
          <Box sx={styles.popularCourse.col} key={index}>
            <PopularCard
              key={index}
              listData={course.list}
              expanded={course.expanded}
              starCount={course.starCount}
              title={course.title}
              logo={course.logo}
              description={course.description}
              reviewCount={course.reviewCount}
              watchCount={course.watchCount}
              videoLink={course.videoLink}
            />
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default PopularCourse;

const styles = {
  popularCourse: {
    marginTop: 32,
    paddingBottom: ["100px"],
    "@media(max-width: 575px)": {
      paddingBottom: "60px",
    },
    blockTitle: {
      textAlign: "center",
      marginBottom: "60px",
      "@media(max-width: 575px)": {
        marginBottom: "30px",
      },
    },
    col: {},
  },
};
