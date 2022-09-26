import { memo, useEffect } from "react";

function Tile({ tile, updateTile, setIsGameOver, isGameOver }) {
  let value = "";
  if (tile.isFlagged) value = "🚩";
  if (tile.isOpen) value = tile.nearbyMinesCount || "";
  if (isGameOver && tile.hasMine) value = "💣";

  useEffect(() => {
    const tileIsEmpty = tile.nearbyMinesCount === 0 && tile.isOpen && !tile.hasMine;
    if (tileIsEmpty) {
      tile.nearbyTiles.forEach(openTile);
    }
  }, [tile.isOpen]);

  useEffect(() => {
    if (tile.hasMine && tile.isOpen) setIsGameOver(true);
  }, [tile]);

  function handleLeftClick(e) {
    if (tile.isFlagged) return;

    if (tile.isOpen) {
      tile.nearbyTiles.forEach(openTile);
    } else {
      openTile(tile);
    }
  }

  function handleRightClick(e) {
    e.preventDefault();
    toggleFlagged(tile);
  }

  function openTile(tile) {
    if (isGameOver) return;
    updateTile(tile, (tile) => {
      if (tile.isFlagged) return tile;
      return { ...tile, isOpen: true };
    });
  }

  function toggleFlagged(tile) {
    updateTile(tile, (tile) => ({ ...tile, isFlagged: !tile.isFlagged }));
  }

  return (
    <div
      className="tile"
      style={{
        cursor: tile.isOpen || tile.isFlagged ? "default" : "pointer",
        backgroundColor: tile.isOpen && (tile.hasMine ? "red" : "hsl(210, 10%, 80%)"),
      }}
      onClick={handleLeftClick}
      onContextMenu={handleRightClick}
    >
      {value}
    </div>
  );
}

export default memo(Tile);
