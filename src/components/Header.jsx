import { Heading } from "@chakra-ui/react";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="header">
      <Heading size={"lg"} color={"#32bb78"}fontStyle={'italic'}>
        SwiftRides
      </Heading>
      <Navbar />
      <div className="controls">
        <button>Login</button>
        <button>Sign-up</button>
        <button>Dark mode</button>
      </div>
    </header>
  );
}

export default Header;
