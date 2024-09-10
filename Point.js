export default class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  equals(otherPoint) {
    if (!(otherPoint instanceof Point)) {
      return false; // Ensure the other object is also a Point
    }
    return this.x === otherPoint.x && this.y === otherPoint.y;
  }
}
