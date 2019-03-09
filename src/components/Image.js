import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

function Image(props) {
  const name = 'Pikachu';
  const { filename, width, height } = props;
  const filenamePath = `assets/${filename}`;
  return (
    <img src={filenamePath} alt={name} width={width} height={height} />
  );
}

Image.propTypes = {
  filename: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default hot(module)(Image);
