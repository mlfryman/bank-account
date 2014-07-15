// In Class Assignment - Bank Account

var prompt = require('sync-prompt').prompt;
var chalk = require('chalk');

var sBalance = 1000, balance = sBalance, amount = , deposits = [], withdrawals = [];
var option = prompt('Do you want to (w)ithdrawal, (d)eposit, or (q)uit?: ');

while(option != 'q'){
  amount = prompt('How much? $');
  amount = parseFloat(amount);

  if(option === 'd'){
    deposits.push(amount);
  }else{
    withdrawals.push(amount);
  }

  option = prompt('Do you want to (w)ithdrawal, (d)eposit, or (q)uit?: ');
}

var sumD = 0, sumW = 0, fee = 0;

for(var i = 0;i < deposits.length;i++){
  sumD += deposits[i];
}

for(var j = 0;j < withdrawals.length;j++){
  sumW += withdrawals[j];
}

balance += sumD - sumW;

if(balance < 0){
  fee = -50;
  balance += fee;
}

console.log('\nStarting balance: $' + chalk.green(sBalance.toFixed(2)));
console.log('Deposits: $' + chalk.green(sumD.toFixed(2)));
console.log('Withdrawals: -$' + chalk.red(sumW.toFixed(2)));
console.log('Overdraft fee: $' + fee.toFixed(2));
console.log('Current balance: $' + balance.toFixed(2) + '\n\n');
