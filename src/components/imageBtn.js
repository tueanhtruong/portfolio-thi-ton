import { useVideoDispatch } from "contexts/video/video.provider";
import Image from "./image";

const ImageBtn = ({ src, alt, sx = {} }) => {
  const dispatch = useVideoDispatch();
  const handleVideoOpen = () => {
    dispatch({ type: "SET_OPEN", url: src });
  };
  return (
    <Image
      src={src}
      alt={alt}
      sx={{ ...sx, cursor: "zoom-in" }}
      onClick={handleVideoOpen}
    />
  );
};

export default ImageBtn;
