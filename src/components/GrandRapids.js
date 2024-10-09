import React from 'react';
import CityPage from './CityPage';
import cityData from '../data/cityData';

function GrandRapids() {
  const city = cityData.find(city => city.name === 'Grand Rapids');

  return (
    <div>
      <CityPage city={city} />
    </div>
  );
}

export default GrandRapids;
