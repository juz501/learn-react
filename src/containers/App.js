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
  const imageName = 'Pikachu.jpg';
  const imageClass = 'pokemon pikachu';
  const imageAlt = 'Pikachu';
  const imageWidth = '372px';
  const imageHeight = '372px';
  return (
    <Image
      filename={imageName}
      className={imageClass}
      alt={imageAlt}
      width={imageWidth}
      height={imageHeight}
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
