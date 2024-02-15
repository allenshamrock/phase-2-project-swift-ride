import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { layoutGenerator } from "react-break";
import {
  Box,
  CardBody,
  Flex,
  Heading,
  Stack,
  Text,
  Card,
  Image,
} from "@chakra-ui/react";

const VehicleSlider = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3001/offers");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setVehicles(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const layout = layoutGenerator({
    mobile: 0,
    phablet: 550,
    tablet: 768,
    desktop: 992,
  });
  const OnTablet = layout.is("tablet");
  const OnPhablet = layout.is("phablet");
  const OnMobile = layout.is("mobile");
  const OnDesktop = layout.is("desktop");

  const displayVehicles = vehicles.map((vehicle) => (
    <SplideSlide m={'auto'} key={vehicle.id}>
      <Box textAlign={"center"} >
        <Card
          maxW="md"
          boxShadow={"0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);"}
          rounded="md"
          maxH={"500px"}
        >
          <CardBody>
            <Flex w="100%">
              <Image
                objectFit="cover"
                w={"100vw"} h={'280px'}
                src={vehicle.image}
                alt="vehicle image"
                borderRadius="lg"
              />
            </Flex>
            <Heading size="md" mt={"6px"} textAlign={"center"}>
              {vehicle.brand}
              <span>, </span>
              {vehicle.model}
            </Heading>
            <Stack mt="6" spacing="3" flexDirection={"column"} >
              <Text>Gear Box: {vehicle.gearbox}</Text>
              <Text>Vehicle type: {vehicle.vehicle_type}</Text>
              <Text>Year : {vehicle.year}</Text>
            </Stack>
            <Text
              color={"#32bb78"}
              fontSize="xl"
              fontWeight={"600"}
              py={"5px"}
              textAlign={"center"}
            >
              price per day: &nbsp; {Math.floor(vehicle.price_per_day * 150)}{" "}
              KES
            </Text>
          </CardBody>
        </Card>
      </Box>
    </SplideSlide>
  ));

  return (
    <Box bg={"#32BB78"} h={"600px"}>
      <Text textAlign={"center"} fontSize={"2rem"} fontWeight={"bold"} p={'3'}>
        Special offers
      </Text>
      <OnDesktop>
        <Splide
          options={{
            perPage: 3,
            arrows: true,
            pauseOnHover: true,
            pauseOnFocus: true,
            pagination: false,
            autoplay: false,
            speed: 5500,
            type: "loop",
            interval: 4000,
            rewindByDrag: true,
            drag: "free",
            gap: "2rem",
          }}
        >
          {displayVehicles}
        </Splide>
      </OnDesktop>
      <OnTablet>
        <Splide
          options={{
            perPage: 2,
            arrows: false,
            autoplay: true,
            speed: 10000,
            pagination: false,
            type: "loop",
            interval: 5000,
            rewindByDrag: true,
            drag: "free",
            gap: "2rem",
          }}
        >
          {displayVehicles}
        </Splide>
      </OnTablet>
      <OnPhablet>
        <Splide
          options={{
            perPage: 1,
            arrows: false,
            autoplay: true,
            speed: 6000,
            pagination: false,
            type: "loop",
            interval: 5000,
            rewindByDrag: true,
            drag: "free",
            gap: "2rem",
          }}
        >
          {displayVehicles}
        </Splide>
      </OnPhablet>
      <OnMobile>
        <Splide
          options={{
            perPage: 1,
            arrows: true,
            rewindByDrag: true,
            padding: { left: "20px" },
            gap: "10px",
            pagination: false,
            type: "loop",

            drag: "free",
          }}
        >
          {displayVehicles}
        </Splide>
      </OnMobile>
    </Box>
  );
};

export default VehicleSlider;

//  <img src={vehicle.image} alt={`${vehicle.brand} ${vehicle.model}`} />
//         <h3>{`${vehicle.brand} ${vehicle.model}`}</h3>
//         <p>Year: {vehicle.year}</p>
//         <p>Color: {vehicle.color}</p>
//         <p>Price per day: ${vehicle.price_per_day.toFixed(2)}</p>
