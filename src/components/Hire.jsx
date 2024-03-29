import { useState, useEffect } from "react";
// import Header from "./Header";
import CarItem from "./CarItems";
import { Flex, Spinner, Text, Center } from "@chakra-ui/react";
import DatePicker from "./DatePicker";

function Hire() {
  const [carData, setCarData] = useState(null);
  const [loadState, setLoadState] = useState(true);
  const [searchText, setSearchText] = useState(""); // New state for search text

  const url = `https://swift-ride-backend.onrender.com/cars`;
  useEffect(() => {
    setTimeout(() => {
      const fetchCars = async () => {
        try {
          const response = await fetch(url);
          if (!response.ok)
            throw new Error(`HTTP Error ! status: ${response.status}`);
          const data = await response.json();

          setCarData(data);
          setLoadState(false);
        } catch (error) {
          console.error(error.message);
        }
      };
      fetchCars();
    }, 1000);
  }, [url]);

  console.log(carData);

  return (
    <>
      {/* <Header /> */}
      <Center> <DatePicker setSearchText={setSearchText}/> </Center> {/* Pass setSearchText */}
      {loadState ? (
        <Flex
          justify={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          gap={"10px"}
          h={"80vh"}
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color={"#32bb78"}
            size="xl"
          />
          <Text fontWeight={"bold"}>Please wait, Loading data..</Text>
        </Flex>
      ) : (
        <CarItem  data={carData.filter(car => car.model.toLowerCase().includes(searchText.toLowerCase()))} /> /* Filter carData based on searchText */
      )}
    </>
  );
}

export default Hire;

