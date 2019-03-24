//I learned about the comparison operator(===). The strict equality operator compares only common type values. Unlike the equality operator, it will not perform type conversion.
// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(10);
