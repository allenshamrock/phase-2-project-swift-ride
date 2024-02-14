import { Heading } from "@chakra-ui/react";
import herovideo from "../assets/SwiftHero.mp4";
// import bgvideo from "../assets/SwiftHero.mp4";
import Header from "./Header";
import DatePicker from "./DatePicker";

function Hero() {
  return (
    <div className="hero">
      <div className="overlay"></div>
      <video src={herovideo} autoPlay loop muted/>
      <div className="content">
        <Header/>
       <div>
       <Heading color={'#32bb78'} fontWeight={'bold'}>Welcome to Swift Rides Car Rental</Heading>
        <p className="welcome">
          Discover comfort, safety, and style with our premium car fleet,<br /> Book
          effortlessly for a memorable journey.
        </p>
    <DatePicker/>
       </div>
      </div>
    </div>
  );
}

export default Hero;