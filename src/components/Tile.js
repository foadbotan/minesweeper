import { memo } from "react";

function Tile({ tile }) {
  let value = tile.isFlagged ? "🚩" : "";

  if (tile.isOpen) {
    value = tile.hasMine ? "💣" : tile.nearbyMinesCount || "";
  }

  return (
    <div
      className="tile"
      style={{
        cursor: tile.isOpen || tile.isFlagged ? "" : "pointer",
        backgroundColor: tile.isOpen && "hsl(210, 10%, 80%)",
      }}
    >
      {value}
    </div>
  );
}

export default memo(Tile);
