import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

// To use expect clause, see reference
// https://jestjs.io/docs/en/expect
// https://github.com/FormidableLabs/enzyme-matchers/tree/master/packages/jest-enzyme
describe('App', () => {
  it('should work without throws', () => {
    expect(() => { shallow(<App />); }).not.toThrow();
  });
});
