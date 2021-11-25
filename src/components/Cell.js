import React from "react";

const Cell = (props) => {
  const cellname = "cell";
  const mazePosition = props.name;
  return <div className={cellname + mazePosition}></div>;
};

export default Cell;
