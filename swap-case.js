// challenge link
// https://www.hackerrank.com/challenges/swap-case/problem?isFullScreen=true

/*
solution:
split the string into an array of strings
create a variable iterate through the array
 use a regex to check if char is upper case char, if match convert it lower case
 else if char is lower case, convert it to upper case
return the swapped case array and covert it to a string 
*/

function swapCase(s) {
  const convertCase = s.split("").map((char) => {
    if (/[A-Z]/.test(char)) {
      char = char.toLowerCase();
    } else if (/[a-z]/.test(char)) {
      char = char.toUpperCase();
    }
    return char;
  });
  return convertCase.join("");
}

// example usage 
console.log(swapCase('HackerRank.com presents "Pythonist 2".'));
