import Layout from "components/layout";
import { Box, Heading } from "theme-ui";

export default function IndexPage() {
  return (
    <Layout>
      <Box sx={styles.container}>
        <Heading as="h1" sx={styles.h1}>
          Web Contents
        </Heading>
      </Box>
    </Layout>
  );
}

const styles = {
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
