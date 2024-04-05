// Animals: Think of at least three different animals that have a common characteristics.Store
// the names of these animals in a list, and then use a for loop to print out the name of each animal.
//.Modify your program to print a statement about each animal, such as A dog would make a great pet.
// Add a line at the end of your program atarting what these anmals have in common.

import { log } from "console";

// You could print a statement such as Any of these animals would make a gret pet!.
let Animals:string[]=[`dog`,'cat',`rabbit`];
for (let Animal of Animals)
{
    console.log(`A ${Animal} would you like a great pet.`);


}
console.log(`Any of these animals would make a great pet.`);