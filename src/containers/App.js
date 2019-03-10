import React from 'react';
import { hot } from 'react-hot-loader';
import { Helmet } from 'react-helmet';
import H1 from '../components/H1';
import Image from '../components/Image';

function App() {
  const imageName = 'Pikachu.jpg';
  const imageAlt = 'Pikachu';
  const imageWidth = '372px';
  const imageHeight = '372px';
  return (
    <div className="main">
      <Helmet>
        <title>Hey There</title>
        <meta name="description" content="Definitely good" />
      </Helmet>
      <H1 />
      <Image filename={imageName} alt={imageAlt} width={imageWidth} height={imageHeight} />
    </div>
  );
}

export default hot(module)(App);
