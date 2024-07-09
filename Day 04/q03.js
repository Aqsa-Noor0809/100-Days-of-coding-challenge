/*Question 12: Greetings: Use the array from Exercise 11.
 Instead of just printing each person’s name, print a message to them.
 The message should be the same for each person, but personalized with their name.
*/
// Answer:
// 1)my way:
var names = ["Musfirah", "Hafsa", "Biya"];
console.log("Hey there ".concat(names[0], ", How's your coding going on?"));
// 2) sir's way:
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log("Hello ".concat(name_1, ", Would you like to learn some typescript today?"));
}
;
