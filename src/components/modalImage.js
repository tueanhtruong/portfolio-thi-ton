import React from "react";
import { Lightbox } from "react-modal-image";
import { useVideoState, useVideoDispatch } from "contexts/video/video.provider";

function ModalImage({ alt = "Web Image" }) {
  const url = useVideoState("url");
  const isOpen = useVideoState("isOpen");

  const dispatch = useVideoDispatch();
  const handleVideoClose = () => {
    dispatch({ type: "SET_CLOSE" });
  };
  if (!isOpen) return null;
  return <Lightbox large={url} onClose={handleVideoClose} alt={alt} />;
}

export default ModalImage;
