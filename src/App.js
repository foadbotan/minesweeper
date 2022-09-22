import { useState } from "react";
import Board from "./components/Board";
import createNewBoard from "./utils/createNewBoard";

export default function App() {
  const [board, setBoard] = useState(createNewBoard());

  return (
    <main>
      <h1>Minesweeper</h1>
      <Board board={board} />
    </main>
  );
}
