/*Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.*/

// Answer:

//  1) my way:
let nG: string[] = ["Musfirah","Hafsa","Biya"];
nG.unshift("Mrs & Mr Mansha");
nG.splice(3,0,"Me");
nG.push("M.Abdullah");
nG.push("Mr.Khalil")
nG.forEach(nGI => {console.log(`\n Assalam-o-alaikum ${nGI}! \n\t Would you please join us on saturday (july-13) for the birthday party of ${nG[2]}.`)});

// both methods are same!!