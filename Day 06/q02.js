/*Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time,
 and you can only invite two guests.
*/
// Answer:
// 1) my way:
var invit = ["my parents", "my siblings", "my friends", "my mates"];
var sArray = invit.slice(0, 2);
sArray.forEach(function (guest) { console.log("".concat(guest, " , would you like to join us today?")); });
// 2) sir's way:
while (invit.length > 2) {
    var rMember = invit.pop();
    console.log("Sorry ".concat(rMember, ", You can't be invited today."));
}
;
invit.forEach(function (nGL) { console.log("".concat(nGL, " you may come.")); });
// invit.splice(0,invit.length);
// console.log(invit);// shows empty array.
