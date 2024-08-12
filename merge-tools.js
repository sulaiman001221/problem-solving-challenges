// challenge link:
// https://www.hackerrank.com/challenges/merge-the-tools/problem?isFullScreen=true

/*
solution:
convert string to upper case
create substring length variable to divide string length by k
crate substring digit variable to divide string length by substring length
create a variable to split string by substring digit
iterate through the strings
  remove duplicates using a set
  convert a set to a string
  print the string
*/

function mergeTools(string, k) {
  string.toUpperCase();
  const subStringLength = string.length / k;
  const subStringDigit = string.length / subStringLength;
  const parts = string.match(new RegExp(`.{1,${subStringDigit}}`, "g"));

  parts.forEach((string) => {
    const uniqueChars = new Set(string);
    const covertToString = [...uniqueChars].join("");
    console.log(covertToString);
  });
}

// example usage
mergeTools("AABCAAADA", 3);
