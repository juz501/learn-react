import React from 'react';
import { hot } from 'react-hot-loader';
import { Helmet } from 'react-helmet';
import H1 from '../components/H1';
import Image from '../components/Image';

function App() {
  const filename = 'Pikachu.jpg';
  return (
    <div className="main">
      <Helmet>
        <title>Hey There</title>
        <meta name="description" content="Definitely good" />
      </Helmet>
      <H1 />
      <Image filename={filename} width="372px" height="378px" />
    </div>
  );
}

export default hot(module)(App);
