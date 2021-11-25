import React from "react";
import Cell from "./Cell";

const Row = (props) => {
  const createEmptyRow = (cols, rowinput) => {
    const row = [];
    for (let i = 0; i < cols; i++) {
      row.push(<Cell key={i} id={i} name={rowinput[i]} />);
    }
    return row;
  };

  return <div className="row">{createEmptyRow(props.cols, props.row)}</div>;
};

export default Row;
