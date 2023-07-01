import loader from "assets/loader.svg";
import Lightbox from "react-awesome-lightbox";

function ModalImage({ isLoading = false }) {
  if (isLoading)
    return (
      <div className="modal-loading">
        <Lightbox
          image={loader}
          allowZoom={false}
          allowRotate={false}
          allowReset={false}
          showTitle={false}
        />
      </div>
    );
  return null;
}

export default ModalImage;
