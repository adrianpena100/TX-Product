function countUpwardsByThree() {
    var num = 0;
    console.log(num);
    for(var i = 0; i < 10; i++) {
        num += 3;
        console.log(num);
    }
}
countUpwardsByThree();

function guessMyFavoriteNumber(guess) {
    if (guess == 10) {
        console.log("You guessed my favorite number!");
    } else {
        console.log("Try again!");
    }
}

console.log();
guessMyFavoriteNumber(2);
guessMyFavoriteNumber(5);
guessMyFavoriteNumber(10);
guessMyFavoriteNumber(7);
guessMyFavoriteNumber(10);
console.log();

function convertNumberToDay(number) {
    switch (number) {
        case 0:
            console.log("Sunday");
            break;
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        default:
            console.log("Not a day");
    }
}

for(var i = 0; i < 7; i++) {
    convertNumberToDay(i);
}