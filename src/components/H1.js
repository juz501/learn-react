import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

function H1(props) {
  const { children: heading } = props;

  return (
    <div className="heading-wrapper">
      <h1 className="heading">{heading}</h1>
    </div>
  );
}

// Specifies the default values for props:
H1.defaultProps = {
  children: 'Hello There',
};

H1.propTypes = {
  children: PropTypes.string,
};

export default hot(module)(H1);
