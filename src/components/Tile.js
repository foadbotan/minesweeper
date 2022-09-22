import { memo } from "react";

function Tile({ tile }) {
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
      {tile.hasMine ? <div>💣</div> : tile.nearbyMinesCount}
    </div>
  );
}

export default memo(Tile);
