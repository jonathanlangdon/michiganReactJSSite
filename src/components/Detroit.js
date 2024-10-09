import React from 'react';
import CityPage from './CityPage';
import cityData from '../data/cityData';

function Detroit() {
  const city = cityData.find(city => city.name === 'Detroit');

  return (
    <div>
      <CityPage city={city} />
    </div>
  );
}

export default Detroit;
