var arr=["hello",1];// declaring an array
var nestarr=[["hell",1],["bell",3],["cell"],4];//nested array declaration
var decl=[1,2,3,4,5,5.7]
var num=decl[3];
console.log(num);// how to acess the array variable at the specific index
var ar=[1,3,5,7,9,6,7,8,4,9];
ar[5]=76;
console.log(ar);//  how to change the array value at specific index
var a=[[1,2,3],[1,4,6],[7,8,9]];
var data=a[2][1];
console.log(data);
// next we will learn how to use push statements in an array
var o=["hello",'j',1];
o.push(["hii",'k',2]);// pushes at the end
// pop()
var pop=[["johnny",23],["sam",6]];
var removed=pop.pop();
console.log(removed);
// shift()
var mya=[["hapop",2],["hwlo",4]];
var remved=mya.shift();
// unshift() will also remove the first element but it will also swap it with given string
// iterate though for loop
var arr1=[1,2,3,4,5,6,7,8,9]
var tot=0
for(var i=0;i<arr1.length;i++){
    tot+=i;
}
console.log(tot);
// using const keyword
const s=[1,2,3,4,5];
function editinplace(){
    "use strict";
    s[0]=3
    s[2]=9
}
editinplace();
console.log(s);
