import React, { PropTypes } from 'react';

const Cell = (props) => {
  const { i, width, height, x, y, color, handleClick } = props;
  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill={color}
      onClick={() => handleClick(i)}
    />
  );
};

Cell.propTypes = {
  i: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Cell;
