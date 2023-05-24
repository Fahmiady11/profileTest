import { Link } from "react-router-dom";
import image1 from "../../src/Vector.png";
export default function Header({ title, back="" }) {
  return (
    <div className="bg-[#F4AE13] w-full p-2 flex justify-start items-center gap-2">
      <Link to={back}>
        <img src={image1} alt="gambar" className="w-5 cursor-pointer" />
      </Link>
      <p className="text-lg font-semibold text-white">{title}</p>
    </div>
  );
}
