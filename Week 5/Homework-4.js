function Car(model, year, color, mpg) {
    this.model = model;
    this.year = year;
    this.color = color;
    this.mpg = mpg;
}

var corvette = new Car("Stingray", 2022, "Yellow", 24);
var impreza = new Car("WRX", 1998, "Blue", 27);
var ram = new Car("2500", 2022, "Red", 15);

console.log(corvette.mpg);
console.log(impreza.mpg);
console.log(ram.mpg);

function Vehichle(car) {
    this.car = car;
}

var superCar = new Vehichle(corvette);
var rallyCar = new Vehichle(impreza);
var truck = new Vehichle(ram);

console.log(superCar.car.mpg);
console.log(rallyCar.car.mpg);
console.log(truck.car.mpg);