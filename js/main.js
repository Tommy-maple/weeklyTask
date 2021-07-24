const array = [2, 3, 7, 5, 4, 3, 8];
const results = array.filter(function (item,i) {
  return array.indexOf(item) === item;
});

console.log(results);

function leapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    return console.log("うるう年");
  } else {
    return console.log("うるう年ではない");
  }
};

leapYear(2020);
leapYear(2021);