import Phaser from "phaser";
import Cartographer from "./cartographer";
import Button from "../ui/button.js";

class MainMenu extends Phaser.Scene {
  static KEY = "MAIN_MENU";

  playButton;
  dontPlayButton;

  constructor() {
    super({
      key: MainMenu.KEY
    });
  }

  preload() {}

  create() {
    this.playButton = new Button(
      this,
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      "Play"
    );

    this.playButton.addListener(Phaser.Input.Events.POINTER_UP, () =>
      this.scene.start(Cartographer.KEY)
    );

    this.dontPlayButton = new Button(
      this,
      this.cameras.main.centerX,
      this.cameras.main.centerY + 50,
      "Don't Play"
    );
    console.log(this);
  }
}

export default MainMenu;
