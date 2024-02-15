import Hire from "./components/Hire";
import About from "./components/About";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function Applayout() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Hire" element={<Hire />} />
      </Routes>
    </>
  );
}

export default Applayout;
