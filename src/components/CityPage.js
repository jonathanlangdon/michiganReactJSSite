import React from 'react';

function CityPage({ city }) {
  const { citation } = city;

  const formattedCitation = `${citation.author}. (${citation.year}). ${citation.title}. ${citation.websiteName}. Retrieved from ${citation.url}`;

  return (
    <div className="container-fluid position-relative">
      <img
        src={city.imageUrl}
        srcSet={city.imageSrcSet}
        alt={city.name}
        className="w-100 mb-4 custom-height"
      />

      <div className="absolute-box">
        <h1>{city.name}</h1>
      </div>

      <div className="relative-box">
        <ul>
          <li>Population: {city.population}</li>
          <li>Year Incorporated: {city.incorporationYear}</li>
          <li>Region: {city.region}</li>
          <li>Classification: {city.classification}</li>
          <li>Average Income Level: {city.incomeLevel}</li>
        </ul>
        <footer>
          <p>Source (APA): {formattedCitation}</p>
        </footer>
      </div>
    </div>
  );
}

export default CityPage;
