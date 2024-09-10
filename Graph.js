import Point from "./Point.js";

export default class Graph {
  #_pointMap;
  constructor(board) {
    // This will hold an adjunction list
    this.board = board;
    this.#_pointMap = new Map();
    this.#createAdjunctionList();
  }
  find(coor) {
    for (const key of this.#_pointMap.keys()) {
      if (coor[0] === key.x && coor[1] === key.y) {
        return key;
      }
    }
    return null;
  }
  getAdjunctionList(point) {
    for (const [key, value] of this.#_pointMap.entries()) {
      if (point.x === key.x && point.y === key.y) {
        return value;
      }
    }
    return null;
  }
  #createAdjunctionList() {
    for (let i = 0; i < this.board.size(); i++) {
      for (let j = 0; j < this.board.size(); j++) {
        const point = this.board.findPoint(i, j);
        const availableMoves = this.board.getAvailableMoves(point);
        this.#_pointMap.set(point, availableMoves);
      }
    }
  }
}
