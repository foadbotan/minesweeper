import Tile from "./Tile";

export default function Board({ board, dispatch }) {
  return (
    <div className="board">
      {board.map((tile) => (
        <Tile key={tile.id} tile={tile} />
      ))}
    </div>
  );
}
