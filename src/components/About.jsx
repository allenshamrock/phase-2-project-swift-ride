/* eslint-disable react/no-unescaped-entities */
import Countup from "./Countup";
import {
  Box,
  Heading,
  Image,
  Text
} from "@chakra-ui/react";
// import Header from "./Header";

function About() {
  return (
    <>
    {/* <Header/> */}
    <Box 
      pt={"50px"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      position={"relative"}
      id="About"
    >
      <Heading textAlign={"center"} p={'10px'} >About Us</Heading>

      <Box
        direction={{ base: "column", sm: "row" }}
        w={"fit-content"}
        h={{ base: "auto", lg: "60vh" }}
        display={"flex"}
        py={{base: "40px", lg: "20px" }}
        alignItems={"center"}
        justifyContent={"center"}
        overflow={"hidden"}
      >
        <Box
          width={{ base: "auto", lg: "600px" }}
          mx={{base:"20px"}}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
          bg={"#32bb78"}
          borderRadius={"lg"}
          p={"10px"}
          
          position={{ base: "static", lg: "absolute" }}
          bottom={60}
          left={20}
          boxShadow={"8px 8px 0px #000000;"}
          border={"2px solid #111"}
        >
          <Heading fontSize={"1.38rem"}  mb="10px">
            SwiftRides...
          </Heading>
          <Text fontSize={'1.08rem'} mb="4"textTransform={'capitalize'} lineHeight={7} letterSpacing={1}>
            is your go-to destination for reliable and affordable car rentals.
            Whether you need a car for a business trip, vacation, or daily
            commute, we've got you covered. Our extensive fleet of vehicles
            ensures that you'll find the perfect ride for your needs. With
            convenient booking options and exceptional customer service, we make
            renting a car a breeze.
          </Text>
        <Text textTransform={'lowercase'} px={2} alignSelf={'end'} letterSpacing={2} as={"i"}>"rent on the go..."</Text>
        </Box>
        I
        <Image
          objectFit="cover"
          boxShadow={'0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);'}
          borderRadius={'lg'}
          maxW={{ base: "100vw", lg: "70vw" }}
          display={{ base: "none", lg: "block" }}
          src="https://plus.unsplash.com/premium_photo-1661636643271-de8ae41c91b1?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Caffe Latte"
        />
      </Box>
      <Countup />
    </Box>
    </>
  );
}

export default About;
