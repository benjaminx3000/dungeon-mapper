import "./styles.css";
import Phaser from "phaser";
import MainMenu from "./scenes/mainMenu";
import Cartographer from "./scenes/cartographer";

const config = {
  type: Phaser.AUTO,
  scale: {
    parent: "game-container",
    zoom: 1,
    width: 640,
    height: 480,
    autoCenter: Phaser.DOM.CENTER_BOTH,
    mode: Phaser.Scale.NONE
  },
  debug: true,
  backgroundColor: 0x444444,
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
      gravity: { y: 200 }
    }
  },
  scene: [MainMenu, Cartographer]
};

new Phaser.Game(config);
