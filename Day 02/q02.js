/*Ques:02 ;  Famous Quote 2: Repeat Exercise 1, but this time store the famous person’s name in a variable called famous_person.
Then compose your message and store it in a new variable called message.
 Print your message.*/
//  Answer;
// 1) my way;
var famousPerson = "Bilawal Butto";
var message = "When it rains water comes.";
console.log("\"Once ".concat(famousPerson, " said,\"").concat(message, "\"\""));
// 2) sir's way
var famous_person = "Somebody";
var mainMessage = "\"".concat(famous_person, " once said,\"Blah blah blah.\"\"");
console.log(mainMessage);
