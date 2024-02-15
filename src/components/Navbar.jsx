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
      alignItems={"center"}
      fontSize={'1.2rem'}
      boxShadow={'0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);'}
    >
      {links.map((link) => (
        <NavLink
        className={'links'}
        style={{padding:"12px 24px"}}
          key={link.to}
          to={link.to}
          fontWeight="semibold"
          color="gray.900"
          _hover={{ backgroundColor: "#32bb78", color: "white" }}
        >
          {link.name}
        </NavLink>
      ))}
    </Flex>
    </>
  );
};

export default Navbar;
