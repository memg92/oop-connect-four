window.addEventListener("DOMContentLoaded", (event) => {
  let game = undefined;
  const p1 = document.getElementById("player-1-name");
  const p2 = document.getElementById("player-2-name");
  const newGame = document.getElementById("new-game");
  newGame.disabled = true;

  p1.addEventListener("keyup", (event) => {
    if (p1 && p2) {
      newGame.disabled = false;
    } else {
      newGame.disabled = true;
    }
  });

  p2.addEventListener("keyup", (event) => {
    if (p1 && p2) {
      newGame.disabled = false;
    } else {
      newGame.disabled = true;
    }
  });

  newGame.addEventListener("click", event => {
    game =
  })
});
