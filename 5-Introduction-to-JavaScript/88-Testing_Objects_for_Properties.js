//I learned how to test if the property of a given object exists or not using the ‘.hasOwnProperty(propname)’ method.
// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
 if ((myObj.hasOwnProperty(checkProp)) == true) {
   return myObj[checkProp];
 } else {
   return "Not Found"
 }
  return "Change Me!";
}

// Test your code by modifying these values
checkObj("gift");
