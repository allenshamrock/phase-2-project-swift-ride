// import React from 'react';
import { Flex } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/About" },
    { name: "Contact", to: "/Contact" },
    { name: "Hire", to: "/Hire" },
  ];

  return (
    <>
    <Flex
      bg={"#fff"}
      display={{ base: "flex", lg: "flex" }}
      width={{ base: "100%", lg: "auto" }}
      flexDirection={{base:'column',lg:"row"}}
      gap={12}
      alignItems={"center"}
      fontSize={'1.2rem'}
    >
      {links.map((link) => (
        <NavLink
        style={{padding:"7px 20px"}}
          key={link.to}
          to={link.to}
          fontWeight="semibold"
          color="gray.900"
          _hover={{ color: "teal.500" }}
        >
          {link.name}
        </NavLink>
      ))}
    </Flex>
    </>
  );
};

export default Navbar;
