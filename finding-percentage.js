// challenge link:
// https://www.hackerrank.com/challenges/finding-the-percentage/problem?isFullScreen=true

/*
solution:
create a variable to filter out the marks of the query name
create a variable to iterate through the filtered marks and calculate the average
  add up all the marks
  divide the marks by n
print the average
*/

function findingPercentage(n, studentData, queryName) {
  const studentMarks = studentData[queryName];
  const studentAverage = studentMarks.reduce((acc, curr) => acc + curr, 0) / n;
  console.log(studentAverage.toFixed(2));
}

// example usage
const n = 3;
const studentData = {
  Krishna: [67, 68, 69],
  Arjun: [70, 98, 63],
  Malika: [52, 56, 60],
};
const queryName = "Malika";
findingPercentage(n, studentData, queryName);
