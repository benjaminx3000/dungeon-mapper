import Phaser from "phaser";

const DEFAULT_OPTIONS = {
  textColor: "#fff",
  buttonColor: "#bada55"
};

export default class Button extends Phaser.GameObjects.Group {
  constructor(scene, x, y, text, options) {
    super(scene);
    const mergedOptions = { ...options, ...DEFAULT_OPTIONS };

    this.buttonLabel = new Phaser.GameObjects.Text(scene, x, y, text, {
      fontSize: 20,
      align: "center",
      color: mergedOptions.textColor
    });

    this.buttonLabel.setOrigin(0.5);

    this.button = new Phaser.GameObjects.Rectangle(
      scene,
      x,
      y,
      this.buttonLabel.width + 20,
      32,
      mergedOptions.buttonColor
    );

    this.button.setOrigin(0.5);
    this.button.setInteractive();
    this.button.addListener(Phaser.Input.Events.POINTER_OVER, () => {
      this.buttonLabel.setScale(1.05);
      this.button.setScale(1.05);
    });
    this.button.addListener(Phaser.Input.Events.POINTER_OUT, () => {
      this.buttonLabel.setScale(1);
      this.button.setScale(1);
    });
    this.button.addListener(Phaser.Input.Events.POINTER_DOWN, () => {
      this.buttonLabel.setX(this.button.x + 3);
      this.buttonLabel.setY(this.button.y + 3);
      this.button.setX(this.button.x + 3);
      this.button.setY(this.button.y + 3);
    });
    this.button.addListener(Phaser.Input.Events.POINTER_UP, () => {
      this.buttonLabel.setX(this.button.x - 3);
      this.buttonLabel.setY(this.button.y - 3);
      this.button.setX(this.button.x - 3);
      this.button.setY(this.button.y - 3);
    });

    this.buttonShadow = new Phaser.GameObjects.Rectangle(
      scene,
      x + 5,
      y + 5,
      this.buttonLabel.width + 20,
      32,
      mergedOptions.buttonColor,
      0.25
    );

    this.buttonShadow.blendMode = Phaser.BlendModes.MULTIPLY;

    this.addMultiple([this.buttonShadow, this.button, this.buttonLabel], true);
    scene.add.existing(this);
  }

  addListener(evt, fn, context) {
    console.log("addListener");
    this.button.addListener(evt, fn, context);
  }

  removeListener(evt, fn, context) {
    this.button.removeListener(evt, fn, context);
  }

  destroy() {
    this.button.removeAllListeners();
  }
}
