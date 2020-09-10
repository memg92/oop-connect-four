export class Game {
  constructor(p1name, p2name) {
    this.p1name = p1name;
    this.p2name = p2name;
    this.currentPlayer = 1;
  }

  getName() {
    return `${this.p1name} vs. ${this.p2name}`;
  }

  playInColumn() {
        if (this.currentPlayer === 1) {
          this.currentPlayer = 2;
        } else {
          this.currentPlayer = 1;
        }
  }
}

const testGame = new Game("Miguel", "Lane");
console.log(testGame);
console.log(testGame.getName());
