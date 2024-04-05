"use strict";
// Checking usernames: Do the following to create a program that simulates how website.ensure that everyone has unique name.
// Make a list of five or more usernames of current users...
// Make another list of fivew usernames called new users Make sure one or two of the new usernames are also in the current users list.
// Loop through the new users list to see if each new username has alreadybeen used.if it has ,print a message that the person will to enter a new username .if username has not been used, print a message that saying that the is available.
// Make sure your comparison is case insensitive.if "Johan" has been used , "JOHN" should not be accepted..
Object.defineProperty(exports, "__esModule", { value: true });
let current_users = ["Ali,", "Aslam", "Aneela", "Bisma", "Kane"];
let new_users = ["Taha", "Asad", "Aleem", "Kane", "Aiza"];
new_users.forEach(newusername => {
    let lowercase = newusername.toLowerCase();
    if (current_users.map(c_user => c_user.toLowerCase().includes(lowercase))) {
        console.log(`The username  ${newusername} is not available please another username `);
    }
    else {
        console.log(`The username ${newusername} is available`);
    }
});
