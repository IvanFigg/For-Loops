
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getAllDepositsGreaterThanOneHundred(array) {
  // Your code goes here...
  const array1 = [];
  const array2 = [];
  const array3 = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].deposits) {
    let sum = 0;
      for (let j = 0; j < array[i].deposits.length; j++) {
        sum += array[i].deposits[j];
      } 
        if (array[i].withdrawals) {
          let money = 0;
          for (let x = 0; x < array[i].withdrawals.length; x++) {
            money += array[i].withdrawals[x];
          } 
          array2.push(money);
        } 
        array1.push(sum);
      }
    } return array;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
