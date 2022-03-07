const generateMarkdown = require("./utils/generateMarkdown");

// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// Aan array of questions for user input
const questions = [
            {
                type: "input",
                name: 'title',
                message: 'Please enter the title of your project: (required)',
                validate: titleInput => {
                    return titleInput?  true :
                    console.log('Please input your project title'); 
                    false;
                }
            },
            {
                type: 'input',
                name: 'description',
                message: 'Please enter a description of your project: (required)',
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
                message: 'Please enter the installation instructions: (required)',
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
                message: 'Please enter the Usage instructions: (required)',
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
                message: 'Please select a license framework:',
                choices: ['MIT', "GNU GLPv3"],
                default: 'MIT'
            },
            {
                type: 'input',
                name: 'contribution',
                message: 'Please enter Contribution instructions: (required)',
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
                message: 'Please enter testing instructions: (required)',
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
                message: 'Please enter your GitHub username: (required)',
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
                message: 'Please enter your email: (required)',
                validate: emailInput => {
                  if (emailInput) {
                    return true;
                  } else {
                    console.log('You need to enter your contact email.');
                    return false;
                  }
                }
            },
        ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./dist/${fileName}`, data, (err) =>{
        if(err){
            console.log(err);
            return;
        };
    });
};

// Invoke to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
.then(answers => {
  return generateMarkdown(answers);
}).then(markdown => {
  writeToFile('README.md', markdown);
  console.log(`File written successfully!
   you can find it at ./dist/README.md`)
}).catch( err => {
  console.log(err);
});
