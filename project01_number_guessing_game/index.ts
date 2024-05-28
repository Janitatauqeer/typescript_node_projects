#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

//Priniting a welcome message:
console.log("\t","=".repeat(75));
console.log("\t",chalk.bold.magenta("<".repeat(10),"Welcome to Janita_tauqeer - CLI Number Guessing Game",">".repeat(10)));
console.log("\t","=".repeat(75));

const randomNumber = Math.floor(Math.random() * 10 + 1);

const answers = await inquirer.prompt([
  {
    name: "userGuessingNumber",
    type: "number",
    message : chalk.cyan("\nEnter your guess number (Number limit from 1 to 10):"),
  },
]);

if (answers.userGuessingNumber === randomNumber) {
  console.log(chalk.bgBlue("\n\tCongratulations! You guess a correct number."));
} else {
  console.log(chalk.bgRed("\n\tSorry, you guess a wrong number."));
}