import { memo } from "react";

function Tile({ tile }) {
  let value = tile.hasMine ? "💣" : tile.nearbyMinesCount || "";

  function handleRightClick(e) {
    e.preventDefault();
  }

  function handleLeftClick() {}

  return (
    <div
      className="tile"
      style={{ backgroundColor: tile.isFlagged && "yellow" }}
      onClick={handleLeftClick}
      onContextMenu={handleRightClick}
    >
      {value}
    </div>
  );
}

export default memo(Tile);
