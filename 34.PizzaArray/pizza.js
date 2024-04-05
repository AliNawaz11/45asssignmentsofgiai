/* Pizzas:Think of at least three kind of your favorite pizza.
Store these pizza names in an array, and then use a for loop to print the names of each pizza
Modify your for loop to print a sentence using the names of pizza intead of printingjust the name of the pizza. For
each pizza you should have one line of output containing a simple statement like I like vegeterian pzza.
Add a line at the end of your program, outside the for loop, that states how*/
var pizzas = ["Meat Pizza", "Vegetarian Pizza", "Simple Pizza"];
// Prin tonly names of array..
for (var i = 0; i < pizzas.length; i++) {
    console.log(pizzas[i]);
}
for (var i = 0; i < pizzas.length; i++) {
    console.log("I like to eat ".concat(pizzas[i]));
}
console.log("\n really like to eat pizza . Pizza comes in varities of flavors and tooping, allowing individuals to customize it to their liking.");
