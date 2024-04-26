const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
 
function questions() {
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
      type: 'list',
      message: 'Please enter license information',
      name: 'license',
      choices: ['Apache 2.0', 'Boost', 'IBM']
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

  ]).then((data) => {

    fs.writeFile('README.md', generateMarkdown(data), (err) => err
      ? console.error('An error has occurred')
      : console.log('Success!')
    );
  })
};

function init() {
  questions();
};

// Function call to initialize app
init();
