// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
const questions = [
    {
        type = 'input',
        name = 'user',
        message = 'What is your Github user name?'
    },
    {
        type = 'input',
        name = 'email',
        message = 'What is your email?'
    },
    {
        type = 'input',
        name = 'title',
        message = 'What is the title of your project?'
    },
    {
        type = 'input',
        name = 'description',
        message = 'Give your project a nice description.'
    },
    {
        type = 'input',
        name = 'installation',
        message = 'Give your project installation instructions.'
    },
    {
        type = 'input',
        name = 'usage',
        message = 'Give your project some usage information.'
    },
    {
        type = 'input',
        name = 'contributing',
        message = 'Give your project some contributing guidelines.'
    },
    {
        type = 'input',
        name = 'tests',
        message = 'Give your project some test instructions'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
