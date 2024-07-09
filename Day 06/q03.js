/*Question 18: Seeing the World: Think of at least five places you’d like to visit.
*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Answer :
//  1) I didn't get the question so I couldn't try anything:
var places = ["Makkah", "Madina", "Pakistan", "Turkey", "Russia"];
//  2) sir's way:
console.log("Original list:", places);
// Alphabeticaly list
console.log("Alphabetic Order:", __spreadArray([], places, true).sort());
// reverse alphabetic order:
console.log("R.A.Order:", __spreadArray([], places, true).sort().reverse());
// reverse list:
console.log("reverse list", __spreadArray([], places, true).reverse());
/* # here's a point that "[...arrayName]" makes a copy of array and does changings to that.
 but if you dont use "[...arrayName].method" method and run the method like:
"arrayName.method"
then these all methods will be applied to the real array.*/ 
