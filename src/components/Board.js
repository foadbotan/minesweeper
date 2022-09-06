import { useReducer } from "react";
import Tile from "./Tile";
import createNewBoard from "../utils/createNewBoard";
import reducer from "../utils/reducer";

export default function Board() {
  const [state, dispatch] = useReducer(reducer, { board: createNewBoard() });

  const tiles = state.board.map((tile) => <Tile key={tile.id} tile={tile} dispatch={dispatch} />);

  return <div className="board">{tiles}</div>;
}
