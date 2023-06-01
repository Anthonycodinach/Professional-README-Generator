// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  } else {
    return `![Github license](https://img.shields.io/badge/license-${license}-brightgreen.svg)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  if (license === "None") {
    return "";
  } else {
    return `(https://choosealicense.com/licenses/${license}/)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else {
    return `## License`
  }
 }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

## Description  

${data.projectDescription}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${data.installInstructions}

## Usage

${data.usageInformation}

## Credits

${data.contributionGuidelines}

${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

## Badges
${renderLicenseBadge(data.license)}

## Tests

${data.testInstructions}

## Questions
    
If you have any questions about this application, you can reach me via email at ${data.emailAddress}

Feel free to visit my GitHub profile cointaining the code featured in this application: https://github.com/${data.githubUserName}
`;
}

module.exports = generateMarkdown;