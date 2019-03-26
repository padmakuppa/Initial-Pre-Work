//I learned about spread operator to evaluate arrays in places.
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1] // change this line
})();
console.log(arr2);
