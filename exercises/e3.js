
// EXERCISE 3
// Make sure to solve two parts beneath

/** 
 * PART 1
 * Return the average value for the given array of numbers.
 * Example: getAverage([22, 45, 4, 65]) => 34
 * */

export function getAverage(array) {
  // Your code goes here...
  const array1 = array;
  const array2 = [];
  const arrayAdded = array1[0] + array1[1] + array1[2] + array[3];
  const arrayLength = array.length;
  for (let i = 0; i < array.length; i++) {
    array2.push(array);
  if (i == array) {
  }
  break;
}
  return arrayAdded / arrayLength;
}


/** 
 * PART 2
 * Create a getStringSum(str) function that returns the sum of any integers that are in the string.
 * Example1: getStringSum("GH2U87A") => 17
 * Example2: getStringSum("GHIUJUHSG") => 0
 * */ 

export function getStringSum(str) {
  // Your code goes here...
  const values = [];
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    if (!isNaN(Number(str[i]))) {
      values.push(Number(str[i]));
    }
  }
  for (let i = 0; i < values.length; i++) {
    sum += values[i];
  }
  return sum;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-3"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
