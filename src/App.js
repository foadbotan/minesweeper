import { useState } from "react";
import Board from "./components/Board";
import createNewBoard from "./utils/createNewBoard";

export default function App() {
  const boardWidth = 10;
  const boardHeight = 10;
  const mineCount = 10;
  const [board, setBoard] = useState(createNewBoard(boardWidth, boardHeight, mineCount));

  return (
    <main style={{ "--width": boardWidth }}>
      <h1>Minesweeper</h1>
      <Board board={board} />
    </main>
  );
}
