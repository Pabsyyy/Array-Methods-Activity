// 1. concat()
namesGroup1 = ["Alice", "Bob"];
namesGroup2 = ["Charlie", "David", "Eva"];
let combinedNames = namesGroup1.concat(namesGroup2);
console.log(combinedNames.join(", ")); 
// push()
vegetables = ["Carrot", "Potato", "Tomato", "Cucumber"];
vegetables.push("Lettuce");
console.log(vegetables.join(", ")); 

// unshift()
numbersArray1 = [10, 20, 30];
numbersArray1.unshift(40, 50);
console.log(numbersArray1.join(", ")); 

// pop()
vegetables = ["Carrot", "Potato", "Tomato", "Cucumber"];
vegetables.pop();
console.log(vegetables.join(", ")); 

// shift()
numbersArray2 = [10, 20, 30];
numbersArray2.shift();
console.log(numbersArray2.join(", ")); 

// sort()
vegetables = ["Carrot", "Potato", "Tomato", "Cucumber"];
vegetables.sort();
console.log(vegetables.join(", ")); 

// slice()
slicedVegetables = ["Carrot", "Potato", "Tomato", "Cucumber"];
let slicedResult = slicedVegetables.slice(1, 3);
console.log(slicedResult.join(", ")); 

// splice
seasonsArray = ["Winter", "Spring", "Summer", "Fall"];
seasonsArray.splice(0, 2);
console.log(seasonsArray.join(", ")); 
seasonsArray.splice(0, 2, "Winter");
console.log(seasonsArray.join(", ")); 
seasonsArray.splice(2, 1, "Autumn");  
console.log(seasonsArray.join(", ")); 