#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//Priniting a welcome message;
console.log("\t", "=".repeat(66));
console.log(chalk.bold.magenta("\t", "\t", "<".repeat(15), "Welcome_to_Janitatauqeer_OOP_Bank!", ">".repeat(15)));
console.log("\t", "=".repeat(66));
//Bank Account Class;
class BankAccount {
    accountNumber;
    balance;
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    //Debit money;
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(chalk.bgCyan(`\nWithdrawal of "$${amount}" successfully. Remaining balance:"$${this.balance}"\n`));
        }
        else {
            console.log(chalk.redBright("\tInsufficent Balance."));
        }
    }
    //Credit money;
    deposit(amount) {
        if (amount > 100) {
            amount -= 1; //$1 fee charged if more than $100 is deposited;
        }
        this.balance += amount;
        console.log(chalk.bgCyan(`\nDeposit of "$${amount}" successful. Remaining balance: "$${this.balance}"\n`));
    }
    //Check balance;
    checkBalance() {
        console.log(chalk.bgCyan(`\nCurrent Balance: "$${this.balance}"\n`));
    }
}
//Creating Customer class;
class customer {
    firstName;
    lastName;
    gender;
    age;
    mobileNumber;
    account;
    constructor(firstName, lastName, gender, age, mobileNumber, account) {
        (this.firstName = firstName),
            (this.lastName = lastName),
            (this.gender = gender),
            (this.age = age),
            (this.mobileNumber = mobileNumber),
            (this.account = account);
    }
}
//Creating bank accounts
const accounts = [
    new BankAccount(1001, 500),
    new BankAccount(1002, 1000),
    new BankAccount(1003, 2000),
];
//Creating Customers;
const customers = [
    new customer("Ahmed", "Saleem", "Male", 23, 3162223334, accounts[0]),
    new customer("Ariba", "Naz", "Female", 22, 3024467890, accounts[1]),
    new customer("Malaika", "Qureshi", "female", 21, 3196292167, accounts[2]),
];
//Function to interact with bank account;
async function service() {
    do {
        const accountNumberInput = await inquirer.prompt([
            {
                name: "accountNumber",
                type: "number",
                message: "Enter your account number:",
            },
        ]);
        const customer = customers.find((customer) => customer.account.accountNumber === accountNumberInput.accountNumber);
        if (customer) {
            console.log(chalk.bgBlue(`\n\tWelcome,"${customer.firstName} ${customer.lastName}"!\n`));
            const ans = await inquirer.prompt([
                {
                    name: "select",
                    type: "list",
                    message: "Select an operation:",
                    choices: ["Deposit", "Withdraw", "Check Balance", "Exit"],
                },
            ]);
            switch (ans.select) {
                case "Deposit":
                    const depositAmount = await inquirer.prompt([
                        {
                            name: "amount",
                            type: "number",
                            message: "Enter the amount to depost:",
                        },
                    ]);
                    customer.account.deposit(depositAmount.amount);
                    break;
                case "Withdraw":
                    const withdrawAmount = await inquirer.prompt([
                        {
                            name: "amount",
                            type: "number",
                            message: "Enter the amount to depost:",
                        },
                    ]);
                    customer.account.withdraw(withdrawAmount.amount);
                    break;
                case "Check Balance":
                    customer.account.checkBalance();
                    break;
                case "Exit":
                    console.log(chalk.redBright("Exiting Bank Program...\n"));
                    console.log(chalk.bgMagenta.bold("<".repeat(15), "Thank you for using our Bank services. Have a great day!", ">".repeat(15)));
                    return;
            }
        }
        else {
            console.log(chalk.redBright("\n\tInvalid Account Number. Please try again!\n"));
        }
    } while (true);
}
service();
