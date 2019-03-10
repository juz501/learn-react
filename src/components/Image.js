import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

function Image(props) {
  const {
    filename,
    alt,
    width,
    height,
  } = props;
  const filenamePath = `assets/${filename}`;
  return (
    <img src={filenamePath} alt={alt} width={width} height={height} />
  );
}

// Specifies the default values for props:
Image.defaultProps = {
  alt: 'placeholder',
};

Image.propTypes = {
  filename: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default hot(module)(Image);
