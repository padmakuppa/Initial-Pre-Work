//I learned that using the 'logical-And (&&)' operator we can compare more than one thing at a time. It will return true only if the operands to the left and right of it are true.
function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {

      return "Yes";
    }

  // Only change code above this line
  return "No";
}

// Change this value to test
testLogicalAnd(10);
