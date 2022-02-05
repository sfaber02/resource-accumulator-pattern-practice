/**
 * Add all numbers in the array together to produce a single number.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {number} - The sum of all numbers in the array.
 */
function addAllNumbers(values) {
  //i swear I can do this without .reduce()
  return values.length > 0 ? values.reduce((a, b) => a + b) : 0;
}

/**
 * Multiply each number in the array by 2 and return a new array with the doubled values.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {number[]} - An array of whole numbers.
 */
function doubleAllNumbers(values) {
  let doubleArray = [];
  for (let value of values){
    doubleArray.push(value * 2);
  }
  return doubleArray;
}

/**
 * Return an array of only the even numbers in the inputted array.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {number[]} - An array of only even numbers.
 */
function getAllEvenNumbers(values) {
  let evenArray = [];
  for(let value of values){
    if(value % 2 == 0) evenArray.push(value);
  }
  return evenArray;

}

/**
 * Return the number given if it is in the array. Otherwise, return `null`.
 *
 * @param {number[]} values - An array of whole numbers.
 * @param {number} val - A specific value to find.
 * @returns {number|null} - The found number or `null`.
 */
function findNumberByValue(values, val) {
  return values.includes(val) ? val : null;
}

/**
 * Return `true` if all numbers in the array are negative. Otherwise, return `false`. Ignore `0` in determining whether or not an array includes all negative numbers.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {boolean} - Whether or not all numbers in the array are negative.
 */
function allNumbersAreNegative(values) {
  if (values.length < 1) return false;
  for(let num of values){
    if(num > 0) return false;
  }
  return true;
}
/**
 * Return the largest number in the array. If the array is empty, return `null`.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {number} - The largest number in the array.
 */
function getLargestNumber(values) {
  return values.length < 1 ? null : values.sort((a, b) => b - a)[0];
}

module.exports = {
  addAllNumbers,
  doubleAllNumbers,
  getAllEvenNumbers,
  findNumberByValue,
  allNumbersAreNegative,
  getLargestNumber,
};
