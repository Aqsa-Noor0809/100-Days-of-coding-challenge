/*Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time,
 and you can only invite two guests.
*/

// Answer:

// 1) my way:
let invit: string[] = ["my parents","my siblings","my friends","my mates"];
let sArray = invit.slice(0,2);
sArray.forEach(guest => {console.log(`${guest} , would you like to join us today?`)});

// 2) sir's way:
while(invit.length > 2){
   let rMember = invit.pop()
    console.log(`Sorry ${rMember}, You can't be invited today.`)};

    invit.forEach(nGL => {console.log(`${nGL} you may come.`)});

    invit.splice(0,invit.length);
    console.log(invit); // shows empty array.