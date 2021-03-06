import { Column } from "./column.js";

export class Game {
  constructor(p1name, p2name) {
    this.p1name = p1name;
    this.p2name = p2name;
    this.currentPlayer = 1;
    this.columns = [
      new Column(),
      new Column(),
      new Column(),
      new Column(),
      new Column(),
      new Column(),
      new Column(),
    ];
  }

  getName() {
    return `${this.p1name} vs. ${this.p2name}`;
  }

  getTokenAt(rowIndex, columnIndex) {
    return this.columns[columnIndex].getTokenAt(rowIndex);
  }

  playInColumn(columnIndex) {
    this.columns[columnIndex].add(this.currentPlayer);

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
