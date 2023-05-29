// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs=require("fs")

// TODO: Create an array of questions for user input
inquirer.prompt([
   { type:"input",
    name:"projectTitle",
    message:"What would you like to call your project title?"
},
{
    type:"input",
    name:"projectDescription",
    message:"Please enter your project description"
},
{
    type:"input",
    name:"installInstructions",
    message:"Please enter your installation instructions"
},
{
    type:"input",
    name:"usageInformation",
    message:"Please enter your usage information"
},
{
    type:"input",
    name:"contributionGuidelines",
    message:"Please enter your contribution guidelines"
},
{
    type:"input",
    name:"testInstructions",
    message:"Please enter your test instructions"
},
{
    type:"list",
    name:"licences",
    message:"Please select a licence from the options below for your project",
    choices:["Apache License 2.0", "GNU General Public License v3.0", "MIT License", 
        "BSD 2-Clause 'Simplified' License","BSD 3-Clause 'New' or 'Revised' License",
        "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal",
        "Eclipse Public License 2.0", "GNU Affero General Public License v3.0",
        "GNU General Public License v2.0", "GNU Lesser General Public License v2.1",
        "Mozilla Public License 2.0","The Unlicense"]
},

]).then(response=> {
    const readMe = `
    # ${response.projectTitle}

    ## Description
    ${response.projectDescription}

    ## Table of Contents

    ## Installation 
    ${response.installInstructions}

    ## Usage
    ${response.usageInformation}

    ## Credits
    ${response.contributionGuidelines}

    ## License
    ${response.licences}

    ## Badges

    ## Tests
    ${response.testInstructions}
    `;
    // TODO: Create a function to write README file
    fs.writeFile("README.md",readMe,(error)=>{
        if (error) {
            console.log(error);
        } else {
            console.log("README file succesfully genrated!");
        }
    })
});


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
