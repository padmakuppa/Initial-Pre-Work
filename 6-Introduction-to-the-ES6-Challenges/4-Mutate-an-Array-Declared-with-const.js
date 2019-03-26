//I learned that the objects (including arrays and functions) assigned to a variable using CONST are still mutable. It only prevents the reassignment of the variable identifier.
const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line

  // s = [2, 5, 7]; <- this is invalid
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  // change code above this line
}
editInPlace();
