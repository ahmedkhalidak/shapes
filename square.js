// square.js
import Shape from "./shape.js";

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }

  area() {
    return this.side * this.side;
  }

  perimeter() {
    return 4 * this.side;
  }

  toString() {
    return `Square - Side: ${this.side}, ${super.toString()}`;
  }
}

export default Square;
