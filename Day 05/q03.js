/*Question 15: Changing Guest List: One of your guests can't make it to the dinner,
 so you need to send out a new set of invitations with a replacement guest.
*/
// Answer:
// 1) my way:
var rInvit = ["M.Mansha", "Shameem", "Me"];
rInvit.forEach(function (rguest) { console.log("Assalam-o-alaikum ".concat(rguest, "! \n You're invited today for the dinner by me.")); });
// I coldn't understand that so the program is not according to the requiremant!
// 2) sir's way:
var nG = "Siblings";
rInvit[rInvit.indexOf("Me")] = nG;
rInvit.forEach(function (ngl) { console.log("".concat(ngl, "! \n\t You're invited!")); });
