import React from "react";
import UserAuth from "./UserAuth";
import { useDisclosure } from "@chakra-ui/react";
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
      padding="6"
      top={"0"}
      position={"absolute"}
      color="gray.900"
      width={"100%"}
    >
      <Heading className="sr-only" color={"#32bb78"}>
        SwiftRides
      </Heading>
    <Flex alignItems={"center"}>
    <UserAuth />
    <Flex display={{ base: "flex", lg: "none" }}>
        <Button
          ref={btnRef}
          onClick={onOpen}
          p={2}
          color="gray.700"
          _hover={{ bg: "teal.100" }}
        >
          <CgMenuCheese />
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <Navbar/>
          </DrawerContent>
        </Drawer>
      </Flex>

      <Flex
        display={{ base: "none", lg: "flex" }}
        align="center"
        color="gray.900"
        fontSize="sm"
        fontWeight="semibold"
      >
        <Navbar />
      </Flex>
    </Flex>
     
    </Flex>
  );
};

export default Header;
