// LET -- We cannot redeclare a variable declared with let, but we can reassign it.
let x = 10;
x = 20; // This is allowed
// let x = 30; // This will error:


// VAR -- We can redeclare and reassign a variable declared with var.
var z = 10;
z = 20; // This is allowed
var z = 30; // This is also allowed:

// CONST -- We cannot redeclare or reassign a variable declared with const.
const y = 10;
// y = 20; // This will error:
// const y = 30; // This will also error:

