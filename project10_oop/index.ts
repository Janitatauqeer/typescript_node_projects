#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

// Class representing a Student
class Student {
  name: string;

  // Constructor to initialize the student's name
  constructor(name: string) {
    this.name = name;
  }

  // Method to return the student's name as a string
  toString(): string {
    return this.name;
  }
}

// Class representing a Person, which can hold multiple students
class Person {
  students: Student[] = [];

  // Method to add a student to the list
  addStudent(student: Student): void {
    this.students.push(student);
  }

  // Method to find a student by name
  findStudent(name: string): Student | undefined {
    return this.students.find((student) => student.name === name);
  }
}

// Create an instance of Person to manage students
const persons = new Person();

// Function to start the interactive program
const programStart = async (persons: Person) => {
  while (true) {
    console.log("\t","=".repeat(80));
    console.log(
      chalk.magenta.bold("\t","\t",
        "<".repeat(15),
        "Welcome_To_Janitatauqeer_OOP!",
        ">".repeat(15)
      )
    );
    console.log("\t","=".repeat(80));

    // Prompt the user to choose an action
    const { select } = await inquirer.prompt([
      {
        name: "select",
        type: "list",
        message: chalk.bgBlue("Whom would you like to interact with?\n"),
        choices: ["Staff", "Student", "Exit"],
      },
    ]);

    // Handle the user's choice
    if (select === "Staff") {
      // If the user selects "Staff"
      console.log(
        chalk.green(
          "\nYou approach the staff room. Please feel free to ask any question.\n"
        )
      );
    } else if (select === "Student") {
      // If the user selects "Student"
      const { student: studentName } = await inquirer.prompt([
        {
          name: "student",
          type: "input",
          message: chalk.green(
            "Enter the student's name you wish to engage with:"
          ),
        },
      ]);

      // Check if the student already exists
      let student = persons.findStudent(studentName);

      if (!student) {
        // If the student does not exist, create a new one
        student = new Student(studentName);
        persons.addStudent(student);
        console.log(
          chalk.cyanBright(`\n\t\tHello, I am "${student.name}". Nice to meet you!`)
        );
        console.log(chalk.bgMagenta("\nNew student added"));
      } else {
        // If the student exists, greet them
        console.log(
          chalk.cyanBright(`\n\t\tHello, I am ${student.name}. Nice to see you again!\n`)
        );
      }

      // Display the current list of students
      console.log(chalk.bgBlue("\nCurrent student list:"));
      persons.students.forEach((student, index) => {
        console.log(chalk.cyanBright(`\t"${index + 1}": "${student.name}"\n`));
      });
    } else if (select === "Exit") {
      // If the user selects "Exit"
      console.log(chalk.redBright.bold("\nExiting the program"));
      process.exit();
    }
  }
};

// Start the program
programStart(persons);
