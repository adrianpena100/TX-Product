// Multiple variables created to make readability
// easier. Phrase is stored so the parameters don't
// look too messy. Print the number every time the loop
// resets until it hits my favorite number and then calls the
// setTimeout function to execute the 3 second delay.
function powersOfThree() {
    var max = 19683;
    var favorite = 81;
    var phrase = "This is my favorite power of three!";

    for(var num = 1; num <= max; num *= 3) {
        console.log(num);
        if(num == favorite) {
            setTimeout(console.log, 3000, phrase);
            return;
        }
    }
}
powersOfThree();

// The phrase needed stored in a function
function phrase() {
    console.log("Hello World!");
}

// Function to be called so we can clear the interval
function clearPhraseInterval(intervalId) {
    clearInterval(intervalId);
}

// Use setInterval so we can get the phrase to print every
// 10 seconds that is stored in a variable. That variable is
// then called in the setTimeout function sent as a parameter
// until it hits 121 seconds and calls the clearPhraseInterval
// to cancel once it reaches passed 2 minutes.
function everyTenSeconds() {
    var intervalId = setInterval(phrase, 10000);
    setTimeout(clearPhraseInterval, 121000, intervalId);
}

everyTenSeconds();