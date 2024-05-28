#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

//Printing a welcome message;
console.log("\t","=".repeat(85))
console.log(chalk.bold.magenta("\t","\t","<".repeat(15),"Welcome to Janitatauqeer_Adventure_Game" ,">".repeat(15)));
console.log("\t","=".repeat(85));


class player {
    name:string;
    feul = 100;
    constructor(name:string) {
        this.name = name;
    }
    feulDecreases() {
        let feul = this.feul - 25;
        this.feul = feul;
    }
    feulIncrease() {
        this.feul = 100;
    }
}
class opponent {
    name:string;
    feul = 100;
    constructor(name:string) {
        this.name = name;
    }
    feulDecreases() {
        let feul = this.feul - 25;
        this.feul = feul;
    }
}
let player_input = await inquirer.prompt([
    {
        name: "userName",
        type: "input",
        message: "Enter your name: "
    }
]);
let opponent_input = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "Select your opponent:",
        choices: ["Vampire", "WereWolf", "Demon"]
    }
]);
let p1 = new player(player_input.userName);
let o1 = new opponent(opponent_input.select);

//Vampire
do { 
    if (opponent_input.select === "Vampire") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink Portion", "Run for your life.."]
            }
        ]);
        if (ask.opt === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.feulDecreases();
                console.log(chalk.bgBlue(`\n"${p1.name}" feul is "${p1.feul}"`));
                console.log(chalk.bgBlue(`\n"${o1.name}" feul is "${o1.feul}"\n`));
                if (p1.feul <= 0) {
                    console.log(chalk.bgRed("\n\tYou loose, Better luck next time\n"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.feulDecreases();
                console.log(chalk.bgBlue(`\n"${p1.name}" feul is "${p1.feul}"`));
                console.log(chalk.bgBlue(`\n"${o1.name}" feul is "${o1.feul}"\n`));
                if (o1.feul <= 0) {
                    console.log(chalk.bold.bgGreen("\n\tCongratulations You win!\n"));
                    process.exit();
                }
            }
        }
        if (ask.opt === "Drink Portion") {
            p1.feulIncrease();
            console.log(chalk.yellow(`\n\tYou drink health portion your feul is "${p1.feul}"\n`));
        }
        if (ask.opt === "Run for your life..") {
            console.log(chalk.bgRed("\n\tYou loose, Better luck next time\n"));
            process.exit();
        }
    }
    //WereWolf
    if (opponent_input.select === "WereWolf") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink Portion", "Run for your life.."]
            }
        ]);
        if (ask.opt === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.feulDecreases();
                console.log(chalk.bgBlue(`\n"${p1.name}" feul is "${p1.feul}"`));
                console.log(chalk.bgBlue(`\n"${o1.name}" feul is "${o1.feul}"\n`));
                if (p1.feul <= 0) {
                    console.log(chalk.bgRed("\n\tYou loose, Better luck next time\n"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.feulDecreases();
                console.log(chalk.bgBlue(`\n"${p1.name}" feul is "${p1.feul}"`));
                console.log(chalk.bgBlue(`\n"${o1.name}" feul is "${o1.feul}"\n`));
                if (o1.feul <= 0) {
                    console.log(chalk.bold.bgGreen("\n\tCongratulations You win!\n"));
                    process.exit();
                }
            }
        }
        if (ask.opt === "Drink Portion") {
            p1.feulIncrease();
            console.log(chalk.yellow(`\n\tYou drink health portion your feul is "${p1.feul}"\n`));
        }
        if (ask.opt === "Run for your life..") {
            console.log(chalk.bgRed("\n\tYou loose, Better luck next time\n"));
            process.exit();
        }
    }
    //Demon
    if (opponent_input.select === "Demon") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink Portion", "Run for your life.."]
            }
        ]);
        if (ask.opt === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.feulDecreases();
                console.log(chalk.bgBlue(`"${p1.name}" feul is "${p1.feul}"`));
                console.log(chalk.bgBlue(`"${o1.name}" feul is "${o1.feul}"`));
                if (p1.feul <= 0) {
                    console.log(chalk.bgRed("\n\tYou loose, Better luck next time\n"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.feulDecreases();
                console.log(chalk.bgBlue(`\n"${p1.name}" feul is "${p1.feul}"`));
                console.log(chalk.bgBlue(`\n"${o1.name}" feul is "${o1.feul}"`));
                if (o1.feul <= 0) {
                    console.log(chalk.bold.bgGreen("\n\tCongratulations You win!"));
                    process.exit();
                }
            }
        }
        if (ask.opt === "Drink Portion") {
            p1.feulIncrease();
            console.log(chalk.yellow(`\n\tYou drink health portion your feul is "${p1.feul}"\n`));
        }
        if (ask.opt === "Run for your life..") {
            console.log(chalk.bgRed("\n\tYou loose, Better luck next time\n"));
            process.exit();
        }
    }
} while (true);