import React from 'react';

const HomePage = () => {
    return(
      <>
        <section className="main-hero">
          <h1>Real estate Luxury Modern<br />Website Design</h1>
        </section>
        <section className="intro">
          <div className="container">
            <div className="img">
              <img src="images/palace.png" alt="a palace" />
            </div>
            <h2>Argument marketing qualité de vie</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              tincidunt fringilla ex et vestibulum. Donec porttitor aliquet
              ultricies.
            </p>
          </div>
        </section>
        <section className="marketing">
          <div className="container">
            <h2>
              Lorem ipsum dolor sit amet,<br />aucun condos en vente
            </h2>
            <h4>Argument marketing</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              tincidunt fringilla ex et vestibulum.
            </p>
            <div className="courriel">
              <div>
                <label htmlfor="text">
                  ______ COURRIEL
                </label>
              </div>
              <input placeholder="Lorem ipsum" name="text" type="text" />
              <button>S'ABONNER</button>
            </div>
          </div>
        </section>
        <section className="description">
          <div className="bg-dark-gray">
            <div className="container">
              <h2>Lorem ipsum dolor sit amet,<br />qualité de vie</h2>
              <div className="container images">
                <div>
                  <img src="images/description-images.png" alt="2 photos" />
                </div>
                <div className="col-3">
                  <div className="underline">
                    <h3>____</h3>
                    <h3>Lorem ipsum<br />dolor sit</h3>
                  </div>
                  <p>
                    Laoreet odio ac ipsum consequat luctus rhoncus vel turpis. Nunc
                    fringilla felis eu aliquam commodo. Curabitur accumsan viverra
                    nibh sed bibendum. Duis facilisis tortor sed purus hendrerit
                    cursus.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-light-gray">
            <div className="container">
              <h4>Argument marketing</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                tincidunt fringilla ex et vestibulum. Donec porttitor aliquet
                ultricies.
              </p>
            </div>
          </div>
        </section>
        <section className="piscine">
          <div className="bg-dark-gray">
            <div className="container">
              <h2>Lorem ipsum dolor sit amet,<br />présentation du complexe</h2>
              <div className="container images">
                <div className="col-3">
                  <div className="underline">
                    <h3>____</h3>
                    <h3>Lorem ipsum<br />dolor sit</h3>
                  </div>
                  <p>
                    Laoreet odio ac ipsum consequat luctus rhoncus vel turpis.
                    Nunc fringilla felis eu aliquam commodo. Curabitur accumsan
                    viverra nibh sed bibendum. Duis facilisis tortor sed purus
                    hendrerit cursus.
                  </p>
                </div>
                <div>
                  <img src="images/piscine-images.png" alt="2 photos" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-light-gray">
            <div className="container">
              <h4>Argument marketing</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                tincidunt fringilla ex et vestibulum.
              </p>
            </div>
          </div>
        </section>
        <section className="faq">
          <div className="container">
            <h2>
              Lorem ipsum dolor sit amet, questions
            </h2>
            <ul>
              <li>
                <h5>lorem ipsum dolor sit ?</h5>
                <p>
                  Ut laoreet odio ac ipsum consequat luctus rhoncus vel turpis.
                  Nunc fringilla felis eu aliquam commodo. Curabitur accumsan
                  viverra nibh sed bibendum. Duis facilisis tortor sed purus
                  hendrerit cursus. Nunc fringilla felis eu aliquam commodo.
                </p>
              </li>
              <li>
                <h5>lorem ipsum dolor sit ?</h5>
                <p>
                  Ut laoreet odio ac ipsum consequat luctus rhoncus vel turpis.
                  Nunc fringilla felis eu aliquam commodo. Curabitur accumsan
                  viverra nibh sed bibendum. Duis facilisis tortor sed purus
                  hendrerit cursus. Nunc fringilla felis eu aliquam commodo.
                </p>
              </li>
              <li>
                <h5>lorem ipsum dolor sit ?</h5>
                <p>
                  Ut laoreet odio ac ipsum consequat luctus rhoncus vel turpis.
                  Nunc fringilla felis eu aliquam commodo. Curabitur accumsan
                  viverra nibh sed bibendum. Duis facilisis tortor sed purus
                  hendrerit cursus. Nunc fringilla felis eu aliquam commodo.
                </p>
              </li>
              <li>
                <h5>lorem ipsum dolor sit ?</h5>
                <p>
                  Ut laoreet odio ac ipsum consequat luctus rhoncus vel turpis.
                  Nunc fringilla felis eu aliquam commodo. Curabitur accumsan
                  viverra nibh sed bibendum. Duis facilisis tortor sed purus
                  hendrerit cursus. Nunc fringilla felis eu aliquam commodo.
                </p>
              </li>
            </ul>
          </div>
        </section>
      </>
    )
}

export default Homepage