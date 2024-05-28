#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import { differenceInSeconds } from "date-fns";

// Printing a welcome message
console.log("\t","=".repeat(85));
console.log("\t","\t",
  "<".repeat(15),
  chalk.bold.magenta("Welcome_To_JanitaTauqeer_Countdown_Timer"),
  ">".repeat(15)
);
console.log("\t","=".repeat(85));

// Prompting the user to enter hours, minutes, and seconds
const res = await inquirer.prompt([
  {
    name: "hours",
    type: "number",
    message: chalk.bgBlue("Please enter the amount of hours:"),
    validate: (input) => {
      if (isNaN(input) || input < 0) {
        return chalk.bgRed("\nPlease enter a valid number of hours");
      } else {
        return true;
      }
    },
  },
  {
    name: "minutes",
    type: "number",
    message: chalk.bgBlue("Please enter the amount of minutes:"),
    validate: (input) => {
      if (isNaN(input) || input < 0 || input >= 60) {
        return chalk.bgRed(
          "\nPlease enter a valid number of minutes (0-59)"
        );
      } else {
        return true;
      }
    },
  },
  {
    name: "seconds",
    type: "number",
    message: chalk.bgBlue("Please enter the amount of seconds:"),
    validate: (input) => {
      if (isNaN(input) || input < 0 || input >= 60) {
        return chalk.bgRed(
          "\nPlease enter a valid number of seconds (0-59)"
        );
      } else {
        return true;
      }
    },
  },
]);

const { hours, minutes, seconds } = res;
const totalSeconds = hours * 3600 + minutes * 60 + seconds;

function startTime(totalSeconds: number) {
  const endTime = new Date().getTime() + totalSeconds * 1000;

  const timer = setInterval(() => {
    const currentTime = new Date().getTime();
    const timeDiff = endTime - currentTime;

    if (timeDiff <= 0) {
      console.log(chalk.bold.bgRed("\n\tTimer has expired\n"));
      clearInterval(timer);
      return;
    }

    const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
    const seconds = Math.floor((timeDiff / 1000) % 60);

    console.log(
      chalk.cyan(
        `${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
      )
    );
  }, 1000);
}

startTime(totalSeconds);
