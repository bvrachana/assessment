import React, { useState, useEffect } from "react";

const numRows = 20;
const numCols = 20;

const createEmptyGrid = () => {
  return new Array(numRows * numCols).fill(0);
};

const App = () => {
  const [grid, setGrid] = useState(createEmptyGrid);

  const countNeighbors = (grid, index) => {
    const neighbors = [
      -1, 1, // Left, Right
      -numCols, +numCols, // Top, Bottom
      -numCols - 1, -numCols + 1, // Top Left, Top Right
      +numCols - 1, +numCols + 1, // Bottom Left, Bottom Right
    ];

    let count = 0;
    for (let dir of neighbors) {
      const neighborIndex = index + dir;
      const isNeighborInGrid = neighborIndex >= 0 && neighborIndex < numRows * numCols;
      const isSameRow = Math.floor(index / numCols) === Math.floor((index + dir) / numCols);
      
      if (isNeighborInGrid && !((dir === -1 || dir === 1) && !isSameRow)) {
        count += grid[neighborIndex];
      }
    }
    return count;
  };

  const nextGeneration = () => {
    setGrid((prevGrid) => {
      const newGrid = [...prevGrid];

      for (let i = 0; i < numRows * numCols; i++) {
        const neighbors = countNeighbors(prevGrid, i);
        if (prevGrid[i] === 1 && (neighbors < 2 || neighbors > 3)) {
          newGrid[i] = 0;
        } else if (prevGrid[i] === 0 && neighbors === 3) {
          newGrid[i] = 1;
        }
      }
      return newGrid;
    });
  };

  useEffect(() => {
    const interval = setInterval(nextGeneration, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleCell = (index) => {
    setGrid((prevGrid) => {
      const newGrid = [...prevGrid];
      newGrid[index] = newGrid[index] ? 0 : 1;
      return newGrid;
    });
  };

  return (
    <div>
      <h1>Conway's Game of Life</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${numCols}, 20px)`,
        }}
      >
        {grid.map((cell, index) => (
          <div
            key={index}
            onClick={() => toggleCell(index)}
            style={{
              width: 20,
              height: 20,
              backgroundColor: cell ? "black" : "white",
              border: "solid 1px gray",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default App;