import React from 'react';
import cityData from '../data/cityData';

function Home() {
  return (
    <div className="container mt-4">
      <header className="mb-4">
        <h1 id="main-title" className="text-center">
          Michigan - The Great Lake State
        </h1>
        <img
          src="/images/michigan-small.jpg"
          srcSet="
            /images/michigan-small.jpg 1x,
            /images/michigan-medium.jpg 2x,
            /images/michigan-large.jpg 3x
          "
          alt="Michigan Landscape"
          className="img-fluid mx-auto d-block mt-3"
        />
      </header>

      <div className="row">
        <section className="col-md-8">
          <p>
            Michigan is a state in the Great Lakes region of the upper
            Midwestern United States. It is known for its diverse geography,
            including beautiful lakes, forests, and urban areas. Michigan offers
            a wide range of attractions and activities for residents and
            visitors alike.
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
                href="https://www.traveloka.com/en-mk/blog/things-to-do-in-michigan"
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
