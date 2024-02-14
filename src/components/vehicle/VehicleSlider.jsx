import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './vehicleslider.css';

const VehicleSlider = () => {
  const [vehicles, setVehicles] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:3000/cars');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setVehicles(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
    fetchData();
  }, []);
  

  const settings = {
    dots: true,
    infinite: true,
    speed:450 ,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className="mySlider">
      {vehicles && vehicles.map((vehicle) => (
        <div key={vehicle.id}>
          <img src={vehicle.image} alt={`${vehicle.brand} ${vehicle.model}`} />
          <h3>{`${vehicle.brand} ${vehicle.model}`}</h3>
          <p>Year: {vehicle.year}</p>
          <p>Color: {vehicle.color}</p>
          <p>Price per day: ${vehicle.price_per_day.toFixed(2)}</p>
        </div>
      ))}
    </Slider>
  );
  
};

export default VehicleSlider;
