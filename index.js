const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = ['Please enter the title of your project: (required)',
                    'Please enter a description of your project:',
                    'Please enter the installation instructions:',
                    'Please enter the USage instructions:',
                    'Please enter contribution instructions',
                    'Please enter testing instructions'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./dist/${fileName}`, data, (err) =>{
        if(err){
            console.log(err);
            return;
        }
    })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
