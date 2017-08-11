import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Board from 'Board';
import Cell from 'Cell';

const props = {
  cells: [{
    id: Math.random(),
    isAlive: Math.random() > 0,
    x: 0,
    y: 0,
  }, {
    id: Math.random(),
    isAlive: Math.random() > 0,
    x: 30,
    y: 0,
  }, {
    id: Math.random(),
    isAlive: Math.random() > 0,
    x: 60,
    y: 0,
  }, {
    id: Math.random(),
    isAlive: Math.random() > 0,
    x: 0,
    y: 30,
  }, {
    id: Math.random(),
    isAlive: Math.random() > 0,
    x: 30,
    y: 30,
  }, {
    id: Math.random(),
    isAlive: Math.random() > 0,
    x: 60,
    y: 30,
  }],
  handleClick: f => f,
  cols: 3,
  rows: 2,
  height: 60,
  width: 90,
};

describe('<Board />', () => {
  it('should exist', () => {
    expect(Board).toExist();
  });

  describe('render', () => {
    const board = shallow(<Board {...props} />);

    it('renders and svg with correct width, height and viewBox', () => {
      const svg = board.find('svg');

      expect(svg.prop('width')).toBe(props.width);
      expect(svg.prop('height')).toBe(props.height);
      expect(svg.prop('viewBox')).toBe(`0 0 ${props.width} ${props.height}`);
    });

    it('renders the correct number of <Cell /> components', () => {
      const cells = board.find(Cell);

      expect(cells.length).toBe(props.cells.length);
    });
  });
});
