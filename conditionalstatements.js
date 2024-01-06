function tf(isittrue) {
    if(isittrue){
        return "YES!"

    }
    return "NO!"

}
// the below is how we use logical if else statements.
function orderMyLogic(val) {
    if (val < 5) {
    return "Less than 5";
    } else if (val10) {
    return "Less than 10";
    } else {
    return "Greater than or equal to 10";
    }
    }console.log(orderMyLogic(3));
    // here is the if else ladder
    function testSize(num) {
        if (num < 5) {
        return "Tiny"
        } else if (num < 10) {
        return "Small"
        } else if (num < 15) {
        return "Medium"
        } else if (num < 20) {
        return "Large"
        } else {
            return "huge";
        }
    }
    console.log(testSize(7));
    // while loops
    var myarray=[]
    var i=0;
    while(i<5){
        myarray.push(i);
        i++;

    }
    console.log(myarray);
    // for loops
    var a=[]
    for(var i=0;i<a.length;i++){
        a.push(i);
    }
    console.log(a);
    // do while
    var ar=[]
    var num=1;
    do{
        ar.push(num);
        num++;
    }while(num<4);

