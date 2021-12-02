function generateMaze(n) {
  console.log(n);
  n = Number(n);
  let maze = [];
  for (let i = 0; i < n; i++) {
    let mazeWidth = new Array(n)
      .fill(1)
      .map((x) => (Math.random() >= 0.3 ? 1 : 0));
    maze.push(mazeWidth);
  }
  maze[0][0] = 1;
  maze[maze.length - 1][maze.length - 1] = 1;
  return maze;
}

export default generateMaze;
