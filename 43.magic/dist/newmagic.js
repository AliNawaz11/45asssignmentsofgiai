"use strict";
// Great Magicians: Start with acopy of your program from Exercise 39. Write a functon called make_great()
//that modifies the array of magicians by sdding the phrase the great to each magician's name. Call show_magicians() to see that the list has actually been modifies.
let magician = [`John`, `Dow`, `Doe`, `Harry`, `Lyon`];
function copyArray(arr) {
    return [...arr];
}
function make_great(magicianArray) {
    for (let i = 0; 1 < magicianArray.length; i++) {
        magician[i] = `the great` + magicianArray[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
const copyMagicanArray = copyArray(magician);
make_great(copyMagicanArray);
console.log(`\n\nThis is my original array:`);
console.log(`\n\nThis is my modified copy of the array:`);
show_magicians(copyMagicanArray);
