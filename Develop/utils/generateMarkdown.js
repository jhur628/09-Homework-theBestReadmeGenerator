// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "mit") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license === "gpl-3.0") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  } else if (license === "Apache-2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (license === "none") {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  Hi. My name is ${data.name}. <br/>
  I made a ${data.title}. <br/>
  ${data.description}
  ## Table of Contents
  ### [Installation](#installation)
  ### [Usage](#usage)
  ### [How to contribute](#contribute)
  ### [How to test](#test)
  ### [License](#license)
  ### [Credits](#credits)
  ### [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contribute
  ${data.contributing}
  ## Test
  ${data.tests}
  ## License
  ${data.license} <br/>
  For information on ${data.license} visit:
  https://choosealicense.com/licenses/${data.license}/
  ## Credits
  ${data.credits}
  ## Questions
  Have any questions? <br/>
  Contact me at ${data.email}. <br/>
  Github: https://github.com/${data.user}/
`;
}

module.exports = generateMarkdown;
