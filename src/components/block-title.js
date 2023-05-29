import { Heading, Box, Text } from "theme-ui";

const BlockTitle = (props) => {
  return (
    <Box variant="blockTitle" sx={props.sx}>
      <Text as="p">{props.tagline}</Text>
      <Heading as="h4">{props.heading}</Heading>
    </Box>
  );
};

export default BlockTitle;
