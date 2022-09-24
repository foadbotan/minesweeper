import { memo } from "react";

function Tile({ tile, updateTile }) {
  let value = tile.isFlagged ? "🚩" : "";

  if (tile.isOpen) {
    value = tile.hasMine ? "💣" : tile.nearbyMinesCount || "";
  }

  function handleRightClick(e) {
    e.preventDefault();

    if (tile.isOpen) return;
    updateTile(tile.index, (tile) => {
      return { ...tile, isFlagged: !tile.isFlagged };
    });
  }

  function handleLeftClick() {
    if (tile.isFlagged) return;
    updateTile(tile.index, (tile) => {
      return { ...tile, isOpen: true };
    });
  }

  return (
    <div
      className="tile"
      style={{
        cursor: tile.isOpen || tile.isFlagged ? "" : "pointer",
        backgroundColor: tile.isOpen && "hsl(210, 10%, 80%)",
      }}
      onClick={handleLeftClick}
      onContextMenu={handleRightClick}
    >
      {value}
    </div>
  );
}

export default memo(Tile);
