import { useRouter } from "next/router";
import { CommonFlexRowStyle, SectionStyle } from "pages/admin/login";
import { useState } from "react";
import { FaPen, FaTrash } from "react-icons/fa";
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
import { PATHS } from "theme/constant";

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
  deleteBlog,
}) => {
  const router = useRouter();
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
  const handleDeleteType = (e) => {
    e.preventDefault();
    const payload = { id };
    deleteBlog(payload);
  };
  return !isEdit ? (
    <Flex
      sx={BlogSectionStyles}
      onClick={() => router.push(`${PATHS.ADMIN_BLOG_TYPES}/${id}`)}
    >
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
          height: "fit-content",
        }}
      >
        <Flex
          className="mr-4"
          onClick={handleEditClick}
          sx={{
            cursor: "pointer",
          }}
        >
          <Box className="mr-2">Edit</Box>
          <FaPen size={20} className="mt-1" />
        </Flex>
        <Flex
          onClick={handleDeleteType}
          sx={{
            cursor: "pointer",
          }}
        >
          <Box className="mr-2 has-text-danger">Delete</Box>
          <FaTrash color="red" size={20} className="mt-1" />
        </Flex>
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

export default BlogItem;
