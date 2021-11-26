// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
const questions = [
    {
        type : 'input',
        name : 'name',
        message : 'What is your name?'
    },
    {
        type : 'input',
        name : 'user',
        message : 'What is your Github user name?'
    },
    {
        type : 'input',
        name : 'email',
        message : 'What is your email?'
    },
    {
        type : 'input',
        name : 'title',
        message : 'What is the title of your project?'
    },
    {
        type : 'input',
        name : 'description',
        message : 'Give your project a nice description.'
    },
    {
        type : 'input',
        name : 'installation',
        message : 'Give your project installation instructions.'
    },
    {
        type : 'input',
        name : 'usage',
        message : 'Give your project some usage information.'
    },
    {
        type : 'input',
        name : 'contributing',
        message : 'Give your project some contributing guidelines.'
    },
    {
        type : 'input',
        name : 'tests',
        message : 'Give your project some test instructions'
    },
    {
        type : 'list',
        name : 'license',
        message : 'What license did you use for this project?',
        choices : [
            "mit",
            "gpl-3.0",
            "Apache-2.0"
        ]
    },
    {
        type : 'input',
        name : 'credits',
        message : 'Want to give someone credit?'
    }
];

function inputAnswers() {
    inquirer
        .prompt(questions)
        .then((data) => {
            writeToFile("README.md", data)
        })
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const readmeContent = generateMarkdown(data);
    fs.writeFile('Develop/output/README.md', readmeContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README file!'))
}

// TODO: Create a function to initialize app
function init() {
    inputAnswers();
}

// Function call to initialize app
init();
