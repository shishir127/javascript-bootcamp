function x() {
 y = 1;     // (Throws a ReferenceError in strict mode.)
 var z = 2;
}        
x();
var y = 5;
console.log(y);    // Alerts "5".