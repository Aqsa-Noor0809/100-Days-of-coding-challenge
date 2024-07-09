/*Ques:03; Stripping Names: Store a person’s name,
 and include some whitespace characters at the beginning and end of the name.
 Use "\t" (tab) and "\n" (new line) at least once.
 Print the name once,
 so the whitespace around the name is displayed.
 Then print the name after stripping the white spaces. */
//  1) my way:
// let personName: string = "\t\nAqsa\t\n";
// console.log(personName);  // I couldn't understand the question or didn't know!
// 2) string's way:
var mName = "\t\nAqsa\n\t";
// console.log(mName);
console.log(mName.trim());
