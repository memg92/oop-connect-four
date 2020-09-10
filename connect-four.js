import { Game } from "./game.js";
import { Column } from "./column.js";
let game = undefined;

function updateUI() {
  const boardHolder = document.getElementById("board-holder");
  const gameName = document.getElementById("game-name");

  if (game === undefined) {
    boardHolder.classList.add("is-invisible");
  } else {
    boardHolder.classList.remove("is-invisible");
    gameName.innerHTML = game.getName();

    for (let rowIndex = 0; rowIndex <= 5; rowIndex++) {
      for (let columnIndex = 0; columnIndex <= 6; columnIndex++) {
        const square = document.querySelector(
          `#square-${rowIndex}-${columnIndex}`
        );
        square.innderHTML = "";

        const playerNumber = game.getTokenAt(rowIndex, columnIndex);
        if (playerNumber === 1) {
          const token = document.createElement("div");
          token.classList.add("token");
          token.classList.add("black");
          square.appendChild(token);
        } else if (playerNumber === 2) {
          const token = document.createElement("div");
          token.classList.add("token");
          token.classList.add("red");
          square.appendChild(token);
        }
      }
    }
    const player = game.currentPlayer;
    const clickTargets = document.getElementById("click-targets");
    if (player === 1) {
      clickTargets.classList.add("black");
      clickTargets.classList.remove("red");
    } else {
      clickTargets.classList.add("red");
      clickTargets.classList.remove("black");
    }
  }
}

window.addEventListener("DOMContentLoaded", (event) => {
  const p1 = document.getElementById("player-1-name");
  const p2 = document.getElementById("player-2-name");
  const newGame = document.getElementById("new-game");
  // newGame.disabled = true;

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

  document
    .getElementById("click-targets")
    .addEventListener("click", (event) => {
      const targetId = event.target.id;
      if (!targetId.startsWith("column-")) return;

      const columnIndex = Number.parseInt(targetId[targetId.length - 1]);

      game.playInColumn(columnIndex);
      updateUI();
      console.log(game.columns);
    });

  // console.log(game.currentPlayer);
});
