import { CommonFlexRowStyle, SectionStyle } from "pages/admin/login";
import { useGetBlogTypes, useSetBlogType } from "queries";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Input,
  Label,
  Select,
  Text,
} from "theme-ui";

const BlogTypes = ({ isAuth = false }) => {
  if (!isAuth) return null;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data = [], refresh, isLoading } = useGetBlogTypes();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { setBlog, isSetting } = useSetBlogType({
    onSuccess() {
      refresh();
    },
  });
  const isTotalLoading = isLoading || isSetting;
  return (
    <Box sx={{ opacity: isTotalLoading ? 0.5 : 1 }}>
      {data.map((blog, idx) => (
        <BlogItem {...blog} key={`blog-item-${idx}`} setBlog={setBlog} />
      ))}
    </Box>
  );
};

export const BlogSectionStyles = {
  ...SectionStyle,
  maxWidth: "100%",
  margin: "16px 0",
  transition: "0.2s",
  "&:hover": {
    boxShadow: "0px 15px 50px rgba(69, 88, 157, 0.1)",
  },
  ...CommonFlexRowStyle,
  padding: "16px 32px 24px",
  cursor: "pointer",
};

export const BlogItem = ({
  name = "",
  isShow = true,
  id,
  setBlog,
  isAddNew = false,
  onCancel,
}) => {
  const [isEdit, setEdit] = useState(isAddNew);
  const handleEditClick = (e) => {
    e.preventDefault();
    setEdit((pre) => !pre);
  };
  const handleSubmit = (e) => {
    const {
      target: { name, isShow },
    } = e;
    e.preventDefault();
    const payload = { name: name.value, isShow: isShow.value === "true", id };
    setBlog(payload);
    setEdit((pre) => !pre);
  };
  return !isEdit ? (
    <Flex sx={BlogSectionStyles}>
      <Box>
        <Text variant="heading">{name}</Text>
        <Flex
          sx={{
            flexDirection: "row",
            display: "flex",
            alignItem: "center",
          }}
        >
          <Text variant="title" className="mr-2">
            Is Show
          </Text>
          <Checkbox className="mt-1" checked={isShow} onChange={() => {}} />
        </Flex>
      </Box>
      <Flex
        sx={{
          flexDirection: "row",
          display: "flex",
          alignItem: "center",
          cursor: "pointer",
          height: "fit-content",
        }}
        onClick={handleEditClick}
      >
        <Box className="mr-2">Edit</Box>
        <FaEdit size={24} />
      </Flex>
    </Flex>
  ) : (
    <form onSubmit={handleSubmit}>
      <Flex sx={BlogSectionStyles}>
        <Box sx={{ width: "100%", maxWidth: 500 }}>
          <Label>Name *</Label>
          <Input placeholder="Name" name="name" required defaultValue={name} />
          <Label className="mt-2">Is Show *</Label>
          <Select name="isShow" required defaultValue={isShow}>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </Select>
        </Box>
        <Flex
          sx={{
            flexDirection: "row",
            display: "flex",
            alignItem: "center",
            cursor: "pointer",
            height: "fit-content",
          }}
        >
          <Button
            onClick={isAddNew ? () => setBlog() : handleEditClick}
            variant="text"
            type="button"
          >
            Cancel
          </Button>
          <Button type="submit" className="ml-2">
            Save
          </Button>
        </Flex>
      </Flex>
    </form>
  );
};

export default BlogTypes;
