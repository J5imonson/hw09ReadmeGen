// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

function generateMarkdown(data) {
  return `
  
  # ${data.title} ${data.license}

  ## Table of Contents...
  [Description](#description)
  [Installation](#installation)
  [Usage](#usage)
  [Contributing](#contributing)
  [License](#license)
  [Git Hub](#gitHub)
  [Email](#email)

  ## Description
  ### ${data.description}

  ## Installation
  ### ${data.installation}

  ## Usage
  ### ${data.usage}

  ## Contributing
  ### ${data.contributing}

  ## License
  ### ${data.license}

  ## Git Hub
  ### ${data.gitHub}

  ## E-mail
  ### ${data.email}
`;
}

module.exports = generateMarkdown;

