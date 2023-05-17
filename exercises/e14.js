
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  const depArray = [];
  const withArray = [];
  const balArray = [];
  const accArray = [];
  for (let i = 0; i < array.length; i++) {
    let sum = 0;
    let mon = 0
    if (!array[i].deposits || !array[i].withdrawals || !array[i].balance) {
      array[i].deposits = [0];
      array[i].withdrawals = [0];
      array[i].balance = array[i].deposits - array[i].withdrawals;
    } balArray.push(array[i].balance);
    for (let x = 0; x < array[i].deposits.length; x++) {
      sum += array[i].deposits[x];
    } depArray.push(sum);
    for (let x = 0; x < array[i].withdrawals.length; x++) {
      mon += array[i].withdrawals[x];
    } withArray.push(mon);
    if (depArray[i] - withArray[i] !== balArray[i]) {
      accArray.push(array[i]);
    }
  } return accArray;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
