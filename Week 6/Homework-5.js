// starts the array in the end and descends
// from the string and inputting the current 
// char into the newly created switched variable
// so it correctly replicates it reversed.
function reverse(string) {
    var switched = "";
    for(var i = string.length - 1; i >= 0; i--) {
        switched += string[i];
    }
    return switched;
}

console.log(reverse("Hello World!"));
console.log(reverse("Adrian"));
console.log(reverse("racecar"));

// vowels string is created to use as a reference
// when comparing to a lowercased version of the passed string.
// a counter variable is updated when we compare using the 
// indexOf function with the specific character in the 
// array. If a match is found, not -1, it will add to the 
// counter of vowels found.
function numVowels(string) {
    var vowels = "aeiou";
    var lower = string.toLowerCase();
    var count = 0;

    for(var i = 0; i < lower.length; i++) {
        if (vowels.indexOf(lower[i]) != -1) {
            count++;
        }
    }
    return count;
}

console.log(numVowels("vowels"));
console.log(numVowels("Awesome"));
console.log(numVowels("AmAZiNG"));


// Counter variable is used to count the amount times
// the specific string in the array is less than the
// required length.
function numStringsShorterThanLength(strings, length) {
    var count = 0;
    for(var i = 0; i < strings.length; i++) {
        if (strings[i].length < length) {
            count++;
        }
    }
    return count;
}

var fruit = ["apple", "orange", "banana", "strawberry"];
console.log(numStringsShorterThanLength(fruit, 11));
fruit.push("raspberry");
fruit.push("blueberry");
console.log(numStringsShorterThanLength(fruit, 10));
fruit.push("peach");
fruit.push("cherry");
console.log(numStringsShorterThanLength(fruit, 6));