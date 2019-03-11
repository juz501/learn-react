import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import { Helmet } from 'react-helmet';
import H1 from '../components/H1';
import Image from '../components/Image';

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
  const initialTitle = 'Pikachu is here!';
  const [title, setTitle] = useState(initialTitle);

  return (
    <div className="main">
      {getHelmet(title)}
      <H1>{title}</H1>
      <div className="content">
        {getPikachuImage()}
        <button type="button" onClick={e => setTitle(e.target.value)} value="Hello">Hello</button>
        <button type="button" onClick={e => setTitle(e.target.value)} value="Bye">Bye</button>
        <button type="button" onClick={() => setTitle(initialTitle)}>Reset</button>
      </div>
    </div>
  );
}

export default hot(module)(App);
