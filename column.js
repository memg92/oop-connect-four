export class Column {
  constructor() {
    this.columnSquares = [null, null, null, null, null, null];
  }

  isFull() {
    return this.columnSquares[0] !== null;
  }

  add(playerNum) {
    if (this.isFull()) {
      return;
    } else {
      for (let i = 5; i >= 0; i--) {
        if (this.columnSquares[i] === null) {
          this.columnSquares[i] = playerNum;
          break;
        }
      }
    }
  }

  getTokenAt(rowIndex) {
    return this.columnSquares[rowIndex];
  }
}
