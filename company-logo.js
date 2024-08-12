//challenge link:
//https://www.hackerrank.com/challenges/most-commons/problem?isFullScreen=true

/*
Solution:
Sort the string in alphabetical order
split the string into strings of similar characters
use a regExp to group similar
sort the string in descending order based on quantity
Slice the first 3 strings.
Iterate through the string to print the first char of str and its quantity
*/

function companyLogo(str) {
  const sortedStr = str.split("").sort().join("");
  const similarCharGroups = sortedStr.match(/(.)\1*/g);
  const strSortedByQuant = similarCharGroups.sort(
    (a, b) => b.length - a.length
  );
  const topThree = strSortedByQuant.slice(0, 3);
  topThree.forEach((element) => {
    console.log(`${element[0]} ${element.length}`);
  });
}

//example usage
console.log(companyLogo("google"));
