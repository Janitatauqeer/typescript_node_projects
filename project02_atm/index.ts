#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

//Printing a welcome message;
console.log("\t","=".repeat(70));
console.log("\t",chalk.bold.magenta("<".repeat(15),"Welcome_To_Janitatauqeer_ATM_Machine!",">".repeat(15)))
console.log("\t","=".repeat(70));

//Intialize user balance and pin code
let myBalance = 10000;
let myPin = 1550;

//Prompt user for pin code
let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    type: "number",
    message: chalk.cyan("Enter your pin code:"),
  },
]);
if (pinAnswer.pin === myPin) {
  console.log(chalk.bgGreen("\t\nPin is correct, Login Successfully!\n"));
  // console.log(`Current Account Balance ${myBalance}`)

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      type: "list",
      message: "Select an operation:",
      choices: ["Withdraw Amount", "Check Balance"],
    },
  ]);

  if (operationAns.operation === "Withdraw Amount") {
    let withdrawAns = await inquirer.prompt([
      {
        name: "withdrawMethod",
        type: "list",
        message: "Select a withdrawal method:",
        choices: ["Fast Cash", "Enter Amount"],
      },
    ]);
    if (withdrawAns.withdrawMethod === "Fast Cash") {
      let fastCashAns = await inquirer.prompt([
        {
          name: "fastCash",
          type: "list",
          message: "Select Amount:",
          choices: [1000, 2000, 3000, 5000, 10000, 20000],
        },
      ]);
      if (fastCashAns.fastCash > myBalance) {
        console.log(chalk.bgRed("\t\nInsufficient Balance\n"));
      } else {
        myBalance -= fastCashAns.fastCash;
        console.log(`${fastCashAns.fastCash} Withdraw Successfully`);
        console.log(
          chalk.bgBlueBright(`\t\nYour Remaining Balance is: "${myBalance}"\n`)
        );
      }
    } else if (withdrawAns.withdrawMethod === "Enter Amount") {
      let amountAns = await inquirer.prompt([
        {
          name: "amount",
          type: "number",
          message: "Enter the amount to withdraw:",
        },
      ]);
      if (amountAns.amount > myBalance) {
        console.log(chalk.bgRed("\n\tInsufficient Balance\n"));
      } else {
        myBalance -= amountAns.amount;
        console.log(`"${amountAns.amount}" Withdraw Successfully`);
        console.log(
          chalk.bgBlueBright(`\t\nYour Remaining Balance is: "${myBalance}"\n`)
        );
      }
    }
  } else if (operationAns.operation === "Check Balance") {
    console.log(
      chalk.bgBlueBright(`\t\nYour Account Balance is: "${myBalance}"\n`)
    );
  }
} else {
  console.log(chalk.bgRed("\nPin is Incorrect , Try Again!\n"));
}