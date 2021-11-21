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
  return maze;
}

export default generateMaze;
