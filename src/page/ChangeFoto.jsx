import { IconUserCircle } from "@tabler/icons-react";
import Header from "../component/header";
import { Link } from "react-router-dom";
import { useDataStore } from "../store/dataImage";

export default function ChangeFoto() {
  const image = useDataStore((state) => state.image);

  return (
    <div className="w-full h-full relative">
      <Header title="Change" back="/" />
      {image === "" ? (
        <div className="bg-[#E0E0E0] rounded-md p-2 w-full h-56 flex justify-center items-center">
          <IconUserCircle width={50} height={60} className="text-[#F4AE13]" />
        </div>
      ) : (
        <div className="w-full h-56 object-cover p-2">
          <img src={image} alt="gambar" className="rounded-md" />
        </div>
      )}
      <div className="flex flex-col gap-3 p-2 w-full h-fit absolute bottom-7">
        <Link to="/ambil" className="w-full">
          <button
            className="bg-[#F4AE13] p-2 w-full  text-base font-semibold"
            onClick={() => {}}
          >
            Ambil Foto dari kamera
          </button>
        </Link>
        <Link to="/galeri" className="w-full">
          <button
            className="bg-[#F4AE13] p-2 w-full  text-base font-semibold"
            onClick={() => {}}
          >
            Ambil foto dari Galeri
          </button>
        </Link>
      </div>
    </div>
  );
}
