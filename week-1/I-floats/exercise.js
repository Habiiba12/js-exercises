var numberOfStudents = 15;
var numberOfMentors = 8;
var totalNumber = numberOfStudents + numberOfMentors;
var percentageStudents = 100 * numberOfStudents / totalNumber;
var percentageMentors = 100 * numberOfMentors / totalNumber;

console.log(Math.round(percentageStudents));
console.log(Math.round(percentageMentors));
