function sumOfSquareAreas(a, b) {
    var aArea = a * a;
    var bArea = b * b;

    return aArea + bArea;
}

console.log(sumOfSquareAreas(9, 3));
console.log(sumOfSquareAreas(2, 8));
console.log(sumOfSquareAreas(7, 12));
console.log();

function gradeCalculator(homeworkAvg, quizAvg, examAvg) {
    var homeworkScores = homeworkAvg * 0.1;
    var quizScores = quizAvg * 0.15;
    var examScores = examAvg * 0.75;

    return homeworkScores + quizScores + examScores;
}

console.log(gradeCalculator(100, 100, 100));
console.log(gradeCalculator(85, 90, 95));
console.log(gradeCalculator(70, 80, 90));