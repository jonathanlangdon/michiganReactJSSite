import React from 'react';

function CityPage({ city }) {
  return (
    <div className="container-fluid position-relative">
      <img
        src={city.imageUrl}
        srcSet={city.imageSrcSet}
        alt={city.name}
        className="w-100 mb-4 custom-height"
      />

      <h1>{city.name}</h1>

      <ul>
        <li>Population: {city.population}</li>
        <li>Year Incorporated: {city.incorporationYear}</li>
        <li>Region: {city.region}</li>
        <li>Classification: {city.classification}</li>
        <li>Average Income Level: {city.incomeLevel}</li>
      </ul>
      <footer>
        <p>Information as of 2024</p>
      </footer>
    </div>
  );
}

export default CityPage;
