#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

//Adding todo tasks in an Array;
let todoList: string[] = [];
let conditions = true;

//printing welcome message;
console.log("\t","=".repeat(85));
console.log("\t","\t",chalk.bold.magenta("<".repeat(15),"Welcome_To_Janitatauqeer_ToDo_List!",">".repeat(15)))
console.log("\t","=".repeat(85));

//Using Arrow function;
let main = async () => {
  while (conditions) {
    let option = await inquirer.prompt([
      {
        name: "choice",
        type: "list",
        message: chalk.cyanBright("Select an option you want to do:"),
        choices: [
          "Add Task",
          "Delete Task",
          "Upgrade Task",
          "View Todo-List",
          "Exit",
        ],
      },
    ]);
    if (option.choice === "Add Task") {
      await addTask();
    } else if (option.choice === "Delete Task") {
      await deleteTask();
    } else if (option.choice === "Upgrade Task") {
      await upgradeTask();
    } else if (option.choice === "View Todo-List") {
      await viewTask();
    } else if (option.choice === "Exit") {
      conditions = false;
    }
  }
};
//function to add new task to the list;
let addTask = async () => {
  let newTask = await inquirer.prompt([
    {
      name: "task",
      type: "input",
      message: chalk.cyanBright("Enter your new task:"),
    },
  ]);
  todoList.push(newTask.task);
  console.log(
    chalk.bgBlue(`\n\t "${newTask.task}" task added successfully in Todo-List\n`)
  );
};
//function to view all Todo-List Tasks;
let viewTask = () => {
  console.log(chalk.green("\n Your Todo-List:"));
  todoList.forEach((task, index) => {
    console.log(chalk.green(`${index + 1}:${task}\n`));
  });
};
//function to delete a task from list;
let deleteTask = async () => {
  await viewTask();
  let taskIndex = await inquirer.prompt([
    {
      name: "index",
      type: "number",
      message: chalk.cyanBright(
        "Enter the `index no.`of the task you want to delete:"
      ),
    },
  ]);
  let deletedTask = todoList.splice(taskIndex.index - 1, 1);
  console.log(
    chalk.bgRed(
      `\n\t "${deletedTask}" this task has been deleted successfully from your Todo-List\n`
    )
  );
};
//calling main function;
main();

//function to update a task;
let upgradeTask = async () => {
  await viewTask();
  let upgrade_task_index = await inquirer.prompt([
    {
      name: "index",
      type: "number",
      message: chalk.cyanBright(
        "Enter the `index no` of the task you want to update :"
      ),
    },
    {
      name: "new_task",
      type: "input",
      message: chalk.cyanBright("Now Enter new task name :"),
    },
  ]);
  todoList[upgrade_task_index.index - 1] = upgrade_task_index.new_task;
  console.log(
    chalk.bgBlue(
      `\n\t Task at index no."${
        upgrade_task_index.index-1
      }" Updated successfully [For updated list , Please check option "View Todo-List"] \n`
    )
  );
};
console.log("<".repeat(10),"Thank you for using my Todo_list.Have a great day!")

