/*Question 12: Greetings: Use the array from Exercise 11.
 Instead of just printing each person’s name, print a message to them.
 The message should be the same for each person, but personalized with their name.
*/

// Answer:

// 1)my way:
let names: string[] = ["Musfirah","Hafsa","Biya"];
console.log(`Hey there ${names[0]}, How's your coding going on?`);

// 2) sir's way:
for(let name of names){
    console.log(`Hello ${name}, Would you like to learn some typescript today?`);
};