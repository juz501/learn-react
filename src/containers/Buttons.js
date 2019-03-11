import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

function Buttons(props) {
  const { initialTitle, setTitle } = props;

  function setInitialTitle() {
    setTitle(initialTitle);
  }

  function setTitleValue(event) {
    setTitle(event.target.value);
  }

  return (
    <div>
      <button type="button" onClick={setTitleValue} value="Hello">Hello</button>
      <button type="button" onClick={setTitleValue} value="Bye">Bye</button>
      <button type="button" onClick={setInitialTitle}>Reset</button>
    </div>
  );
}

Buttons.propTypes = {
  initialTitle: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
};

export default hot(module)(Buttons);
