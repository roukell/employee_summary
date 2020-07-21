const inquirer = require("inquirer");
const fs = require("fs");
var prompt = inquirer.createPromptModule();

// array of questions for user
const managerQuestions = [{
    type: "input",
    message: "What is manager's name?",
    name: "managerName"
  },
  {
    type: "input",
    message: "What is manager's id?",
    name: "managerId"
  },
  {
    type: "input",
    message: "What is manager's email",
    name: "managerEmail"
  }
];

const engineerQuestions = [{
    type: "input",
    message: "What is engineer's name?",
    name: "engineerName"
  }, {
    type: "input",
    message: "What is engineer's id?",
    name: "engineerId"
  },
  {
    type: "input",
    message: "What is your engineer's email",
    name: "engineerEmail"
  }, {
    type: "input",
    message: "What is your engineer's GitHub username?",
    name: "engineerGithub"
  }
];

const internQuestions = [{
    type: "input",
    message: "What is intern's name?",
    name: "internName"
  }, {
    type: "input",
    message: "What is intern's id?",
    name: "internId"
  },
  {
    type: "input",
    message: "What is intern's email",
    name: "internEmail"
  }, {
    type: "input",
    message: "What is intern's school?",
    name: "internSchool"
  } 
];

const renderQuestion = [{
  type: "list",
  message: "What type of team member would you like to add?",
  name: "role",
  choices: [
    "Engineer",
    "Intern",
    "I don't want to add anymore"
  ]
}];



  prompt(managerQuestions);



