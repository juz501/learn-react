import React from 'react';
import { hot } from 'react-hot-loader';
import { Helmet } from 'react-helmet';
import H1 from '../components/H1';
import Image from '../components/Image';

function getHelmet() {
  const title = 'Hey There';
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
  const title = 'Pikachu is here!';
  return (
    <div className="main">
      {getHelmet()}
      <H1 title={title} />
      {getPikachuImage()}
    </div>
  );
}

export default hot(module)(App);
