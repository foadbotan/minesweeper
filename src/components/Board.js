import Tile from "./Tile";

export default function Board({ board, dispatch }) {
  const tiles = board.map((tile) => <Tile key={tile.id} tile={tile} dispatch={dispatch} />);

  return <div className="board">{tiles}</div>;
}
