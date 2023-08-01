import Shape from "./shape.js";

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }

  perimeter() {
    return 2 * Math.PI * this.radius;
  }

  toString() {
    return `Circle => Radius: ${this.radius}, ${super.toString()}`;
  }
}

export default Circle;
