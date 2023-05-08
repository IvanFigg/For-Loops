
// EXERCISE 5
// Return an array of all bank account holders names
// Array example: bankAccounts in /data/data.js
// getAllClientNames(bankAccounts) => ['Kevin', 'Spenser']

export function getAllClientNames(array) {
  // Your code goes here...
  const array1 = [];
  const arrayValues = array;
  for (let i = 0; i < array.length; i++) {
    array1.push(array[i]);
  }

  const array2 = [];
  const arrayName = array2;

  for (let i = 0; i < array1.length; i++) {
    array2.push(array1[i].name);
  }
  return array1 && arrayName;

}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-5"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
