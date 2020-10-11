const Employee = require('./lib/Employee');
const Manager = require('./lib/Manger');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML');
const fs = require('fs');
const inquirer = require('inquirer');
const { ADDRCONFIG } = require('dns');

teamMembers = [];
idArray = [];

function createManager() {
    console.log("Please build your team!");
    inquirer.prompt([
        {
            type:"input",
            name: "managerName",
            message: "What is the team manager's name?"
        },
        {
            type: "input",
            name: "managerId",
            message: "What is your team manager's employee id?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is your team manager's email?"
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is your team manager's office number?"
        }
    ])
    .then(answers => {
        //console.log("These are answers inside of createManager(): ", answers);

        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber)
        
        teamMembers.push(manager);
        idArray.push(answers.managerId);
        
        createTeam();
    });
}

function createTeam() {
    inquirer.prompt([
        {
            type: "list",
            name: "memberChoice",
            message: "Would you like to add another team member?",
            choices: ['Engineer', 'Intern', "I don't want to add another team member"]
        }
    ])
    .then(userChoice => {
        console.log("userChoice inside of createTeam(): ", userChoice);

        switch (userChoice.memberChoice) {
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            case "I don't want to add another team member":
                writeToFile(teamMembers);
                //console.log("create html");
                break;
        }
    })
}

function addEngineer() {
    inquirer.prompt([
        {
            type:"input",
            name: "engineerName",
            message: "What is the engineer's name?"
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is your engineer's employee id?"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is your engineer's email?"
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What is your engineer's github username?"
        }
    ])
    .then(answers => {
        //console.log("These are answers inside of addEngineer(): ", answers);

        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub)
        
        teamMembers.push(engineer);
        idArray.push(answers.engineerId);
        
        createTeam();
    });
}

function addIntern() {
    inquirer.prompt([
        {
            type:"input",
            name: "internName",
            message: "What is the intern's name?"
        },
        {
            type: "input",
            name: "internId",
            message: "What is your intern's employee id?"
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is your intern's email?"
        },
        {
            type: "input",
            name: "internSchool",
            message: "What school is your intern attending?"
        }
    ])
    .then(answers => {
        //console.log("These are answers inside of addIntern(): ", answers);

        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)
        
        teamMembers.push(intern);
        idArray.push(answers.internId);
        
        createTeam();
    });
}

createManager();

//function to write index.html file
function writeToFile(teamMembers) {
    let markdown = generateHTML(teamMembers)
    
    fs.writeFile('index.html', markdown, err => {
        if (err) throw err;
      });
}

