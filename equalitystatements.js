function testequal(val) {
    if(val==123){
        return "equal";
    }
    return "not equal";
}
console.log(testequal(123));
/*SO SOMETIMES WHAT HAPPENS JAVASCRIPT COMPARES NUMBERS EVEN IFF THEY ARE IN A STRING OR A CHARACTER FORMAT
FOR EX. 5=='5' WILL BE TREATED AS TRUE BECAUSE THE DOUBLE EQUALS OPERATOR COMPARES THE CONTENS NOT THE EXACT DATA TYPES
IF YPU WANT TOT COMPARE THE EXCT DATA TYPES YOU HAVE TO USE === OPERATOR 
=== OPERATOR SPECIFIES EVEN THE DATA TYPE*/
var a=123;
if(a===123){
    console.log("same");
}
//similiarily for not equal operator it uses "!=" for checking the condition but it also has same problem, as above it needs to specify the data types also so it needs "!==" operator to specify the conditions.
var b=12;
if(b!==123){
    console.log("not same");
}
// the function below tells us about the greater than and equals and smaller than and euals etc functions.
function testGreaterThan (val) {
    if (val > 100) {
    return "Over 100";
    if (val > 10) { 
    }
    return "Over 10";
    return "10 or Under";
    }console.log(testGreaterThan(10));
}