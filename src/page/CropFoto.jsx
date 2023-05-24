import {createRef } from "react";
import { useDataStore } from "../store/dataImage";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import Header from "../component/header";
import { useNavigate } from "react-router-dom";

export default function CropFoto(second) {
  const image = useDataStore((state) => state.image);
  const changeImage = useDataStore((state) => state.changeImage);
  const navigate = useNavigate();

  const cropperRef = createRef();

  const getCropData = () => {
    if (cropperRef.current?.cropper !== "undefined") {
      changeImage(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
    }
    navigate("/");
  };

  return (
    <div className="w-full h-full relative">
      <Header title="Crop Image" back="/ambil" />
      <div className="flex flex-col gap-3 p-2 w-full h-[90%] overflow-auto">
        <Cropper
          ref={cropperRef}
          style={{ height: 400, width: "100%" }}
          zoomTo={0.5}
          initialAspectRatio={1}
          preview=".img-preview"
          src={image}
          viewMode={1}
          minCropBoxHeight={10}
          minCropBoxWidth={10}
          background={false}
          responsive={true}
          autoCropArea={1}
          checkOrientation={false}
          guides={true}
        />
        <button
          className="bg-blue-600 text-white font-semibold w-full p-2"
          onClick={getCropData}
        >
          Save
        </button>
      </div>
    </div>
  );
}
