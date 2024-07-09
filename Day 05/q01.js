/*Question 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
 and make a list that stores several examples.
 Use your list to print a series of statements about these items,
 such as “I would like to own a Honda motorcycle.”
*/
// Answer:
// 1) my way:
var fVehicle = ["Toyota Landcruiser", "Nissan GTR",];
for (var _i = 0, fVehicle_1 = fVehicle; _i < fVehicle_1.length; _i++) {
    var vehicle = fVehicle_1[_i];
    console.log("Did you know that I LOVE ".concat(vehicle, "."));
}
;
// 2) sir's way:
fVehicle.forEach(function (vehicle) { console.log("I Love ".concat(vehicle, ".")); });
