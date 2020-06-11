import Phaser from "phaser";

const sampleTile = require("./sample-tile.png");
export default class Room extends Phaser.GameObjects.Group {
  static TILE_SIZE = 32;
  static OFFSET = Room.TILE_SIZE * 1.5;
  static SIZE = Room.TILE_SIZE * 3;

  /**
   * To start the fourth parameter `roomData` will be undefined
   * but in the future we will use this to load a saved map.
   * @param {Phaser.Scene} scene
   * @param {number} x
   * @param {number} y
   * @param {RoomData} roomData
   */
  constructor(scene, x, y, roomData) {
    console.log(arguments);
    super(scene);

    const tiles = [];
    let xOffset = 0;
    let yOffset = 0;

    // 1. Create the tile data.

    // 2. Create the 9 sprites from the tileData.
    for (let i = 0; i < 9; i++) {
      //
      tiles.push(
        new Phaser.GameObjects.Image(
          scene,
          x + xOffset,
          y + yOffset,
          getTileName(i)
        )
          .setOrigin(0)
          .setInteractive()
      );

      if (i % 3 === 2) {
        xOffset = 0;
        yOffset += Room.TILE_SIZE;
      } else {
        xOffset += Room.TILE_SIZE;
      }
    }

    // 2. Add to display
    this.addMultiple(tiles, true);
  }

  static preload(scene) {
    scene.load.image("sample-tile", sampleTile);
  }
}

/**
 * Add the names of each sprite here. Let's assume that 0 is the top left tile, and
 * 8 is the bottom right. Cases marked with an //* are spaces that can have doors.
 * We'll get to that once this is implemented.
 * @param {number} index
 * @param {any} doors
 */
function getTileName(index, doors) {
  switch (index) {
    case 0:
      return "sample-tile";
    case 1: //*
      return "sample-tile";
    case 2:
      return "sample-tile";
    case 3: //*
      return "sample-tile";
    case 4:
      return "sample-tile";
    case 5: //*
      return "sample-tile";
    case 6:
      return "sample-tile";
    case 7: //*
      return "sample-tile";
    case 8:
      return "sample-tile";

    default:
      throw new Error("TILE_NOT_FOUD");
  }
}
