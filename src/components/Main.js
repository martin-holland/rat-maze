import React, { Component } from "react";
import Row from "./Row";
import generateMaze from "./generateMaze";

const { solveMaze } = require("./solution");

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
    mazeSolution: [],
    solutionFound: false,
    maze2: [],
  };

  createEmptyMaze(rowNumber) {
    const maze = [];
    for (let j = 0; j < rowNumber; j++) {
      maze.push(
        <Row
          cols={this.state.maze.length}
          key={j}
          row={this.state.maze[j]}
          maze={this.state.maze}
        />
      );
    }
    return maze;
  }
  createSolutionMaze(rowNumber) {
    const maze2 = [];
    for (let j = 0; j < rowNumber; j++) {
      maze2.push(
        <Row
          cols={this.state.mazeSolution.length}
          key={j}
          row={this.state.mazeSolution[j]}
          maze={this.state.mazeSolution}
        />
      );
    }
    return maze2;
  }

  clickHandler = (event) => {
    let n = document.getElementById("maze-size").value;
    let size = generateMaze(n);
    console.log(size);
    this.setState({
      [event.target.name]: size,
      columns: n,
      rows: n,
      maze: size,
    });
  };

  solveMaze = () => {
    let solutionMaze = solveMaze(this.state.maze);
    if (solutionMaze === "NO PATH FOUND") {
      alert("No Path found, please generate a new maze");
    }
    console.log("The Maze solution is:");
    console.log(solutionMaze);
    this.setState({
      mazeSolution: solutionMaze,
    });
  };

  render() {
    return (
      <div className="main">
        <div className="instructions">
          <p>
            First enter a size of the grid, note: the larger the grid, the
            harder it is to solve!
          </p>
          <p>
            Please note, the maze solution can only move right and down, it
            cannot go up or left.
          </p>
        </div>
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
        <div className="solutionmaze">
          <button onClick={this.solveMaze}>Solve Maze</button>
          <div className="solvedmaze">
            {this.createSolutionMaze(this.state.rows)}
          </div>
        </div>
      </div>
    );
  }
}

export default EmptyMaze;
