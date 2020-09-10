import { Game } from './game.js';
  let game = undefined;
  let boardHolder = document.getElementById('board-holder');
  let gameName = document.getElementById('game-name');
  function updateUI() {
    if(game === undefined) {
      boardHolder.classList.add('is-invisible')
    } else {
      boardHolder.classList.remove('is-invisible');
      gameName.innerHTML = getName(game) 
    }
  };
  
  window.addEventListener("DOMContentLoaded", (event) => {

  const p1 = document.getElementById("player-1-name");
  const p2 = document.getElementById("player-2-name");
  const newGame = document.getElementById("new-game");
  newGame.disabled = true;

function trueNewGame() {
  newGame.disabled = true;
}

function falseNewGame() {
  newGame.disbled = false;
}

  p1.addEventListener("keyup", (event) => {
    if (p1 && p2) {
      falseNewGame();
    } else {
      trueNewGame();
    }
  });

  p2.addEventListener("keyup", (event) => {
    if (p1 && p2) {
      falseNewGame();
    } else {
      trueNewGame();
    }
  });

  newGame.addEventListener("click", event => {
    game = new Game('','');
    trueNewGame();
    updateUI()
  })
  
});

