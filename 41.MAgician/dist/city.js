"use strict";
// Magicians: Make a array of magician's names. Pass the array to a function called.
// show_magicians(), which prints the names of each magician in the array.
let magician = [`Shakespear`, `John`, `Albert`, `Hudson`, `Thomson`];
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
show_magicians(magician);
