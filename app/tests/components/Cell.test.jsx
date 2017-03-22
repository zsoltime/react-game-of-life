import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Cell from 'Cell';

const defaultProps = {
  i: 43,
  id: '2-2',
  x: 40,
  y: 40,
  width: 20,
  height: 20,
  color: '#009988',
  handleClick: f => f,
};

describe('<Cell />', () => {
  it('should exist', () => {
    expect(Cell).toExist();
  });

  describe('render', () => {
    it('should render a rect', () => {
      const cell = shallow(<Cell {...defaultProps} />);
      const actualCell = cell.find('rect');

      expect(actualCell.length).toBe(1);
    });

    it('should render a rect in the correct position', () => {
      const cell = shallow(<Cell {...defaultProps} />);
      const actualCell = cell.find('rect');

      expect(actualCell.prop('x')).toBe(defaultProps.x);
      expect(actualCell.prop('y')).toBe(defaultProps.y);
    });

    it('should render a rect with the correct dimensions', () => {
      const cell = shallow(<Cell {...defaultProps} />);
      const actualCell = cell.find('rect');

      expect(actualCell.prop('width')).toBe(defaultProps.width);
      expect(actualCell.prop('height')).toBe(defaultProps.height);
    });

    it('should render a rect with the correct color', () => {
      const cell = shallow(<Cell {...defaultProps} />);
      const actualCell = cell.find('rect');

      expect(actualCell.prop('fill')).toBe(defaultProps.color);
    });
  });

  describe('onClick', () => {
    it('should call the callback function on click', () => {
      const spy = expect.createSpy();
      const cell = shallow(
        <Cell {...defaultProps} handleClick={spy} />
      );
      cell.find('rect').simulate('click');

      expect(spy).toHaveBeenCalledWith(defaultProps.i);
    });
  });
});
