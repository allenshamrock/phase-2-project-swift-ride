import React from "react";
import UserAuth from "./UserAuth";
import swiftlogo from "../assets/swift-logo.png";
import { DrawerCloseButton, Image, useDisclosure } from "@chakra-ui/react";
import {
  Flex,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import { CgMenuCheese } from "react-icons/cg";
import Navbar from "./Navbar";
import { HashLink as NavLink } from "react-router-hash-link";

const Header = () => {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Flex
      as="div"
      align="center"
      justifyContent="space-between"
      wrap="wrap"
      // p={{base:"1", md:"6"}}
      top={"0"}
      position={"absolute"}
      color="gray.900"
      width={"100%"}
      zIndex={"1"}
    >
      <Image src={swiftlogo} alt="logo" h={24} />
      <Flex
        display={{ base: "none", lg: "flex" }}
        align="center"
        color="gray.900"
        fontSize="sm"
        fontWeight="semibold"
      >
        <Navbar />
      </Flex>
      <Flex alignItems={"center"}>
        <Flex display={{ base: "flex", lg: "none" }}>
          <Button
            h={"30px"}
            ref={btnRef}
            onClick={onOpen}
            p={2}
            color="gray.700"
            _hover={{ bg: "#32bb78" }}
          >
            <CgMenuCheese size={"1.5rem"} />
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <NavLink className="links drawer-link" to={"/#"} smooth onClick={()=>{onClose();}}>
                Home
              </NavLink>
              <NavLink className="links drawer-link" to={"/#About"} smooth onClick={()=>{onClose();}}>
                About
              </NavLink>
              <NavLink className="links drawer-link" to={"/#Contact"} smooth onClick={()=>{onClose();}}>
                Contact
              </NavLink>
              <NavLink className="links drawer-link" to={"/Hire"} smooth onClick={()=>{onClose();}}>
                Hire
              </NavLink>
            </DrawerContent>
          </Drawer>
        </Flex>

        <UserAuth />
      </Flex>
    </Flex>
  );
};

export default Header;
