// EXERCISE 4
// Return the MIN and the MAX value in the given array of numbers
// findMinValueInArray([2, 45, 32, 3, 0, 46, 12]) => 0
// findMaxValueInArray([2, 45, 32, 3, 0, 46, 12]) => 46

export function findMinValueInArray(array) {
  // Your code goes here...
  const arrayVals = [];
  const array1 = Math.min(...array);
  for (let i = 0; i < array.length; i++) {
    arrayVals.push(array[i]);
  }

  return array1;
}


export function findMaxValueInArray(array) {
  // Your code goes here...
  const arrayValues = [];
  const maxVal = Math.max(...array);
  for (let i = 0; i < array.length; i++) {
    arrayValues.push(array[i]);
  }
  return maxVal;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-4"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
