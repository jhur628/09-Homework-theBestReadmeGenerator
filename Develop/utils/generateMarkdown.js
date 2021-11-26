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
function renderLicenseLink(license) {
  if (license === "mit") {
    return "MIT <br/> For more information on the MIT license, visit: https://opensource.org/licenses/MIT"
  } else if (license === "gpl-3.0") {
    return "GPL 3.0 <br/> For more information on the GPL 3.0 license, visit: https://opensource.org/licenses/GPL-3.0"
  } else if (license === "Apache-2.0") {
    return "Apache 2.0 <br/> For more information on the Apache 2.0 license, visit: https://opensource.org/licenses/Apache-2.0"
  } else if (license === "none") {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "mit" || "gpl-3.0" || "Apache-2.0") {
    return "## License"
  } else if (license === "none") {
    return ""
  }
}


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
  ### [Credits](#credits)
  ### [Questions](#questions)
  ### [License](#license) <br/>
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contribute
  ${data.contributing}
  ## Test
  ${data.tests}
  ## Credits
  ${data.credits}
  ## Questions
  Have any questions? <br/>
  Contact me at ${data.email}. <br/>
  Github: https://github.com/${data.user}/ <br/>
  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
`;
}

module.exports = generateMarkdown;
