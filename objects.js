var dog ={
    "name":"peter",
     "type":"german shepherd",
     "legs":"three",
     12:"woof "

};
var name=dog.name;
var legs=dog["legs"];
var bark=12
var sound=dog[bark];
dog.legs=4;
dog.color="blue"
// you can also delete the property using "delete" keyword
// prevent object mutation
function freezeObj () {
    const MATH_CONSTANTS = {
    PI: 3.14
    };
    Object.freeze(MATH_CONSTANTS);
    try {
    MATH_CONSTANTS.PI = 99;
    } catch(ex) {
    console.log(ex);
    }
    return MATH_CONSTANTS.PI;
     }
    const PI=freezeObj();