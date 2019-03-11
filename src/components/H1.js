import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

function H1(props) {
  const { children: title } = props;

  return (
    <div>
      <h1 className="heading">{title}</h1>
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
