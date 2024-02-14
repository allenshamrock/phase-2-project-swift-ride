import Hero from "./components/Hero";
import Hire from "./components/Hire";
import About from "./components/About";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";

function Applayout() {
  return (
    <>
    <Routes>     
        <Route path="/" element={<Hero/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Hire" element={<Hire/>} />
    </Routes>
    </>
  );
}

export default Applayout;
