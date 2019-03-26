//I learned about ES6 LET keyword and unlike VAR, when using LET a variable with the same name can only be declared once.
let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
