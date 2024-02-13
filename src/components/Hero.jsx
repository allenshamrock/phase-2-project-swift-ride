import herovideo from "../assets/videoSwift.mp4";
// import bgvideo from "../assets/SwiftHero.mp4";
import Header from "./Header";

function Hero() {
  return (
    <div className="hero">
      <div className="overlay"></div>
      <video src={herovideo} autoPlay loop muted/>
      <div className="content">
        <Header/>
       <div>
       <h1>Welcome to Swift Rides Car Rental</h1>
        <p className="welcome">
          Discover comfort, safety, and style with our premium car fleet,<br /> Book
          effortlessly for a memorable journey.
        </p>
       </div>
      </div>
    </div>
  );
}

export default Hero;
