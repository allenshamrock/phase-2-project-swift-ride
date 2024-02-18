import { Heading, Text } from "@chakra-ui/react";
import herovideo from "../assets/SwiftHero.mp4";
// import bgvideo from "../assets/SwiftHero.mp4";
// import Header from "./Header";
import VehicleSlider from "./vehicle/VehicleSlider";
import About from "./About";
import Contact from "./Contact";


function Home() {
  return (
    <>
    <div className="hero" id="Home">
      <div className="overlay"></div>
      <video src={herovideo} autoPlay loop muted/>
      <div className="content">
        {/* <Header/> */}
       <div>
       <Heading color={'#32bb78'} fontWeight={'bold'}>Welcome to Swift Rides</Heading>
        <Text maxW={'450px'} minWidth={'200px'} className="welcome" >
          Discover comfort, safety, and style with our premium car fleet,Book
          effortlessly for a memorable journey.
        </Text>
       </div>
      </div>
    </div>
    <VehicleSlider/>
    <About/>
    <Contact/>
    </>
  );
}

export default Home;