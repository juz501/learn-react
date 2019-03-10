import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

function Image(props) {
  const name = props.alt ? props.alt : 'placeholder';
  const { filename, width, height } = props;
  const filenamePath = `assets/${filename}`;
  return (
    <img src={filenamePath} alt={name} width={width} height={height} />
  );
}

Image.propTypes = {
  filename: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default hot(module)(Image);
