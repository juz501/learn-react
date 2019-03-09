import React from 'react';
import { render } from 'react-snapshot';
import App from './containers/App';
import './stylesheets/main.scss';

render(<App />, document.getElementById('root'));
