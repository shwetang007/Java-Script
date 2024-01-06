function caseinswitch(val) {
    var answer;
    switch(val) {
    case 1:
    answer= "alpha";
    break;
    case 2:
    answer ="beta";
    break;
    case 3:
    answer ="beta";
    break;
    case 4:
    answer ="beta";
    break;
    default:
        answer="null";
    }
    return answer;}
    console.log(caseinswitch(3));
    //here is how you chainswitch satements
    function chainToSwitch(val) {
        var answer = "";
        switch(val) {
        case "bob":
        answer = "Marley";
        break;
        case 42:
        answer = "The Answer";
        break;
        case 1:
        answer = "There is no #1";
        break;
        case 99:
        answer = "Missed me by thismuch!";
        break;
        }
    }
    //  here is the count cards ecercise
    var count = 0;
 function cc(card) {
switch(card) {
case 2:
case 3:
case 4:
case 5:
case 6:
count++;
break;
case 10:
case "J":
case "K":
case "A":
count--;
break;
}
var holdbet='hold'
if(count>0){
holdbet='Bet'}
return count+""+holdbet;}
cc(2); cc('K');cc(10);cc('A');cc(6);
console.log(cc(4))
// phonetic lookup
function phoneticLookup(val) {
    var result ="";
    var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "frank"
    };
    result = lookup [val];
    return result;
    }
    console.log(phoneticLookup("charlie"));