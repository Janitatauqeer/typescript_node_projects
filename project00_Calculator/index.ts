#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

//Printing a welcome message;
console.log("=".repeat(65));
console.log(
  chalk.bold.magenta(
    "<".repeat(15),
    "Welcome_To_Janitatauqeer_Simple_Calculator",
    ">".repeat(15)
  )
);
console.log("=".repeat(65));

// Asking Questions From Users Through Iquirer

const answers = await inquirer.prompt([
  {
    message: chalk.cyanBright("Please Enter First Number"),
    type: "number",
    name: "firstNumber",
  },
  {
    message: chalk.cyanBright("Please Enter Seacond Number:"),
    type: "number",
    name: "secondNumber",
  },
  {
    message: chalk.cyanBright("Select one operator to perform Operations:"),
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

//Conditional statements if-else;

if (answers.operator === "Addition") {
  console.log(chalk.bgBlue(answers.firstNumber + answers.secondNumber));
} else if (answers.operator === "Subtraction") {
  console.log(chalk.bgBlue(answers.firstNumber - answers.secondNumber));
} else if (answers.operator === "Multiplication") {
  console.log(chalk.bgBlue(answers.firstNumber * answers.secondNumber));
} else if (answers.operator === "Division") {
  console.log(chalk.bgBlue(answers.firstNumber / answers.secondNumber));
} else {
  console.log(chalk.yellow("\nPlease select valid operator"));
}
