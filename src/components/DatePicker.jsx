import { useState, useEffect } from "react";
// import { GrLocation } from "react-icons/gr";
// import { IoMdSearch } from "react-icons/io";
import { BsSearch } from "react-icons/bs";

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
      setPickupDate(selectedDate.toISOString().split("T")[0]);
    } else {
      console.error("Please select a future date for pickup.");
    }
  };

  const handleDropoffDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    if (selectedDate >= new Date()) {
      setDropoffDate(selectedDate.toISOString().split("T")[0]);
    } else {
      console.error("Please select a future date.");
    }
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="date-picker">
      {/* Location section */}
      <div className="date-picker-item">
        <span>
          {/* <GrLocation className="pin-icon" /> */}
          Location
        </span>
        <input
          className="input"
          type="text"
          placeholder="Where are you going?"
        />
      </div>
      {/* Pickup date section */}
      <div className="date-picker-item">
        <span>Pickup date</span>
        <input
          className="input"
          type="date"
          value={pickupDate}
          min={new Date().toISOString().split("T")[0]}
          onChange={handlePickupDateChange}
        />
      </div>

      {/* Dropoff date section */}
      <div className="date-picker-item">
        <span>Drop-off date</span>
        <input
          className="input"
          type="date"
          value={dropoffDate}
          min={pickupDate || new Date().toISOString().split("T")[0]}
          onChange={handleDropoffDateChange}
        />
      </div>

      {/* Search bar section */}
      <div className="search-div"style={{ position:"relative"}}>
        <BsSearch style={{ fontSize: "1.2rem", position:"absolute",left:"15px"}} />
        <input
          className="input"
          type="text"
          placeholder="Search for cars..."
          value={searchText}
          onChange={handleSearchChange}
          style={{ paddingLeft: "24px" }}
        />
        {searchResult.length === 0 && searchText && <span>No cars found</span>}
      </div>
      {/* Display search result
            {searchResult.map(car => (
                <tr key={car.id}>
                    <td>{car.model}</td>
                    <td><img src={car.image} alt={car.model} /></td>
                </tr>
            ))} */}
    </div>
  );
};

export default DatePicker;
