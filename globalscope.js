var myGlobal = 10;
function fun1() {
oopsGlobal = 5;
}
function fun2() {
 var output = "";
if (typeof myGlobal != "undefined") { output += "myGlobal: " + myGlobal; 
}
 if (typeof oopsGlobal != "undefined") { output += " oopsGlobal: " + oopsGlobal;
 }
console.log(output);
}
fun1();
fun2();// scope refers to the visibility of functions
// the code above tells us the use as well as importance of the global declaration