import React from 'react';
import { shallow } from 'enzyme';
import H1 from './H1';

// To use expect clause, see reference
// https://jestjs.io/docs/en/expect
// https://github.com/FormidableLabs/enzyme-matchers/tree/master/packages/jest-enzyme
describe('H1', () => {
  it('should have one with h1', () => {
    const component = shallow(<H1 />);
    expect(component.find('h1')).toHaveLength(1);
  });

  it('should have one with class `.title`', () => {
    const component = shallow(<H1 />);
    expect(component.find('.title')).toHaveLength(1);
  });

  it('should match snapshot', () => {
    const component = shallow(<H1 />);
    expect(component).toMatchSnapshot();
  });
});
