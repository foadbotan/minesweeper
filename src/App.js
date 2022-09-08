import { useReducer } from "react";
import Board from "./components/Board";
import createNewBoard from "./utils/createNewBoard";
import reducer from "./utils/reducer";

export default function App() {
  const [state, dispatch] = useReducer(reducer, { board: createNewBoard() });

  return (
    <main>
      <h1>Minesweeper</h1>
      <Board board={state.board} dispatch={dispatch} />
    </main>
  );
}
