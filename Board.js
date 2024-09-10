import Point from "./Point.js";

export default class Board {
  #_boardSize;
  #_board;
  constructor(size) {
    this.#_boardSize = size;
    this.#_board = this.#createBoard(size);
  }
  #createBoard(size) {
    let board = new Array(size);
    for (let i = 0; i < size; i++) {
      const row = new Array(size);
      for (let j = 0; j < size; j++) {
        row[j] = new Point(i, j);
      }
      board[i] = row;
    }
    return board;
  }
  size() {
    return this.#_boardSize;
  }
  findPoint(x, y) {
    const coor = new Point(x, y);
    if (this.isValidCoor(coor)) {
      return this.#_board[coor.x][coor.y];
    }
    return null;
  }
  getAvailableMoves(coor) {
    return [
      this.findPoint(coor.x - 1, coor.y - 2),
      this.findPoint(coor.x - 1, coor.y + 2),
      this.findPoint(coor.x - 2, coor.y - 1),
      this.findPoint(coor.x - 2, coor.y + 1),
      this.findPoint(coor.x + 1, coor.y - 2),
      this.findPoint(coor.x + 1, coor.y + 2),
      this.findPoint(coor.x + 2, coor.y - 1),
      this.findPoint(coor.x + 2, coor.y + 1),
    ].filter((point) => point !== null);
  }
  isValidCoor(coor) {
    return (
      coor.x >= 0 &&
      coor.x < this.#_boardSize &&
      coor.y >= 0 &&
      coor.y < this.#_boardSize
    );
  }
}
