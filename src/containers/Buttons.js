import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

function Buttons(props) {
  const { initialHeading, setHeading } = props;

  return (
    <div>
      <button type="button" onClick={e => setHeading(e.target.value)} value="Hello">Hello</button>
      <button type="button" onClick={e => setHeading(e.target.value)} value="Bye">Bye</button>
      <button type="button" onClick={() => setHeading(initialHeading)}>Reset</button>
    </div>
  );
}

Buttons.propTypes = {
  initialHeading: PropTypes.string.isRequired,
  setHeading: PropTypes.func.isRequired,
};

export default hot(module)(Buttons);
