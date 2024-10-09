import React from 'react';
import cityData from '../data/cityData';

function Home() {
  const processSrcSet = srcSet => {
    return srcSet
      .split(',')
      .map(src => `${process.env.PUBLIC_URL}/${src.trim()}`)
      .join(', ');
  };

  return (
    <div className="container mt-4">
      <header className="mb-4">
        <h1 id="main-title" className="text-center">
          Michigan - The Great Lake State
        </h1>
        <img
          src={`${process.env.PUBLIC_URL}/images/michigan-small.jpg`}
          srcSet={processSrcSet(`
            images/michigan-small.jpg 1x,
            images/michigan-medium.jpg 2x,
            images/michigan-large.jpg 3x
          `)}
          alt="Michigan Landscape"
          className="img-fluid mx-auto d-block mt-3"
        />
      </header>

      <div className="row">
        <section className="col-md-8">
          <p>
            Michigan is a beautiful state known for its many lakes and
            freshwater beaches. Major cities like Grand Rapids and Detroit have
            vibrant city lives. Many other attractions are available to
            residents and visitors.
          </p>
          <p>
            <a
              href="https://www.michigan.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Michigan.org
            </a>
          </p>

          <h2>Top Attractions:</h2>
          <ol>
            <li>Mackinac Island</li>
            <li>Sleeping Bear Dunes</li>
            <li>Isle Royale National Park</li>
          </ol>
          <h2>Activities:</h2>
          <ul>
            <li>Hiking</li>
            <li>Fishing</li>
            <li>Boating</li>
          </ul>

          <h2>Cities Comparison:</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>City</th>
                <th>Population</th>
                <th>Region</th>
              </tr>
            </thead>
            <tbody>
              {cityData.map(city => (
                <tr key={city.name}>
                  <td>{city.name}</td>
                  <td>{city.population}</td>
                  <td>{city.region}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <aside className="col-md-4">
          <h3>Additional Resources</h3>
          <ul>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Michigan"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wikipedia - Michigan
              </a>
            </li>
            <li>
              <a
                href="https://www.visittheusa.com/state/michigan"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit The USA - Michigan
              </a>
            </li>
            <li>
              <a
                href="https://www.traveloka.com/en-en/activities/united-states/region/michigan-4005001836"
                target="_blank"
                rel="noopener noreferrer"
              >
                Traveloka - Things to do in Michigan
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}

export default Home;
