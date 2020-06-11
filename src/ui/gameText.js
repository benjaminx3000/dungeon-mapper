import Phaser from "phaser";
export default class GameText extends Phaser.GameObjects.Text {
  /**
   * @param {Phaser.Scene} scene
   * @param {number} x
   * @param {number} y
   * @param {string} text
   */
  constructor(scene, x, y, text) {
    /** @type {Phaser.Types.GameObjects.Text.TextStyle} */
    const textStyle = {
      fontSize: 40,
      fontFamily: "Press Start 2P",
      color: "black"
    };

    super(scene, x, y, text, textStyle);
    scene.add.existing(this);
  }
}
