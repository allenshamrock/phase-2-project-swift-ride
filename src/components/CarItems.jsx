import {
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

function CarItems({ data }) {
  return (
    <Flex flexWrap={"wrap"} pt={"50px"} gap={"20px"} justifyContent={"center"}>
      {data.map((car) => {
        return (
          <Card
            maxW="sm"
            key={car.id}
            boxShadow={
              "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);"
            }
            rounded="md"
          >
            <CardBody>
              <Flex w="100%" h="200px">
                <Image
                  objectFit="cover"
                  w={"100vw"}
                  src={car.image}
                  alt="car image"
                  borderRadius="lg"
                />
              </Flex>{" "}
              <Heading size="md" mt={"6px"} textAlign={"center"}>
                {car.brand}
                <span>, </span>
                {car.model}
              </Heading>
              <Flex gap={"1rem"}>
                <Stack mt="6" spacing="3">
                  <Text>Milage: {car.mileage} km</Text>
                  <Text>Gear Box: {car.gearbox}</Text>
                </Stack>
                <Stack mt="6" spacing="3">
                  <Text>Vehicle type: {car.vehicle_type}</Text>
                  <Text>Year : {car.year}</Text>
                </Stack>
              </Flex>
              <Text
                color={"#32bb78"}
                fontSize="xl"
                fontWeight={"600"}
                py={"5px"}
                textAlign={"center"}
              >
                price per day: &nbsp; {Math.floor(car.price_per_day * 150)} KES
              </Text>
              <Button _hover={'teal.100'} color={"#fff"} bg={"#32bb78"} w={"100%"}>
                Hire
              </Button>
            </CardBody>
          </Card>
        );
      })}
    </Flex>
  );
}

export default CarItems;

CarItems.propTypes = {
  data: PropTypes.array,
};
