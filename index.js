// TODO: Include packages needed for this application
// Inquirer package included in package.json

// TODO: Create an array of questions for user input
const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'Project title',
    },
    {
      type: 'input',
      message: 'Provide a short description explaining the what, why, and how of your project.',
      name: 'Description',
    },
    {
      type: 'input',
      message: 'What are the steps required to install your project?',
      name: 'Installation instructions',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples on how to use your project.',
        name: 'Usage',
    },
    {
        // Go on inquirer link and figure out how to add a list of licenses to choose as per challenge instructions
        type: 'list',
        message: 'What is the license found on your repo?',
        name: 'License',
        choices: ['MIT License', 'Apache 2.0 License', 'Mozilla Public License 2.0'],
    },
    {
        type: 'input',
        message: 'List your collaborators, if any, with links to their GitHub profiles.',
        name: 'Contribution',
    },
    {
        type: 'input',
        message: 'Write tests for you application.',
        name: 'Test Instructions',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'Questions',
    },
  ])
  .then((response) => {
    console.log(response);
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  });


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();