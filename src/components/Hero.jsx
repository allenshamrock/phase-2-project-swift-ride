import herovideo from "../assets/videoSwift.mp4";
// import bgvideo from "../assets/SwiftHero.mp4";

function Hero() {
  return (
    <div className="hero">
      <div className="overlay"></div>
      <video src={herovideo} autoPlay loop />
      <div className="content">
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
