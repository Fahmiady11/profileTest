import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import ChangeFoto from "./page/ChangeFoto";
import Camera from "./page/Camera";
import CropFoto from "./page/CropFoto";
import Galeri from "./page/Galeri";
function App() {

  return (
    <Router>
      <div className="bg-[#212121] w-screen h-screen flex justify-center items-center">
        <div className="bg-white w-[293px] h-[652px] flex justify-start items-start flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/change" element={<ChangeFoto />} />
            <Route path="/ambil" element={<Camera />} />
            <Route path="/crop" element={<CropFoto />} />
            <Route path="/galeri" element={<Galeri />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
