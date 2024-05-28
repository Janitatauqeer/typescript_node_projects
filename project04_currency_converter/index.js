#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//Printing a Welcome Message;
console.log("\t", "=".repeat(95));
console.log(chalk.blue.magenta("\t", "\t", "<".repeat(15), "Welcome to Janita_Tauqeer - Currency Converter", ">".repeat(15)));
console.log("\t", "=".repeat(95));
//Using Object Array;
//Define the list of currencies and their exchange rates;
let exchange_rate = {
    USD: 1,
    EUR: 0.9,
    JPY: 113,
    CAD: 1.3,
    AUD: 1.65,
    PKR: 279.09, //Pakistan Rupees
    //Add more currencies and their echange rates here
};
//Prompt the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: chalk.cyan("Select the currency to convert from:"),
        choices: ["USD", "EUR", "JPY", "CAD", "AUD", "PKR"],
    },
    {
        name: "to_currency",
        type: "list",
        message: chalk.cyan("Select the currency to convert into:"),
        choices: ["USD", "EUR", "JPY", "CAD", "AUD", "PKR"],
    },
    {
        name: "amount",
        type: "input",
        message: chalk.cyan("Enter the amount to convert:"),
    },
]);
//Perform currency conversion by using formula;
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
//formula of conversion;
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
//Display the converted amount;
console.log(`\n\tConverted Amount = ${chalk.green(converted_amount.toFixed(2))}\n`);
