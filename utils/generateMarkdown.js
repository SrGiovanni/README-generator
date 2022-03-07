// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case 'GNU GLPv3':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    default:
      return ``;
      break;
      
  }
}

// A function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return `[MIT](https://mit-license.org/)`
      break;
    case 'GNU GLPv3':
      return `[GNU GLPv3](https://www.gnu.org/licenses/gpl-3.0.en.html)`
      break;
    default:
      break;
  }
}

// A function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'MIT':
      return  `Copyright &copy ${new Date().getFullYear()}.<br />Licensed under the ${renderLicenseLink(license)} license.`;
      break;
    case 'GNU GLPv3':
      return `Copyright &copy ${new Date().getFullYear()}.<br />Licensed under ${renderLicenseLink(license)} license.`;
      break;
    default:
      return ``;
      break;
  }

}

// A function to generate markdown for README
function generateMarkdown(data) {
  const {title, description, installation, usage, license, contribution, testing, github, email} = data;
  return `# ${title}

  ${renderLicenseBadge(license)}

  ## Description
  ${description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ---

  ## Installation
  ${installation}

  ## Usage
  ${usage}

  ## License
  ${renderLicenseSection(license)}

  ---

  ## Contributing to the Project
  ${contribution}

  ## Tests
  ${testing}

  ## Questions
  If you have any questions, my <a href="https://github.com/${github}">GitHub profile</a> is linked,
  or you can email me at <a href = "mailto: ${email}">${email}</a>.
`;
}

module.exports = generateMarkdown;
