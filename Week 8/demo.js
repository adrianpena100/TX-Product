var employee_info = {
    firstName: "John",
    lastName: "Doe"
}

var employee_job = {
    job: "Software Engineer",
    team: "iOS Development"
}

var employee = {...employee_info, ...employee_job}
console.log(employee);

const data = [1, 4, 9, 16];

const map1 = data.map(x => x * 3);
console.log(map1);

function double(number) {
    return number * 2;
}

const map2 = data.map(double);
console.log(map2);

var words = ["hello", "JavaScript", "coding", "computer"];

console.log(words.filter(words => words.length <= 6));


words.forEach(x => console.log(x));