function generateMarkdown(data) {

  switch (data.license) {
    case 'Apache 2.0':
      data.license = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      break;

    case 'Boost':
      data.license = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
      break;

    case 'IBM':
      data.license = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
      break;

    default:
      console.log('No license selected')
      break;
  }

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

