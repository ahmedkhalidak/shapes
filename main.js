import Rectangle from "./rectangle.js";
import Circle from "./circle.js";
import Square from "./square.js";

let shapeForm = document.getElementById("shapeForm");
let rectangleShape = document.getElementById("rectangleShape");
let circleShape = document.getElementById("circleShape");
let squareShape = document.getElementById("squareShape");

shapeForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let width = parseFloat(document.getElementById("width").value);
  let height = parseFloat(document.getElementById("height").value);
  let radius = parseFloat(document.getElementById("radius").value);

  let rectangle = new Rectangle(width, height);
  let circle = new Circle(radius);
  let square = new Square(width);

  rectangleShape.querySelector("#rectangleResult").innerText =
    rectangle.toString();
  circleShape.querySelector("#circleResult").innerText = circle.toString();
  squareShape.querySelector("#squareResult").innerText = square.toString();
});
