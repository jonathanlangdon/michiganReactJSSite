import React from 'react';

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
        </section>
      </div>
    </div>
  );
}

export default Home;
