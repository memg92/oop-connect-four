import { Game } from "./game.js";
let game = undefined;
let clickTargets = document.getElementById("click-targets");

function updateUI() {
  let boardHolder = document.getElementById("board-holder");
  let gameName = document.getElementById("game-name");

  if (game === undefined) {
    boardHolder.classList.add("is-invisible");
  } else {
    boardHolder.classList.remove("is-invisible");
    gameName.innerHTML = game.getName();
  }

  let player = game.currentPlayer;
  if (player === 1) {
    clickTargets.classList.add("black");
    clickTargets.classList.remove("red");
  } else {
    clickTargets.classList.add("red");
    clickTargets.classList.remove("black");
  }
}

window.addEventListener("DOMContentLoaded", (event) => {
  const p1 = document.getElementById("player-1-name");
  const p2 = document.getElementById("player-2-name");
  const newGame = document.getElementById("new-game");
  newGame.disabled = true;

  function buttonSwitch() {
    let p1Content = p1.value;
    let p2Content = p2.value;

    newGame.disabled = p1Content.length === 0 || p2Content.length === 0;
  }

  p1.addEventListener("keyup", (event) => {
    buttonSwitch();
  });

  p2.addEventListener("keyup", (event) => {
    buttonSwitch();
  });

  newGame.addEventListener("click", (event) => {
    game = new Game(p1.value, p2.value);
    p1.value = "";
    p2.value = "";

    buttonSwitch();
    updateUI();
  });

clickTargets.addEventListener("click", (event) => {
  let targetId = event.target.id;
    if( targetId.includes('column-')) {
      let numVal = Number.parseInt(targetId[targetId.length - 1])
    }
  game.playInColumn(numVal);
    updateUI();
  });

  // console.log(game.currentPlayer);
});
