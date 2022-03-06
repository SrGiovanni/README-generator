const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = ['Please enter the title of your project: (required)',
                    'Please enter a description of your project: (required)',
                    'Please enter the installation instructions: (required)',
                    'Please enter the Usage instructions: (required)',
                    'Please select a license framework:',
                    'Please enter Contribution instructions: (required)',
                    'Please enter testing instructions: (required)',
                    'Please enter your GitHub username: (required)',
                    'Please enter your email: (required)'
                ];

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
function init() {
    return inquirer.prompt([
        {
            type: "input",
            name: 'title',
            message: questions[0],
            validate: titleInput => {
                return titleInput?  true :
                console.log('Please input your project title'); 
                false;
            }
        },
        {
            type: 'input',
            name: 'description',
            message: questions[1],
            validate: descriptionInput => {
              if (descriptionInput) {
                return true;
              } else {
                console.log('You need to enter a project description!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: questions[2],
            validate: installationInput => {
              if (installationInput) {
                return true;
              } else {
                console.log('You need to enter installation instructions!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: questions[3],
            validate: usageInput => {
              if (usageInput) {
                return true;
              } else {
                console.log('You need to enter a project description!');
                return false;
              }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: questions[4],
            choices: ['MIT', "GNU GLPv3"],
            default: 'MIT'
        },
        {
            type: 'input',
            name: 'contribution',
            message: questions[5],
            validate: contributionInput => {
              if (contributionInput) {
                return true;
              } else {
                console.log('You need to provide contribution instructions!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'testing',
            message: questions[6],
            validate: testingInput => {
              if (testingInput) {
                return true;
              } else {
                console.log('You need to enter testing!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: questions[7],
            validate: githubInput => {
              if (githubInput) {
                return true;
              } else {
                console.log('You need to enter your github user name!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: questions[8],
            validate: emailInput => {
              if (emailInput) {
                return true;
              } else {
                console.log('You need to enter your contact email.');
                return false;
              }
            }
        },
    ])
}

// Function call to initialize app
init()
.then(answers => {
  generateMarkdown(answers);
}).then(markdown => {
  writeToFile('README.md',markdown)
}).catch( err => {
  console.log(err);
});
