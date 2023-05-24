import { useState } from "react";
import Header from "../component/header";
import { useDataStore } from "../store/dataImage";
import { IconUserCircle } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export default function Galeri(second) {
  const changeImage = useDataStore((state) => state.changeImage);
  const [image, setImage] = useState("");
  const [openCrop, setOpenCrop] = useState(false);
  const [openSave, setOpenSave] = useState(false);
  const navigate = useNavigate();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    changeImage(URL.createObjectURL(file));
    setImage(URL.createObjectURL(file));
    setOpenCrop(true);
    setOpenSave(true);
  };
  return (
    <div className="w-full h-full">
      <Header title="Profile" back="/change" />
      <div className="flex flex-col gap-3 p-2 w-full h-[90%] overflow-auto">
        {image === "" ? (
          <div className="bg-[#E0E0E0] rounded-md p-2 w-full h-56 flex justify-center items-center">
            <IconUserCircle width={50} height={60} className="text-[#F4AE13]" />
          </div>
        ) : (
          <div className="w-full h-56 object-cover p-2">
            <img src={image} alt="gambar" className="rounded-md" />
          </div>
        )}
        <div className="bg-[#F4AE13] p-2  text-base font-semibold">
          <input
            type="file"
            accept="image/*"
            className="cursor-pointer text-[10px]"
            capture="user"
            onChange={handleImageChange}
          />
        </div>
        {!openSave ? (
          <button
            disabled={true}
            className="p-2 bg-blue-300 text-white font-semibold"
          >
            Save
          </button>
        ) : (
          <button
            className="p-2 bg-blue-600 text-white font-semibold"
            onClick={() => {
              navigate("/");
            }}
          >
            Save
          </button>
        )}

        {!openCrop ? (
          <button
            disabled={true}
            className="p-2 bg-blue-300 text-white font-semibold"
          >
            Crop Image
          </button>
        ) : (
          <button
            className="p-2 bg-blue-600 text-white font-semibold"
            onClick={() => {
              navigate("/crop");
            }}
          >
            Crop Image
          </button>
        )}
      </div>
    </div>
  );
}
