#!/usr/bin/env node
import chalk from 'chalk';
import inquirer from 'inquirer';
// Define the quiz questions
const quizQuestions = [
    {
        question: "Which keyword is used to declare a constant variable in TypeScript?",
        choices: ["a) let", "b) var", "c) const"],
        correctAnswer: "c) const",
    },
    {
        question: "What is the file extension for a TypeScript file?",
        choices: ["a) .js", "b) .ts", "c) .jsx"],
        correctAnswer: "b) .ts",
    },
    {
        question: "Which of the following is not a TypeScript data type?",
        choices: ["a) number", "b) string", "c) character"],
        correctAnswer: "c) character",
    },
    {
        question: "Which TypeScript feature allows you to use JavaScript code with TypeScript?",
        choices: ["a) Modules", "b) Declarations", "c) Typings"],
        correctAnswer: "b) Declarations",
    },
    {
        question: "What is TypeScript?",
        choices: [
            "a) A superset of JavaScript that adds static types.",
            "b) A new version of JavaScript.",
            "c) A CSS framework.",
        ],
        correctAnswer: "a) A superset of JavaScript that adds static types.",
    },
];
// Function to run the quiz
const runQuiz = async () => {
    console.log("\t", "=".repeat(75));
    console.log(chalk.bold.magenta("\t", "\t", "<".repeat(15), "Welcome_To_Janitatauqeer_Quiz", ">".repeat(15)));
    console.log("\t", "=".repeat(75));
    let score = 0;
    for (const [index, questionObj] of quizQuestions.entries()) {
        const answer = await inquirer.prompt([
            {
                name: `question_${index + 1}`,
                type: "list",
                message: chalk.bgBlue(`\nQ${index + 1}. ${questionObj.question}\n`),
                choices: questionObj.choices,
            },
        ]);
        const userAnswer = answer[`question_${index + 1}`];
        if (userAnswer === questionObj.correctAnswer) {
            console.log(chalk.bgGreen(`${index + 1}. Correct`));
            score++;
        }
        else {
            console.log(chalk.bgRed(`${index + 1}. Incorrect!`));
        }
    }
    console.log(chalk.bold.bgMagenta(`\n\tScore: ${score}/${quizQuestions.length}\n`));
};
// Run the quiz
runQuiz();
