/**
 * NumberPair
 *
 * This object is responsible for storing a pair of numbers that adds up to 10.
 */
class NumberPair {
	/**
	 * NumberPair CONSTRUCTOR
	 * -
	 * The constructorefor NumberPair will accept two values: The first nubmer
	 * of the pair and the second number of the pair. These parameterized values will
	 * be assigned to the NumberPair object being contructed.
	 *
	 * @param firstNumber - The first number to assign to the pair
	 * param secondNumber - The second number to assign to the pair
	 */
	constructor(firstNumber, secondNumber) {
		/**
		 * The following condition checks are for error checking to make sure the
		 * values parameterized values are valid. The conditions are as follows:
		 *
		 * - The values must be numbers
		 * - The values must add up to 10
		 */

		try {
			this.validate(firstNumber, secondNumber);
			this[0] = parseFloat(firstNumber);
			this[1] = parseFloat(secondNumber);
		} catch(e) {
			console.error(`Something went wrong: ${e}`);
			throw e;
		}
	}

	validate(firstNumber, secondNumber) {
		if(isNaN(parseFloat(firstNumber)) || isNaN(parseFloat(secondNumber))) throw "Parameterized values are not valid numbers.";
		if(parseFloat(firstNumber) + parseFloat(secondNumber) !== 10) throw "Parameterized values does not add up to 10.";
	}

	toString() {
		return `(${parseFloat(this[0])}, ${parseFloat(this[1])})`
	}
}

module.exports = NumberPair;
