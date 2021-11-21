import React, { Component } from "react";
import Row from "./Row";
import generateMaze from "./generateMaze";

class EmptyMaze extends Component {
  state = {
    columns: 0,
    rows: 0,
    // maze: [
    //   [1, 1, 1, 1, 0],
    //   [0, 0, 0, 1, 1],
    //   [0, 0, 0, 0, 1],
    //   [0, 0, 0, 1, 1],
    //   [0, 0, 0, 1, 1],
    // ],
    maze: [],
  };

  createEmptyMaze(rowNumber) {
    const maze = [];
    for (let j = 0; j < rowNumber; j++) {
      maze.push(
        <Row cols={this.state.columns} key={j} row={j} maze={this.state.maze} />
      );
    }
    return maze;
  }

  rowNumberHandler = (event) => {
    this.setState({
      rows: event.target.value,
    });
  };

  columNumberHandler = (event) => {
    this.setState({
      columns: event.target.value,
    });
  };

  clickHandler = (event) => {
    let n = document.getElementById("maze-size").value;
    let size = generateMaze(n);
    console.log(size);
    this.setState({
      [event.target.name]: size,
      columns: n,
      rows: n,
    });
  };

  render() {
    return (
      <div>
        <div className="maze-dimensions">
          <label htmlFor="maze-size">Input desired Maze Size</label>
          <input id="maze-size" name="mazesize" type="text" />
          <button id="generateMaze" onClick={this.clickHandler}>
            <p id="mazearea"></p>
            Generate
          </button>
          <div className="maze-description">
            <p className="mazeresult"></p>
          </div>
        </div>
        <div className="maze_wrapper">
          {this.createEmptyMaze(this.state.rows)}
        </div>
      </div>
    );
  }
}

export default EmptyMaze;
