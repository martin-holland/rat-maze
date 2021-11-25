import React, { Component } from "react";
import generateMaze from "./generateMaze";
import EmptyMaze from "./Main";

class Main extends Component {
  state = {
    // maze: [
    //   [1, 1, 1, 1, 0],
    //   [0, 0, 0, 1, 1],
    //   [0, 0, 0, 0, 1],
    //   [0, 0, 0, 1, 1],
    //   [0, 0, 0, 1, 1],
    // ],
    maze: [],
  };

  clickHandler = (event) => {
    let n = document.getElementById("maze-size").value;
    let size = generateMaze(n);
    console.log(size);
    this.setState({
      [event.target.name]: size,
    });
  };
  render() {
    return (
      <div className="maze-dimensions">
        <label htmlFor="maze-size">Input desired Maze Size</label>
        <input id="maze-size" name="mazesize" type="text" />
        <button id="generateMaze" onClick={this.clickHandler}>
          <p id="mazearea"></p>
          Generate
        </button>
        <div className="maze-description">
          <p className="mazeresult"></p>
          <EmptyMaze />
        </div>
      </div>
    );
  }
}

export default Main;
