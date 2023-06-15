import React from "react";
import Lightbox from "react-awesome-lightbox";
import { useVideoState, useVideoDispatch } from "contexts/video/video.provider";

function ModalImage({ alt = "Web Image" }) {
  const url = useVideoState("url");
  const urls = useVideoState("urls");
  const startIndex = useVideoState("startIndex");
  const isOpen = useVideoState("isOpen");

  const dispatch = useVideoDispatch();
  const handleVideoClose = () => {
    dispatch({ type: "SET_CLOSE" });
  };
  if (!isOpen) return null;
  if (urls.length)
    return (
      <Lightbox
        images={urls}
        onClose={handleVideoClose}
        startIndex={startIndex}
      />
    );

  return <Lightbox image={url} onClose={handleVideoClose} title={alt} />;
}

export default ModalImage;
