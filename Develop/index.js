// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const util = require('util');

const writeToFile = util.promisify(fs.writeFile);

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
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
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



// TODO: Create a function to write README file
function generateMD(answers){
 
    let badge = "";
    if(answers.license == "MIT"){
        badge = "![License](https://img.shields.io/static/v1?label=License&message=MIT&color=blueviolet&style=plastic)"
    }else if (answers.license == "APACHE 2.0"){
        badge = "![License](https://img.shields.io/static/v1?label=License&message=APACHE2.0&color=blueviolet&style=plastic)"
    }else if (answers.license == "GPL 3.0"){
    }else if (answers.license == "APACHE 2.0"){
        badge = "![License](https://img.shields.io/static/v1?label=License&message=APACHE2.0&color=blueviolet&style=plastic)"
    }else if (answers.license == "GPL 3.0"){
    }else if (answers.license == "APACHE 2.0"){
        badge = "![License](https://img.shields.io/static/v1?label=License&message=APACHE2.0&color=blueviolet&style=plastic)"
    }else if (answers.license == "GPL 3.0"){
    }else if (answers.license == "APACHE 2.0"){
        badge = "![License](https://img.shields.io/static/v1?label=License&message=APACHE2.0&color=blueviolet&style=plastic)"
    }else if (answers.license == "GPL 3.0"){
    }else if (answers.license == "APACHE 2.0"){
        badge = "![License](https://img.shields.io/static/v1?label=License&message=APACHE2.0&color=blueviolet&style=plastic)"
    }else if (answers.license == "GPL 3.0"){
    }else if (answers.license == "APACHE 2.0"){
        badge = "![License](https://img.shields.io/static/v1?label=License&message=APACHE2.0&color=blueviolet&style=plastic)"
    }else if (answers.license == "GPL 3.0"){
        badge = "![License](https://img.shields.io/static/v1?label=License&message=GPL3.0&color=blueviolet&style=plastic)"
    }else if (answers.license == "BSD 3"){
        badge = "![License](https://img.shields.io/static/v1?label=License&message=BSD3&color=blueviolet&style=plastic)"
    }
    
return`# ${answers.title}  
${badge}
${answers.description}
## Table of Contents:
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
### Installation:
In order to install the necessary dependencies, open the console and run the following:
\`\`\`${answers.installations}\`\`\`
### Usage:
${answers.usage}
### License:
This project is licensed under:
${answers.license}
### Contributing:
${answers.contribute}
### Tests:
In order to test open the console and run the following:
\`\`\`${answers.tests}\`\`\`
### Questions:
If you have any questions contact me on [GitHub](https://github.com/${answers.username}) or contact 
${answers.author} at ${answers.email}  
 `
}

inquirer.prompt(questions)
    .then(function (answers) {
    console.log(answers.title);
    console.log(answers.description);
});

function writeToFile(fileName, answers) {
    fs.writeFile(fileName, answers, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Success!")
    });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
