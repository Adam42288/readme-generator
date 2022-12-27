// TODO: Include packages needed for this application
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = [
    {
        name: "title",
        message: "Enter the title of your project",
        type: "input",
    },
    {
        name: "description",
        message: "Enter a description of your project",
        type: "input",
    }
];

inquirer.createPromptModule(question);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
