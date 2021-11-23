// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![license](https://img.shields.io/static/v1?label=license&message=${data.license}&color=<green>)
  ## Description
  ${data.description}
  ## Table of Contents
  ### [Installation](#installation)
  ### [Usage](#usage)
  ### [How to contribute](#contribute)
  ### [How to test](#test)
  ### [License](#license)
  ### [Credits](#credits)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contribute
  ${data.contributing}
  ## Test
  ${data.tests}
  ## License
  ${data.license}
  https://choosealicense.com/licenses/${data.license}/
  ## Credits
  ${data.credits}
`;
}

module.exports = generateMarkdown;
