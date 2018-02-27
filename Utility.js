const NumberPair = require("./NumberPair");

class Utility {
	constructor() {
		this.numberList = [];
		this.numberPairs = [];
	}

	/**
	 * A function that takes a list of numbers, as per requirement. This will set
	 * the state of the class to have a list of pair of numbers that adds up to 10.
	 *
	 * @param nubmerList - A list containing a list of numbers
	 */
	setNumberPairs(numberList) {
		/**
		 * The following conditional checks are light validation to make sure that the
		 * parameterized values are valid to process. The condition are as follows:
		 *
		 * - The value must be an array
		 */
		if(typeof numberList !== "object") throw "Parameterized value is not valid.";
		numberList = numberList.map(value => Number(value));

		const numberPairs = [];
		const usedIndeces = [];
		numberList.forEach((leftValue, outerIndex) => {
			numberList.some((rightValue, innerIndex) => {
				if(usedIndeces.indexOf(outerIndex) === -1 && innerIndex !== outerIndex && (leftValue + rightValue) === 10) {
					numberPairs.push(new NumberPair(leftValue, rightValue));
					usedIndeces.push(outerIndex);
					usedIndeces.push(innerIndex);
					return true;
				}
			});
		});

		this.numberPairs = numberPairs;
		this.numberList = numberList;
	}

	/**
	 * Used for getting NumberPair objects whose values adds up to 10.
	 *
	 * return numberParis - An array of NumberPair objects
	 */
	getNumberPairs() {
		if(this.numberPairs === []) throw "Please set Number Pairs first before attempting to get them."
		return this.numberPairs;
	}

	/**
	 * A function that prints out the values of the Number Pair object with formatting.
	 *
	 * @return toReturn - A String object that has the formatted values.
	 */
	getNumberPairsString() {
		if(this.numberPairs === []) throw "Please set Number Pairs first before attempting to get them.";

		let toReturn = "";
		this.numberPairs.forEach((value, index) => {
			toReturn += `(${value[0]}, ${value[1]})`;
			if(index < this.numberPairs.length - 1) toReturn += ", ";
		});

		return toReturn;
	}
}

module.exports = Utility;
