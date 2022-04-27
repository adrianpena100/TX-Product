// Create a map that uses each element in the 
// array to multiply by itself for a squred result
function returnSquaredNumbers(numbers) {
    const map = numbers.map(element => element * element);
    return map;
}

var double1 = returnSquaredNumbers([1, 2, 3]);
var double2 = returnSquaredNumbers([2, 4, 6]);
var double3 = returnSquaredNumbers([10, 15, 20]);

console.log(double1);
console.log(double2);
console.log(double3);


// Car constructor
function Car () {
    this.model = "Ford";
    this.year = 2022;
    this.color = "red";
}

// Create new empty carArray
var carArray = [];
// Push in 10 elements in empty carArray
for(let i = 0; i < 10; i++) {
    carArray.push(new Car());
}

// Create new mpg object
const mpg = {
    mpg: 30.0
}

// Create empty new array that pushes
// newly created object by merging the current 
// element in the array with the mpg object 
var mpgAdded =[]
for(var i = 0; i < carArray.length; i++) {
    var current = {...carArray[i], ... mpg};
    mpgAdded.push(current);
}

// Print each object with newly added mpg
mpgAdded.forEach(element => console.log(element));