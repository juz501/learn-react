import React from 'react';
import { shallow, mount } from 'enzyme';
import Buttons from './Buttons';

// To use expect clause, see reference
// https://jestjs.io/docs/en/expect
// https://github.com/FormidableLabs/enzyme-matchers/tree/master/packages/jest-enzyme
describe('Buttons', () => {
  it('should not work without parameters', () => {
    expect(() => { shallow(<Buttons />); }).toThrow();
  });

  it('should work with hello', () => {
    let heading = 'test';
    function setHeading(newHeading) {
      heading = newHeading;
    }
    const expectedHeading = 'Hello';
    const wrapper = mount(<Buttons initialHeading="test" setHeading={setHeading} />);
    const helloButton = wrapper.find(`[value="${expectedHeading}"]`).last();
    helloButton.simulate('click', 1);
    expect(heading).toEqual(expectedHeading);
  });

  it('should work with bye', () => {
    let heading = 'test';
    function setHeading(newHeading) {
      heading = newHeading;
    }
    const expectedHeading = 'Bye';
    const wrapper = mount(<Buttons initialHeading="test" setHeading={setHeading} />);
    const byeButton = wrapper.find(`[value="${expectedHeading}"]`).last();
    byeButton.simulate('click', 1);
    expect(heading).toEqual(expectedHeading);
  });

  it('should work with reset', () => {
    let heading = 'test';
    function setHeading(newHeading) {
      heading = newHeading;
    }
    const expectedHeading = 'testInitial';
    const wrapper = mount(<Buttons initialHeading="testInitial" setHeading={setHeading} />);
    const resetButton = wrapper.find('button').last();
    resetButton.simulate('click', 1);
    expect(heading).toEqual(expectedHeading);
  });
});
