// challenge link:
// https://www.hackerrank.com/challenges/calendar-module/problem

/*
solution:
split date by space
create variables for month, day, and year
create a Date object
create an array to store all the days of the week
Get the day of the week from days of week array using the date object
Return day name
*/

function calendarModule(date) {
  const [month, day, year] = date.split(" ");
  date = new Date(year, month - 1, day);

  const daysOfWeek = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ];
  const dayName = daysOfWeek[date.getDay()];
  return dayName;
}

// example usage
console.log(calendarModule("08 05 2015"));
