// Hello,admin make an array of five or more username.
// including the name admin.Imagine you are writing code.
// that will printing greetings to each username after they log in to a website.
//Loop through the array ,and print a greetings to each user.
// If the username is admin ,print a special greeting, such as hell admin.
// Would you like to see status report?
// Otherwise,print a generic greetings,such as Heloo Eric,, thank you for .
// logging in again.
var users = ["Ali", 'Asad', "Aneel", "Aneela", "Ambreeen", "Admin"];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    if (user == "Admin") {
        console.log("Heloo,Admin  Would you like to see status report?");
    }
    else {
        console.log("Hello ".concat(user, " thank you for logging in again."));
    }
}
