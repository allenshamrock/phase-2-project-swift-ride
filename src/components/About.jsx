import Countup from "./Countup";
import {
  Box,
  Heading,
  Image,
  Text
} from "@chakra-ui/react";
import Header from "./Header";

function About() {
  return (
    <>
    <Header/>
    <Box
      pt={"100px"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      position={"relative"}
    >
      <Heading textAlign={"center"}>About Us</Heading>

      <Box
        direction={{ base: "column", sm: "row" }}
        w={"fit-content"}
        h={{ base: "auto", md: "60vh" }}
        overflow={"hidden"}
      >
        <Box
          width={{ base: "380px", md: "600px" }}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
          bg={"#32bb78"}
          borderRadius={"lg"}
          p={"10px"}
          
          position={{ base: "static", md: "absolute" }}
          h={{ base: "auto", md: "350px" }}
          top={40}
          left={20}
          boxShadow={"8px 8px 0px #000000;"}
          border={"2px solid #111"}
        >
          <Heading as="h2" size="xl" mb="30px">
            About SwiftRides
          </Heading>
          <Text fontSize="lg" mb="4">
            Your go-to destination for reliable and affordable car rentals.
            Whether you need a car for a business trip, vacation, or daily
            commute, we've got you covered. Our extensive fleet of vehicles
            ensures that you'll find the perfect ride for your needs. With
            convenient booking options and exceptional customer service, we make
            renting a car a breeze.
          </Text>
        </Box>
        I
        <Image
          objectFit="cover"
          maxW={{ base: "100vw",sm:"60vh", md: "70vw" }}
          display={{ base: "none", md: "block" }}
          borderRadius={"lg"}
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
