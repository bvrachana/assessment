Code Explanation
Grid Initialization: The grid is created using a helper function createEmptyGrid(), which initializes a 20x20 grid with all cells set to dead (0).
Neighbor Counting: The countNeighbors function checks the number of live neighbors for a given cell.
Next Generation Logic: The nextGeneration function applies the rules of the game to determine the state of the grid for the next generation.
Toggling Cells: The toggleCell function allows users to click on a cell to change its state from alive to dead or vice versa.
Styling: The grid is styled using CSS grid layout.


Output
When you run the application, you will see a grid of 20x20 cells. Clicking on a cell will toggle its state between black (alive) and white (dead). The grid will automatically update every half-second to reflect the changes according to the rules of Conway's Game of Life.


Output Images
![Alt Text](https://firebasestorage.googleapis.com/v0/b/conways-game-8dbb4.appspot.com/o/Conwaysgame.png?alt=media&token=7985f28c-3d28-4986-b66e-7ff866ab7d24)

![Alt Text](https://firebasestorage.googleapis.com/v0/b/conways-game-8dbb4.appspot.com/o/conwaysgame1.png?alt=media&token=07dec91a-994e-42ae-9ad4-fe9794f675f2)

Output Videos
![Watch the video](https://firebasestorage.googleapis.com/v0/b/conways-game-8dbb4.appspot.com/o/conwaysgame%20(2).mp4?alt=media&token=d0932101-3151-4ddd-98db-7af5ed67597f)