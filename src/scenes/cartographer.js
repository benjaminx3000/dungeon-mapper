import Phaser from "phaser";
import Room from "../room/room";

class Cartographer extends Phaser.Scene {
  static KEY = "CARTOGRAPHER";
  roomCount = 0;
  nextRoomPosition = { x: 0, y: 0 };

  constructor() {
    super({
      key: Cartographer.KEY
    });
  }

  preload() {
    Room.preload(this);
  }

  create() {
    this.input.on(
      Phaser.Input.Events.GAMEOBJECT_DOWN,
      (pointer, gameObject) => {
        console.log("ADD_ROOM", gameObject, gameObject.texture);
        this.nextRoomPosition.y = this.nextRoomPosition.y - (Room.SIZE + 3);
        this.addRoom();
        this.cameras.main.pan(
          this.nextRoomPosition.x + Room.OFFSET,
          this.nextRoomPosition.y + Room.OFFSET,
          1000,
          Phaser.Math.Easing.Sine.easeInOut
        );
      }
    );

    this.nextRoomPosition = {
      x: this.cameras.main.centerX - Room.OFFSET,
      y: this.cameras.main.centerY - Room.OFFSET
    };

    // Add the starter room.
    this.addRoom();
  }

  addRoom() {
    // [TODO]: Send the correct position for the next room.
    const room = new Room(
      this,
      this.nextRoomPosition.x,
      this.nextRoomPosition.y
    );
    // 3. Add room to display.
    this.add.existing(room);
  }

  update(time, delta) {}
}

export default Cartographer;
