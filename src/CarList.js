import React, { useState } from 'react';
import CarCard from './carCard'; // Assuming you have a CarCard component

const CarList = ({ data }) => {
  const [selectedBrand, setSelectedBrand] = useState('');

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  // Filter cars based on the selected brand
  const filteredCars = selectedBrand
    ? data.filter((car) => car.brand.toLowerCase() === selectedBrand.toLowerCase())
    : data;

  return (
    <div>
      <div>
        <label htmlFor="brandFilter">Filter by Brand:</label>
        <select id="brandFilter" value={selectedBrand} onChange={handleBrandChange}>
          <option value="">All Brands</option>
          {Array.from(new Set(data.map((car) => car.brand))).map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>
      <div>
        <h2>Car List</h2>
        {filteredCars.map((car) => (
          <CarCard key={car.model} car={car} />
        ))}
      </div>
    </div>
  );
};

export default CarList;

