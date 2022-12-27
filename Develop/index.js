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
    },
    {
        name: "installation",
        message: "Enter the installation instructions for your project",
        type: "input",
    },
    {
        name: "usage",
        message: "Enter the usage guidelines for your project",
        type: "input",
    },
    {
        name: "contribution",
        message: "Enter the contribution guidelines for your project",
        type: "input",
    },
    {
        name: "tests",
        message: "Enter the test instructions for your project",
        type: "input",
    },
    {
        name: "license",
        type: "list",
        message: "Choose a license for your project",
        choices: ['MIT', 'Mozilla', 'Open Software License 3.0', 'ISC'],
    },
    {
        name: "username",
        message: "Enter your Github username",
        type: "input",
    },
    {
        name: "email",
        message: "Enter your email",
        type: "input",
    },
];

inquirer.prompt(questions)
    .then(function (answer) {
    console.log(answer.title);
    console.log(answer.description);
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
