import React, { Component } from "react";
import Row from "./Row";
import generateMaze from "./generateMaze";
import Cell from "./Cell";

const { solveMaze } = require("./solution");

class EmptyMaze extends Component {
  state = {
    columns: 0,
    rows: 0,
    maze: [],
    mazeSolution: [],
    solutionFound: false,
    maze2: [],
  };

  newArr = [];

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
    if (maze2 === []) {
      maze2.push("No Path Found");
    } else if (maze2.length < 3) {
      maze2.length = 0;
    }
    return maze2;
  }

  clickHandler = (event) => {
    this.setState({
      mazeSolution: this.newArr,
    });
    let n = document.getElementById("maze-size").value;
    if (n <= 0) {
      n = 1;
      alert("Please enter a number greater than 0");
    }
    let size = generateMaze(n);
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
      window.location.reload();
    }
    this.setState({
      mazeSolution: solutionMaze,
    });
  };

  deleteOld = () => {
    let solutionMaze = document.getElementById("solvedMaze");
    if (solutionMaze !== null) {
      solutionMaze.innerHTML = "";
    }
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
          <div className="inputs">
            <label htmlFor="maze-size">Input desired Maze Size</label>
            <input id="maze-size" name="mazesize" type="text" />
            <button id="generateMaze" onClick={this.clickHandler}>
              <p id="mazearea"></p>
              Generate
            </button>
          </div>
          <div className="blockerscontainer">
            <div>
              Blocker: <Cell name="0" />
            </div>
            <div>
              Passable Tile: <Cell name="1" />
            </div>
            <div>
              Solution Path: <Cell name="" />
            </div>
          </div>
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
