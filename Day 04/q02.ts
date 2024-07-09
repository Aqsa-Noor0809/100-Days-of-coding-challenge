/*Question 11: Names: Store the names of a few of your friends in an array called names. 
Print each person’s name by accessing each element in the list, one at a time.
*/

// Answer:

// 1) my way:
let names: string[] = ["Musfirah","Hafsa","Biya"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

// 2) sir's way:
for (let i = 0; i < names.length; i++){
    console.log(names[i]);
    };