/* eslint-disable react-hooks/rules-of-hooks */
import { CommonFlexRowStyle } from "pages/admin/login";
import { useGetBlogTypes, useSetBlogType } from "queries";
import { useState } from "react";
import { Box, Button, Flex, Heading } from "theme-ui";
import { v4 as uuidv4 } from "uuid";
import BlogItem from "./blogItem";

const AddBlogType = ({ isAuth = false }) => {
  if (!isAuth) return <Heading as="h3">Block Types</Heading>;
  const [isAdding, setAdding] = useState(false);
  const handleAddClick = (e) => {
    setAdding((pre) => !pre);
  };
  const { refresh } = useGetBlogTypes();
  const { setBlog } = useSetBlogType({
    onSuccess() {
      refresh();
    },
  });
  return (
    <Box>
      <Flex sx={CommonFlexRowStyle}>
        <Heading as="h3">Block Types</Heading>
        <Button onClick={handleAddClick} variant="text" disabled={isAdding}>
          New Blog Type
        </Button>
      </Flex>
      {isAdding && (
        <BlogItem
          name=""
          isShow={"true"}
          id={uuidv4()}
          isAddNew
          setBlog={(payload) => {
            handleAddClick();
            if (payload) setBlog(payload);
          }}
        />
      )}
    </Box>
  );
};

export default AddBlogType;
