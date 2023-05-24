import { IconCameraFilled } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useDataStore } from "../store/dataImage";

export default function Profile() {
  const image = useDataStore((state) => state.image);
  return (
    <div className="flex flex-row justify-start gap-2 items-center">
      <Link to="/change">
        {image === "" ? (
          <div className="p-3 w-fit h-fit rounded-full bg-[#F4AE13] shadow-md cursor-pointer hover:bg-[#F4AE13]/90">
            <IconCameraFilled width={25} height={25} className="text-white" />
          </div>
        ) : (
          <div className="">
            <img
              src={image}
              alt="gambar"
              className="w-[45px] h-[45px] rounded-full object-cover shadow-md outline"
            />
          </div>
        )}
      </Link>
      <div>
        <p className="text-lg font-semibold">Fahmi Ady</p>
        <p className="text-[10px] leading-3 text-black/60">
          FrontEnd Developer
        </p>
      </div>
    </div>
  );
}
