import React from 'react';
import PropTypes from 'prop-types';

import Cell from 'Cell';

const Board = ({ cells, cols, handleClick, height, rows, width }) => {
  // shouldn't it be in Game?
  const cellHeight = Math.floor(height / rows);
  const cellWidth = Math.floor(width / cols);
  const renderedCells = cells.map((cell, i) => (
    <Cell
      key={cell.id}
      id={cell.id}
      width={cellWidth}
      height={cellHeight}
      x={cell.x}
      y={cell.y}
      i={i}
      color={cell.isAlive ? '#00bbdd' : '#37474f'}
      handleClick={handleClick}
    />
  ));

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      {renderedCells}
    </svg>
  );
};

Board.propTypes = {
  cells: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  cols: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  height: PropTypes.number.isRequired,
  rows: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

export default Board;
