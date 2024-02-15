import React from "react";
import UserAuth from "./UserAuth";
import { DrawerCloseButton, useDisclosure } from "@chakra-ui/react";
import {
  Heading,
  Flex,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import { CgMenuCheese } from "react-icons/cg";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

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
      p={{base:"1", md:"6"}}
      top={"0"}
      position={"absolute"}
      color="gray.900"
      width={"100%"}
      zIndex={'1'}
    >
      <Heading className="sr-only" color={"#32bb78"}>
        SwiftRides
      </Heading>
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
          h={'30px'}
            ref={btnRef}
            onClick={onOpen}
            p={2}
            color="gray.700"
            _hover={{ bg: "#32bb78" }}
          >
            <CgMenuCheese size={'1.5rem'}/>
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
              <NavLink className="links drawer-link" to={"/"}>
                Home
              </NavLink>
              <NavLink className="links drawer-link" to={"/About"}>
                About
              </NavLink>
              <NavLink className="links drawer-link" to={"/Contact"}>
                Contact
              </NavLink>
              <NavLink className="links drawer-link" to={"/Hire"}>
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
