function x() {
 y = 1;     // (Throws a ReferenceError in strict mode.)
 var z = 2;
}
x();
console.log(y);    // Alerts "1". 
console.log(z);    // Throw