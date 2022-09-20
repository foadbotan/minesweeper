import { memo } from "react";
import { ACTIONS } from "../reducer";

function Tile({ dispatch, tile }) {
  function handleRightClick(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.FLAG, payload: tile.id });
  }

  function handleLeftClick() {
    dispatch({ type: ACTIONS.SHOW, payload: tile.id });
  }

  return (
    <div
      className="tile"
      style={{ backgroundColor: tile.flag && "yellow" }}
      onClick={handleLeftClick}
      onContextMenu={handleRightClick}
    >
      {tile.show && tile.nearbyMines}
    </div>
  );
}

export default memo(Tile);
