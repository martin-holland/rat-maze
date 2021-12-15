# Rat In a Maze

Project has been made to demonstrate data structures and backtracking with Javascript as a framework. Application has been built with React.

The project is to demonstate the logic behind a rat getting from a source to a destination. The rat can only move down and right. It cannot move left or upwards. If a solution in one direction is not found, it can backtrack the path and find an alternative route.

Due to the random generation of the maze a solution is not always viable.

### Assumptions:

- The Rat **Source** is **always** at 0,0 in terms of the grid.
- The **Destination** (Cheese) is **always** at n,n eg: If the grid is 5x5, then it will be at position 5,5.
- Grid 0,0 and n,n are always passable. Otherwise the rat tile and the cheese tile would not be accessible!

## Technologies used

Built with:

- HTML
- JS
- CSS
- Reactjs
- Netlify (hosting)

## Setup and usage

**NB: The maze generation is random and as a result, the maze does not always have a solution! Keep trying!**

1. Visit: https://martin-holland-rat-maze.netlify.app/
2. Enter a maze size, that is greater than 0, recommended less than 20 as displaying it can become difficult with higher numbers, solving it also becomes logarithmically more difficult.
3. Click generate maze. This will show you a maze with random blockers placed.
4. Once new maze is generated, click solve maze **if** there is a path available it will generate a solution path underneath the maze you generated. If not it will alert you to a 'no path available' dialogue.
5. Try it with different sizes!

### Assumptions:

- The Rat **Source** is **always** at 0,0 in terms of the grid.
- The **Destination** is **always** at n,n eg: If the grid is 5x5, then it will be at position 5,5.

Live page [here](https://martin-holland-rat-maze.netlify.app/)

## Screenshot

![Alt text](src/assets/rat-in-maze1.png?raw=true "Demo 1")
![Alt text](src/assets/rat-in-maze2.png?raw=true "Demo 2")

## Sources

Mouse SVG <div>Icon made from <a href="http://www.onlinewebfonts.com/icon">Icon Fonts</a> is licensed by CC BY 3.0</div>

Cheese SVG - svgrepo.com

### Links - Used to help understand the logic of solving the maze

https://www.geeksforgeeks.org/rat-in-a-maze-backtracking-2/

https://www.oreilly.com/library/view/learning-javascript-data/9781788623872/0c52cbba-0a6f-4e5c-aead-077358c4307e.xhtml

## Authors and acknowledgment

Martin Holland

Github [here](https://github.com/martin-holland)
https://github.com/martin-holland

### Acknowledgements:

Elena @ https://github.com/ElaFinIta
For assisting with the components Row and Cell to generate the maze dynamically from an array.
