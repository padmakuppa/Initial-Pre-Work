//I learned how to iterate through an array using a FOR loop, and added the values of each element of the [myArr] array to the [total].
// Example
var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}

// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line
var total = 0;
for (i = 0; i < myArr.length; i++) {
   total = total + myArr[i];
}
