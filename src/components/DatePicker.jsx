import { useState, useEffect } from "react";
// import { GrLocation } from "react-icons/gr";
// import { IoMdSearch } from "react-icons/io";
// import { BsSearch } from "react-icons/bs";
// import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Input,
  Stack,
} from "@chakra-ui/react";

const DatePicker = () => {
  const [pickupDate, setPickupDate] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");
  const [searchText, setSearchText] = useState("");
  const [carList, setCarList] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch("http://localhost:3000/cars");
        const data = await response.json();
        setCarList(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching car data: ", error);
      }
    };

    fetchCars();
  }, []);

  useEffect(() => {
    const filteredCars = carList.filter((car) =>
      car.model.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchResult(filteredCars);
  }, [searchText, carList]);

  const handlePickupDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    if (selectedDate >= new Date()) {
      setPickupDate(selectedDate.toISOString().split("T")[0] + "T00:00");
    } else {
      console.error("Please select a future date for pickup.");
    }
  };

  const handleDropoffDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    if (selectedDate >= new Date()) {
      setDropoffDate(selectedDate.toISOString().split("T")[0] + "T00:00");
    } else {
      console.error("Please select a future date.");
    }
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <Stack spacing={3} direction={"row"} pt={"80px"}>
      <Center bg={"White"} color={"black"} h={"100px"}  borderRadius={"10"} w={'850px'}  gap={'3'}>
        <Input
          variant="filled"
          placeholder="Where are you going?"
          w={"200px"}
        />
        <Input
          placeholder="Select Date and Time"
          size="md"
          type="datetime-local"
          w={"200px"}
          value={pickupDate}
          min={new Date().toISOString().split("T")[0]}
          onChange={handlePickupDateChange}
        />
        <Input
          placeholder="Select Date and Time"
          size="md"
          type="datetime-local"
          w={"200px"}
          value={dropoffDate}
          min={pickupDate || new Date().toISOString().split("T")[0]}
          onChange={handleDropoffDateChange}
        />
        <Input
          variant="flushed"
          type="text"
          placeholder="Search for cars.."
          fontSize={"1rem"}
          w={"200px"}
          value={searchText}
          onChange={handleSearchChange}
          style={{ paddingLeft: "24px" }}
        />
        {searchResult.length === 0 && searchText && <span>No cars found</span>}
      </Center>
      <Box>
        {/* Display search result
            {searchResult.map(car => (
                <tr key={car.id}>
                    <td>{car.model}</td>
                    <td><img src={car.image} alt={car.model} /></td>
                </tr>
            ))} */}
      </Box>
    </Stack>
  );
};

export default DatePicker;

