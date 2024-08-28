import { useState } from "react";
import "./App.css";
import { Square } from "./components/Square.jsx";
import { calculateWinner } from "./utility/calculateWinner.js";

function App() {
  const [matrix, setMatrix] = useState(Array(9).fill(null));
  const [isXSeleted, updateSelected] = useState(null);
  function handleClick(i) {
    if (matrix[i] || calculateWinner(matrix)) {
      return;
    }
    let newMatrix = [...matrix];
    if (isXSeleted) {
      newMatrix[i] = "X";
    } else {
      newMatrix[i] = "O";
    }
    updateSelected(!isXSeleted);
    setMatrix(newMatrix);
  }
  function handleReset() {
    let newMatrix = Array(9).fill(null);
    setMatrix(newMatrix);
  }
  const winner = calculateWinner(matrix);
  let status;
  if (winner) {
    status = "Winner: " + winner;
    console.log(status);
  } else {
    status = "Next player: " + (isXSeleted ? "X" : "O");
    console.log(status);
  }
  return (
    <>
      <div className="container">
        <div style={{ fontSize: "3rem" }}>{status}</div>
        <div className="gameContainer">
          <Square value={matrix[0]} onSquareClick={() => handleClick(0)} />
          <Square value={matrix[1]} onSquareClick={() => handleClick(1)} />
          <Square value={matrix[2]} onSquareClick={() => handleClick(2)} />
          <Square value={matrix[3]} onSquareClick={() => handleClick(3)} />
          <Square value={matrix[4]} onSquareClick={() => handleClick(4)} />
          <Square value={matrix[5]} onSquareClick={() => handleClick(5)} />
          <Square value={matrix[6]} onSquareClick={() => handleClick(6)} />
          <Square value={matrix[7]} onSquareClick={() => handleClick(7)} />
          <Square value={matrix[8]} onSquareClick={() => handleClick(8)} />
        </div>
        {calculateWinner(matrix) ? (
          <button
            style={{ fontSize: "3rem", width: "9rem", marginTop: "3rem" }}
            onClick={handleReset}
          >
            Reset
          </button>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default App;
