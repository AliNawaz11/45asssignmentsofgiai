// seeing the world: think of at least five places in the world you'd like to visit:....
// Store the location in an arary Make sure the an array are not in the alphabetical order.......
// Print yor an array in original order.......

let places:string[]=["Karachi","Hyderabad","Sukkur","Lahore","Islamabad"];
console.log("Original "+places);
// Print your array in orginal in alphabetical order without modifying the actual list.......
console.log(`copy`+[...places].sort());
// Show that your list is still in its original order by printing it....
console.log(`original :`+places);
// Print your array in reverse alphatbetical order without changing th eorder of the original list......
console.log(`copy `+[...places].sort().reverse());
// Show that your list is still in its original order by printing it again...

console.log(`copy `+[...places].sort().reverse());
// Reverse the order of your list .Print the array to show that its order has changed........
console.log(`original `+places.sort());

// Reerse the order of your list. Print the list to show its backto its original order

console.log(`original `+places.sort().reverse());
