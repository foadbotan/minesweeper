import { useReducer } from "react";
import Board from "./components/Board";
import createNewBoard from "./utils/createNewBoard";
import reducer from "./reducer";

export default function App() {
  const [board, dispatch] = useReducer(reducer, createNewBoard());

  return (
    <main>
      <h1>Minesweeper</h1>
      <Board board={board} dispatch={dispatch} />
    </main>
  );
}
