#!/usr/bin/env node
//importing inquirer and chalk packages;
import inquirer from "inquirer";
import chalk from "chalk";
//printing a colorful welcome message;
console.log("\t", "=".repeat(100));
console.log(chalk.bold.magenta("\t", "\t", "<".repeat(15), "Welcome to Janita_Tauqeer-Student_Management_System", ">".repeat(15)));
console.log("\t", "=".repeat(100));
//Using object oriented method;
//Define the Student Class;
class Student {
    static counter = 1000;
    id;
    name;
    courses;
    balance;
    //Assigning values through constructor object;
    constructor(name) {
        this.id = Student.counter++;
        this.name = name;
        this.courses = []; // Initialize an empty array for courses
        this.balance = 100;
    }
    //Method to enroll a student  in a course
    enroll_course(course) {
        this.courses.push(course);
    }
    //Method to view a student balance
    view_balance() {
        console.log(chalk.bgBlue(`\nBalance for "${this.name}" : "$${this.balance}"\n`));
    }
    //Method to pay student fees;
    pay_fees(amount) {
        this.balance -= amount;
        console.log(chalk.bgBlue(`\n$${amount} Fees payed successfully for "${this.name}"\n`));
    }
    //Method to display student status;
    show_status() {
        console.log(chalk.cyan(`\nID: "${this.id}"`));
        console.log(chalk.cyan(`Name: "${this.name}"`));
        console.log(chalk.cyan(`Courses: "${this.courses}"`));
        console.log(chalk.cyan(`Balance: "${this.balance}"\n`));
    }
}
//Defining a Student_Manager class to manage students;
class Student_manager {
    students;
    constructor() {
        this.students = [];
    }
    //Method to add a new student;
    add_student(name) {
        let student = new Student(name);
        this.students.push(student);
        console.log(chalk.bgBlue(`\nStudent: "${name}" added successfully. Student ID: "${student.id}"\n`));
    }
    //Method to enroll a student in a course;
    enroll_student(student_id, course) {
        let student = this.find_student(student_id);
        if (student) {
            student.enroll_course(course);
            console.log(chalk.bgBlue(`\n"${student.name}" enrolled in "${course}" successfully\n`));
        }
    }
    //Method to view a student balance;
    view_student_balance(student_id) {
        let student = this.find_student(student_id);
        if (student) {
            student.view_balance();
        }
        else {
            console.log(chalk.bgRed("\nStudent not found, Please enter a correct student ID.\n"));
        }
    }
    //Method to pay student fees;
    pay_student_fees(student_id, amount) {
        let student = this.find_student(student_id);
        if (student) {
            student.pay_fees(amount);
        }
        else {
            console.log(chalk.bgRed("\nStudent not found, Please enter a correct student ID.\n"));
        }
    }
    //Method to display student status;
    show_student_status(student_id) {
        let student = this.find_student(student_id);
        if (student) {
            student.show_status();
        }
    }
    //Method to find a student by student_id;
    find_student(student_id) {
        return this.students.find((std) => std.id === student_id);
    }
}
//Main function to run the program;
async function main() {
    // console.log("Welcome to 'Janita_Tauqeer' - Student_Management_System");
    // console.log("-".repeat(50));
    let student_manager = new Student_manager();
    //Whileloop to keep program running;
    while (true) {
        //Asking user to choose an option;
        let choice = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select an option:",
                choices: [
                    "Add Student",
                    "Enroll Student",
                    "View Student Balance",
                    "Pay Student Fees",
                    "Show Student Status",
                    "Exit",
                ],
            },
        ]);
        //Using Switch Case to handle user choice;
        switch (choice.choice) {
            case "Add Student":
                let name_input = await inquirer.prompt([
                    {
                        name: "name",
                        type: "input ",
                        message: "Enter a Student Name:",
                    },
                ]);
                student_manager.add_student(name_input.name);
                break;
            case "Enroll Student":
                let course_input = await inquirer.prompt([
                    {
                        name: "student_id",
                        type: "number",
                        message: "Enter a Student ID:",
                    },
                    {
                        name: "course",
                        type: "input",
                        message: "Enter a Course Name:",
                    },
                ]);
                student_manager.enroll_student(course_input.student_id, course_input.course);
                break;
            case "View Student Balance":
                let balance_input = await inquirer.prompt([
                    {
                        name: "student_id",
                        type: "number",
                        message: "Enter a Student ID:",
                    },
                ]);
                student_manager.view_student_balance(balance_input.student_id);
                break;
            case "Pay Student Fees":
                let fees_input = await inquirer.prompt([
                    {
                        name: "student_id",
                        type: "number",
                        message: "Enter a Student ID:",
                    },
                    {
                        name: "amount",
                        type: "number",
                        message: "Enter the amount to pay:",
                    },
                ]);
                student_manager.pay_student_fees(fees_input.student_id, fees_input.amount);
                break;
            case "Show Student Status":
                let status_input = await inquirer.prompt([
                    {
                        name: "student_id",
                        type: "number",
                        message: "Enter a Student ID:",
                    },
                ]);
                student_manager.show_student_status(status_input.student_id);
                break;
            case "Exit":
                console.log(chalk.red("\nExiting...."));
                process.exit();
        }
    }
}
//Calling a main Function;
main();
