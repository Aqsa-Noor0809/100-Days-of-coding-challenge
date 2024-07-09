/*Question 15: Changing Guest List: One of your guests can't make it to the dinner,
 so you need to send out a new set of invitations with a replacement guest.
*/

// Answer:

// 1) my way:
let rInvit: string[] = ["M.Mansha","Shameem","Me"];
rInvit.forEach(rguest => {console.log(`Assalam-o-alaikum ${rguest}! \n You're invited today for the dinner by me.`)});
// I coldn't understand that so the program is not according to the requiremant!

// 2) sir's way:
let nG: string = "Siblings";
rInvit[rInvit.indexOf("Me")] = nG;

rInvit.forEach(ngl => {console.log(`${ngl}! \n\t You're invited!`)});