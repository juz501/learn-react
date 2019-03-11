import React from 'react';
import { shallow } from 'enzyme';
import Buttons from './Buttons';

// To use expect clause, see reference
// https://jestjs.io/docs/en/expect
// https://github.com/FormidableLabs/enzyme-matchers/tree/master/packages/jest-enzyme
describe('Buttons', () => {
  it('should not work without parameters', () => {
    expect(() => { shallow(<Buttons />); }).toThrow();
  });

  it('should work with initialTitle and setTitle', () => {
    function setTitle() {}
    expect(() => {
      shallow(<Buttons initialTitle="test" setTitle={setTitle} />);
    }).not.toThrow();
  });
});
