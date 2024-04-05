var car = "BMW";
console.log("Is `car==BMW`? I predict true.");
console.log(car == "BMW"); //True
// Test 2: Strict equality comparison (True)
console.log("Is `car===BMW`? I predict true.");
console.log(car == "BMW"); //True
// Test 3: Inequality comparison (False)
console.log("Is `car!=BMW`? I predict False.");
console.log(car !== "BMW"); //False
// Test 4: Inequality comparison (False)
console.log("Is `car!==BMW`? I predict False.");
console.log(car !== "BMW"); //False
// Test 5: less than comparison (False)
console.log("Is `car<BMW`? I predict False.");
console.log(car < "BMW"); //False
// Test 6: greater than comparison (False)
console.log("Is `car>BMW`? I predict False.");
console.log(car > "BMW"); //False
// Test 7: less   than or equal to comparison (False)
console.log("Is `car<=BMW`? I predict False.");
console.log(car <= "BMW"); //False
// Test 8: checking truthiness(True)
console.log("Is `car?`? I predict False.");
console.log(car); //True(non empty string is truthy) 
// Test 10: Checking failness (False)
console.log("Is `!car?`? I predict False.");
console.log(!car); //False(negation of atruthy value)
