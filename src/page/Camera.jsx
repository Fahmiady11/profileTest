import CameraPhoto, { FACING_MODES } from "jslib-html5-camera-photo";
import { useEffect, useRef, useState } from "react";
import Header from "../component/header";
import { useDataStore } from "../store/dataImage";
import { useNavigate } from "react-router-dom";
export default function Camera() {
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const cameraPhotoRef = useRef(null);
  const [state, setState] = useState("");
  const [openCrop, setOpenCrop] = useState(false);
  const [openSave, setOpenSave] = useState(false);

  useEffect(() => {
    cameraPhotoRef.current = new CameraPhoto(videoRef.current);
    let facingMode = FACING_MODES.USER;
    let idealResolution = { width: 640, height: 1920 };
    startCamera(facingMode, idealResolution);
  }, []);

  const startCamera = (idealFacingMode, idealResolution) => {
    cameraPhotoRef.current
      .startCamera(idealFacingMode, idealResolution)
      .then(() => {
        console.log("camera is started !");
      })
      .catch((error) => {
        console.error("Camera not started!", error);
      });
  };

  const takePhoto = () => {
    const config = {
      sizeFactor: 1,
    };
    let dataUri = cameraPhotoRef.current.getDataUri(config);
    setState(dataUri);
    setOpenCrop(true);
    setOpenSave(true);
  };
  const saveImage = () => {
    cameraPhotoRef.current
      .stopCamera()
      .then(() => {
        changeImage(state);
        navigate("/");
      })
      .catch((error) => {
        console.log("No camera to stop!:", error);
      });
  };
  const changeImage = useDataStore((state) => state.changeImage);
  const cropImage = () => {
    changeImage(state);
    navigate("/crop");
  };
  return (
    <div className="w-full h-full">
      <Header title="Camera" back="/change" />
      <div className="flex flex-col gap-3 p-2 w-full h-[90%] overflow-auto">
        {!openSave ? (
          <button
            disabled={true}
            className="p-2 bg-blue-300 text-white font-semibold"
            onClick={saveImage}
          >
            Save
          </button>
        ) : (
          <button
            className="p-2 bg-blue-600 text-white font-semibold"
            onClick={saveImage}
          >
            Save
          </button>
        )}

        {!openCrop ? (
          <button
            disabled={true}
            className="p-2 bg-blue-300 text-white font-semibold"
            onClick={cropImage}
          >
            Crop Image
          </button>
        ) : (
          <button
            className="p-2 bg-blue-600 text-white font-semibold"
            onClick={cropImage}
          >
            Crop Image
          </button>
        )}

        <video ref={videoRef} autoPlay={true} className="w-full" />
        <div className="flex flex-row gap-3 p-2 w-full h-full justify-center items-center relative">
          <div className="absolute left-12">
            {state === "" ? (
              <div className="bg-slate-300 outline w-10 h-10 rounded-full shadow-md object-cover"></div>
            ) : (
              <img
                src={state}
                alt="Foto"
                className="w-10 h-10 rounded-full shadow-md object-cover"
              />
            )}
          </div>
          <div
            className="p-4 bg-red-300 hover:bg-red-300/80 w-fit rounded-full cursor-pointer"
            onClick={takePhoto}
          >
            <div className="p-4 bg-red-500 w-fit rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
