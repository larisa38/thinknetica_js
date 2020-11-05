// С помощью прототипа реализовать структуру "Квадрат"
// которая будет расширять структуру "Прямоугольник", должна быть возможность
// задавать размеры обеим фигурам и получать их площадь и периметр

function Rect(length, width) {
  this.length = length;
  this.width = width;
  this.perimeter = function() {
    return (this.length + this.width) * 2;
  }
  this.square = function() {
    return this.length * this.width;
  }
}

function Square(length) {
  this.length = length;
  this.width = length;
}
Square.prototype = new Rect();

const rectangle = new Rect(3, 2);
console.log('Rectangle perimeter', rectangle.perimeter())
console.log('Square rectangle ', rectangle.square())
let square = new Square(7);
console.log('Square perimeter', square.perimeter())
console.log('Square area', square.square())
// "Rectangle perimeter", 10
// "Square rectangle ", 6
// "Square perimeter", 28
// "Square area", 49
