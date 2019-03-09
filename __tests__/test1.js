import React from 'react';
import { shallow } from 'enzyme';
import H1 from '../src/components/H1';

// To use expect clause, see reference
// https://github.com/FormidableLabs/enzyme-matchers/tree/master/packages/jest-enzyme
describe('H1', () => {
  it('should have one with h1', () => {
    const component = shallow(<H1 />);
    expect(component).toContainMatchingElements(1, 'h1');
  });

  it('should have one with class `.title`', () => {
    const component = shallow(<H1 />);
    expect(component).toContainMatchingElements(1, '.title');
  });

  it('should match snapshot', () => {
    const component = shallow(<H1 />);
    expect(component).toMatchSnapshot();
  });
});
