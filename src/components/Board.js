import Tile from "./Tile";

export default function Board({ board }) {
  const rows = board.map((row) => {
    return (
      <div className="row">
        {row.map((tile) => {
          return <Tile key={tile.id} tile={tile} />;
        })}
      </div>
    );
  });

  return <div className="board">{rows}</div>;
}
