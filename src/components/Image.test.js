import React from 'react';
import { shallow } from 'enzyme';
import Image from './Image';

// To use expect clause, see reference
// https://jestjs.io/docs/en/expect
// https://github.com/FormidableLabs/enzyme-matchers/tree/master/packages/jest-enzyme
describe('Image', () => {
  let IMAGE_FILENAME;
  let IMAGE_ALT;
  let IMAGE_WIDTH;
  let IMAGE_HEIGHT;
  let IMAGE_PATH;
  const IMAGE_BASE_PATH = 'assets/';

  beforeEach(() => {
    IMAGE_FILENAME = 'Pikachu.jpg';
    IMAGE_ALT = 'Pikachu';
    IMAGE_WIDTH = '372px';
    IMAGE_HEIGHT = '378px';
    IMAGE_PATH = IMAGE_BASE_PATH + IMAGE_FILENAME;
  });

  it('should throw missing prop error 1', () => {
    expect(() => { shallow(<Image />); }).toThrow();
  });

  it('should throw missing prop error 2', () => {
    expect(() => { shallow(<Image filename={IMAGE_FILENAME} />); }).toThrow();
  });

  it('should throw missing prop error 3', () => {
    expect(() => {
      shallow(<Image
        filename={IMAGE_FILENAME}
        width={IMAGE_WIDTH}
      />);
    }).toThrow();
  });

  it('should not throw missing prop', () => {
    expect(() => {
      shallow(<Image
        filename={IMAGE_FILENAME}
        width={IMAGE_WIDTH}
        height={IMAGE_HEIGHT}
      />);
    }).not.toThrow();
  });

  it('should have one with img tag', () => {
    const wrapper = shallow(<Image
      filename={IMAGE_FILENAME}
      alt={IMAGE_ALT}
      width={IMAGE_WIDTH}
      height={IMAGE_HEIGHT}
    />);
    expect(wrapper.find('img')).toHaveLength(1);
  });

  it('should have a src attribute', () => {
    const wrapper = shallow(<Image
      filename={IMAGE_FILENAME}
      alt={IMAGE_ALT}
      width={IMAGE_WIDTH}
      height={IMAGE_HEIGHT}
    />);
    expect(wrapper.find(`img[src="${IMAGE_PATH}"]`)).toHaveLength(1);
  });

  it('should match snapshot', () => {
    const wrapper = shallow(<Image
      filename={IMAGE_FILENAME}
      alt={IMAGE_ALT}
      width={IMAGE_WIDTH}
      height={IMAGE_HEIGHT}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
