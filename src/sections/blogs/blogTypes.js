/* eslint-disable react-hooks/rules-of-hooks */
import { useDeleteBlogType, useGetBlogTypes, useSetBlogType } from "queries";
import { Box } from "theme-ui";
import BlogItem from "./blogItem";

const BlogTypes = ({ isAuth = false }) => {
  if (!isAuth) return null;
  const { data = [], refresh, isLoading } = useGetBlogTypes();
  const { setBlog, isSetting } = useSetBlogType({
    onSuccess() {
      refresh();
    },
  });
  const { deleteBlog, isDeleting } = useDeleteBlogType({
    onSuccess() {
      refresh();
    },
  });
  const isTotalLoading = isLoading || isSetting || isDeleting;
  return (
    <Box sx={{ opacity: isTotalLoading ? 0.5 : 1 }}>
      {data.map((blog, idx) => (
        <BlogItem
          {...blog}
          key={`blog-item-${idx}`}
          setBlog={setBlog}
          deleteBlog={deleteBlog}
        />
      ))}
    </Box>
  );
};

export default BlogTypes;
