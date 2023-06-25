import { useVideoDispatch } from "contexts/video/video.provider";
import Image from "./image";

const ImageBtn = ({
  src,
  alt,
  sx = {},
  urls = [],
  startIndex = 0,
  ...props
}) => {
  const dispatch = useVideoDispatch();
  const handleVideoOpen = () => {
    dispatch(
      urls.length === 0
        ? { type: "SET_OPEN", url: src }
        : { type: "SET_OPEN_LIGHTBOX", urls, startIndex }
    );
  };
  return (
    <Image
      src={src}
      alt={alt}
      sx={{ ...sx, cursor: "zoom-in" }}
      onClick={handleVideoOpen}
      {...props}
    />
  );
};

export default ImageBtn;
