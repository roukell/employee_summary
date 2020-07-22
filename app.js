const inquirer = require("inquirer");
const fs = require("fs");
const prompt = inquirer.createPromptModule();
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const employees = [];

// array of questions for user
const managerQuestion = {
    type: "number",
    message: "What is manager's office number?",
    name: "officeNumber"
  }

const engineerQuestion = {
    type: "input",
    message: "What is your engineer's GitHub username?",
    name: "github"
  }

const internQuestion = {
    type: "input",
    message: "What is intern's school?",
    name: "school"
  }

const generalQuestions = [{
  type: "input",
  message: "What is your name?",
  name: "name"
}, {
  type: "input",
  message: "What is your id?",
  name: "id"
},
{
  type: "input",
  message: "What is email",
  name: "email"
}];

const employeeTypeQuestion = [{
  type: "list",
  message: "What type of team member would you like to add?",
  name: "role",
  choices: [
    "Engineer",
    "Intern",
    "I don't want to add anymore"
  ]
}];

function init() {
  prompt([
    ...generalQuestions,
    managerQuestion
  ]).then(({name, id, email, officeNumber}) => {
    let manager = new Manager(name, id, email, officeNumber);
    employees.push(manager);
    createEmployees();
  })
} 

init();
