/*Question 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
 and make a list that stores several examples.
 Use your list to print a series of statements about these items,
 such as “I would like to own a Honda motorcycle.”
*/

// Answer:

// 1) my way:
let fVehicle: string[] = ["Toyota Landcruiser","Nissan GTR",];
for (let vehicle of fVehicle){console.log(`Did you know that I LOVE ${vehicle}.`)};

// 2) sir's way:
fVehicle.forEach(vehicle => {console.log(`I Love ${vehicle}.`)});