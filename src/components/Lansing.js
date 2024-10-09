import React from 'react';
import CityPage from './CityPage';
import cityData from '../data/cityData';

function Lansing() {
  const city = cityData.find(city => city.name === 'Lansing(Capital)');

  return (
    <div>
      <CityPage city={city} />
    </div>
  );
}

export default Lansing;
