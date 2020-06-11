/**
 * Tile info is contains data related to on speciffic tile in a room,
 * the data is either a 4 digit number, or 'none'.
 */
type TileInfo = number | "none";

interface RoomData {
  id: string;
  type: string;
  tileData: [
    TileInfo,
    TileInfo,
    TileInfo,
    TileInfo,
    TileInfo,
    TileInfo,
    TileInfo,
    TileInfo,
    TileInfo
  ];
}
