#!/usr/bin/env node

//importing inquirer and chalk packages;
import inquirer from "inquirer";
import chalk from "chalk";

//Printing a colourful Welcome message;
console.log("\t","=".repeat(75));
console.log(
  chalk.bold.magenta("\t","\t",
    "<".repeat(15),
    "Janita_Tauqeer-Word Counter",
    ">".repeat(15)
  )
);
console.log("\t","=".repeat(75));

//Prompt the user to enter a sentence;
//Using Object array;
let answers = await inquirer.prompt([
  {
    name: "sentence",
    type: "input",
    message: chalk.bold.cyan("Enter a Sentence:"),
  },
]);

//Trimming the sentence and splitting it into words based on "spaces";
let words = answers.sentence.trim().split(" ");

//Analysis of user input sentence;
console.log(chalk.bold.cyan("\n- Sentence Words:"));
console.log(words);
console.log(chalk.bold.cyan(`\n- Word Count: ${chalk.bold.red(words.length)}\n`));
console.log(chalk.bold("\t","<".repeat(10), "=".repeat(50), ">".repeat(10)));
