import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import { Helmet } from 'react-helmet';
import H1 from '../components/H1';
import Image from '../components/Image';
import Buttons from '../components/Buttons';

function getHelmet(title) {
  const description = 'Awesome meta description';
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}
function getPikachuImage() {
  return (
    <Image
      filename="Pikachu.jpg"
      className="pokemon pikachu"
      alt="Pikachu on white background"
      width="372px"
      height="378px"
    />
  );
}

/**
 * The App
 */
function App() {
  const initialHeading = 'Pikachu is here!';
  const [heading, setHeading] = useState(initialHeading);

  return (
    <div className="main">
      {getHelmet(heading)}
      <H1>{heading}</H1>
      <div className="content">
        {getPikachuImage()}
        <Buttons initialHeading={initialHeading} setHeading={setHeading} />
      </div>
    </div>
  );
}

export default hot(module)(App);
