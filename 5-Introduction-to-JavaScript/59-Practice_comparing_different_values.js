//I have learned that the "typeof" operator will determine the type of a variable or a value, and used strict equality operator to compare the values in a function.
// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
compareEquality(10, "10");
