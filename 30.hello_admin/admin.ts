// Hello,admin make an array of five or more username.
// including the name admin.Imagine you are writing code.
// that will printing greetings to each username after they log in to a website.
//Loop through the array ,and print a greetings to each user.
// If the username is admin ,print a special greeting, such as hell admin.
// Would you like to see status report?
// Otherwise,print a generic greetings,such as Heloo Eric,, thank you for .
// logging in again.

let users:string[]=[`Ali`,'Asad',  `Aneel`,`Aneela`,`Ambreeen`,`Admin`];

for(let user of users)
{
    if(user=="Admin")
    {

console.log("Heloo,Admin  Would you like to see status report?");

    }
    else
    {
console.log(`Hello ${user} thank you for logging in again.`);
    }


}