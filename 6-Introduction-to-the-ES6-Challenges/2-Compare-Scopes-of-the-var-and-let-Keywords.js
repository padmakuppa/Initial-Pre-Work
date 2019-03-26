//I learned that VAR keyword updates variable globally where, LET keyword’s scope is limited to that block, statement or expression.
function checkScope() {
"use strict";
  let i = "function scope";
  if (true) {
   let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
