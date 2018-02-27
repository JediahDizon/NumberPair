const Utility = require("./Utility");

let myUtility = null;
function initiateValues() {
	myUtility = new Utility();
}

function resetValues() {
	myUtility = null;
}

// TEST CASE 1 - Test data found on requirements Document
initiateValues();
myUtility.setNumberPairs([1, 8, 2, 3, 5, 7]);
console.log("Test Case 1: " + myUtility.getNumberPairsString());
resetValues();

// TEST CASE 2 - Every pair adds up to 10
initiateValues();
myUtility.setNumberPairs([9, 1, 10, 0, 11, -1, 100, -90]);
console.log("Test Case 2: " + myUtility.getNumberPairsString())
resetValues();

// TEST CASE 3 - No pair adds up to 10
initiateValues();
myUtility.setNumberPairs([10, 11, 12, 13, 14, 15]);
console.log("Test Case 3: " + myUtility.getNumberPairsString())
resetValues();

// TEST CASE 4 - Some pair  adds up to 10
initiateValues();
myUtility.setNumberPairs([9, 1, 10, 0, 13, 20, 12]);
console.log("Test Case 4: " + myUtility.getNumberPairsString())
resetValues();


// TEST CASE 5 - Random Numbers
initiateValues();
const randomNumbers = [];
for(var i = 0; i < 10; i++) {
	randomNumbers.push(parseInt(Math.random() * 10))
}
myUtility.setNumberPairs(randomNumbers);
console.log("Test Case 5: " + "List: " + randomNumbers, "\nPairs: " + myUtility.getNumberPairsString());
resetValues();
