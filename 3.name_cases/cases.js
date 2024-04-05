"use strict";
let names = "ALI Nawaz"; //convert into lowercase
console.log("Lower case:  " + names.toLocaleLowerCase());
console.log("Upper case:  " + names.toUpperCase()); // convert into uppercase
console.log("Title case:  " + names.replace(/\bw/g, c => c.toUpperCase())); //convert into title case 
