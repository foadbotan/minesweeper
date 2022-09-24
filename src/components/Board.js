import Tile from "./Tile";

export default function Board({ board, updateTile }) {
  return (
    <div className="board">
      {board.map((tile) => (
        <Tile key={tile.index} tile={tile} updateTile={updateTile} />
      ))}
    </div>
  );
}
