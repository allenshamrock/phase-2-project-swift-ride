import { Heading } from "@chakra-ui/react";
import Navbar from "./Navbar";
import UserAuth from "./UserAuth";

function Header() {
  return (
    <header className="header">
      <Heading size={"lg"} color={"#32bb78"}fontStyle={'italic'}>
        SwiftRides
      </Heading>
      <Navbar />
      <div className="controls">
    <UserAuth/>
      </div>
    </header>
  );
}

export default Header;
