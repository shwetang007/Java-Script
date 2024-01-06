var contacts = [
{
"firstName": "Akira",
"LastName": "Laine",
"number": "0543236543",
"likes": ["Pizza", "Coding", "Brownie Points"]
},
{"firstName": "Harry",
"LastName": "Potter",
"number": "0994372684",
"Likes": ["Hogwarts", "Magic", "Hagrid"]
},
{"firstliame": "Sherlock", 
"LastName": "Holmes",
"number": "0487345643",
"likes": ["Intriguing Cases", "Violin"]
},
{
"LastName": "Vos",
"number": "unknown",
"firstName":"Kristian",
"lastname":"vos",
"number":"88e734338873",
"likes":["javascript","gaming","tigers"]
}
];
function lookUpProfile(name, prop) {
    for (var i = 0; i < contacts.length; i++) { if(contacts[1].firstName === name) {
   return contacts[1] [prop] || "No such property";
   }
   } return "No such contact";
   }
    var data =lookUpProfile("Shinlock", "likes");
    console.log(data);