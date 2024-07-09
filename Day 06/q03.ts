/*Question 18: Seeing the World: Think of at least five places you’d like to visit.
*/

// Answer :

//  1) I didn't get the question so I couldn't try anything:

let places: string[] = ["Makkah","Madina","Pakistan","Turkey","Russia"];

//  2) sir's way:
console.log("Original list:", places);
// Alphabeticaly list
console.log("Alphabetic Order:",[...places].sort());
// reverse alphabetic order:
console.log("R.A.Order:",[...places].sort().reverse());
// reverse list:
console.log("reverse list",[...places].reverse());

/* # here's a point that "[...arrayName]" makes a copy of array and does changings to that.
 but if you dont use "[...arrayName].method" method and run the method like:
"arrayName.method"
then these all methods will be applied to the real array.*/