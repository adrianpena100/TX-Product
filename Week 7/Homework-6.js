// Constructor for Car object.
// Parameters are not necessary for other fields
// besides id  since they are all the same initially.
function Car (id) {
    this.model = "Toyota";
    this.color = "red";
    this.year = 2022;
    this.mpg = 33;
    this.id = id;
}

// Create an empty array that creates another
// array inside each row. Adds a new Car object
// with the startId incrementing each time it
// passes through the loop.
var carTable = [];
var startId = 1;
for (var row = 0; row < 10; row++) {
    carTable[row] = [];
    for(var col = 0; col < 10; col++) {
        carTable[row][col] = new Car(startId);
        startId++;
    }
}

// Iterate through array that gets the current
// id and compares whether its bettwen the min and
// max. Pushes the currentCar into the minMaxList.
function getCarsBetweenIds(idMin, idMax) {
    var minMaxList = [];
    for(var row = 0; row < 10; row++) {
        for(var col = 0; col < 10; col++) {
            var currentCar = carTable[row][col];
            var id = currentCar["id"];
            if (id >= idMin && id <= idMax) {
                currentCar["color"] = "blue";
                minMaxList.push(currentCar);
            }
        }
    }
    return minMaxList;
}

console.log(getCarsBetweenIds(1, 4));
console.log(getCarsBetweenIds(10, 20));
console.log(getCarsBetweenIds(98, 100));