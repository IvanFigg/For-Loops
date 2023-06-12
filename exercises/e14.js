
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  let depositsArray = [];
  let withdrawalArray = [];
  let checkArray = [];

  for (let user of array) {
    let sum = 0;
    let mon = 0;
    for (let i in user.deposits) {
      mon += user.deposits[i];
    } 
    for (let x in user.withdrawals) {
      sum += user.withdrawals[x];
    }
  withdrawalArray.push(sum);
  depositsArray.push(mon);
    if (mon - sum !== user.balance) {
      checkArray.push(user);
    }
  }
  return checkArray;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
