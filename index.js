// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
  {
    type: 'input',
    message: 'Please enter a title for your project',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Please enter a description of the project for your README file',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Please enter installation instructions for your application',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'Please enter usage information for your application',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'Please enter license information',
    name: 'license',
    choices: '',
  },
  {
    type: 'input',
    message: 'Please share any contribution guidlines for your application',
    name: 'contributing',
  },
  {
    type: 'input',
    message: 'Please share any testing instructions for your application',
    name: 'tests',
  },
  {
    type: 'input',
    message: 'Please enter a link to your Git Hub profile',
    name: 'gitHub',
  },
  {
    type: 'input',
    message: 'Please share your email address',
    name: 'email',
  },

]).then((response) => {

});

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
