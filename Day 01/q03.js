"use strict";
/*
 Name Cases: Store a person’s name in a variable, and then print that person’s name in
 lowercase, uppercase, and titlecase.
*/
Object.defineProperty(exports, "__esModule", { value: true });
let myName = "Aqsa Noor";
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());
// 1) my way :
console.log(myName.replace(/\b\w/g, c => c.toUpperCase()));
// 2) sir's way:
console.log(myName.charAt(0).toUpperCase() + myName.slice(1).toLowerCase());
