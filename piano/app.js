class Beat {
  constructor(sound) {
    this.sound = new Audio(sound);
    // this.sound.play();
  }

  play = () => {
    this.sound.currentTime = 0;
    this.sound.play();
  };
}

class Buttons {
  constructor(color, keyCode) {
    this.color = color;
    this.keyCode = keyCode;
    this.element = document.getElementById(keyCode);
    // this.changeColor();
    this.setTransition();
  }

  setTransition = () => {
    this.element.addEventListener("transitionend", () => {
      this.deselect();
    });
  };

  changeColor = () => {
    this.element.style.backgroundColor = this.color;
  };

  deselect = () => {
    this.element.style.backgroundColor = "white";
  };
}

const beat = {
  65: {
    beat: new Beat("./audio/soundA.mp3"),
    btn: new Buttons("blue", "65"),
  },
  83: {
    beat: new Beat("./audio/soundA4.mp3"),
    btn: new Buttons("blue", "83"),
  },
  68: {
    beat: new Beat("./audio/soundB.mp3"),
    btn: new Buttons("blue", "68"),
  },
  70: {
    beat: new Beat("./audio/soundC.mp3"),
    btn: new Buttons("blue", "70"),
  },
  71: {
    beat: new Beat("./audio/soundC3.mp3"),
    btn: new Buttons("blue", "71"),
  },
  72: {
    beat: new Beat("./audio/soundD.mp3"),
    btn: new Buttons("blue", "72"),
  },
  74: {
    beat: new Beat("./audio/soundE.mp3"),
    btn: new Buttons("blue", "74"),
  },
  75: {
    beat: new Beat("./audio/soundF.mp3"),
    btn: new Buttons("blue", "75"),
  },
  76: {
    beat: new Beat("./audio/soundF5.mp3"),
    btn: new Buttons("blue", "76"),
  },
};

function triggerBite(event) {
  const keyCode = event.keyCode;
  if (keyCode in beat) {
    let keyPress = beat[keyCode];
    keyPress.beat.play();
    keyPress.btn.changeColor();
  }
}
document.addEventListener("keydown", triggerBite);
