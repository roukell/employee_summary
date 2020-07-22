const inquirer = require("inquirer");
const fs = require("fs");
const prompt = inquirer.createPromptModule();
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const render = require("./lib/htmlRenderer");
const employees = [];

// array of questions for user
const managerQuestion = {
  type: "number",
  message: "Please enter manager's office number",
  name: "officeNumber"
}

const engineerQuestion = {
  type: "input",
  message: "Please enter engineer's GitHub username",
  name: "github"
}

const internQuestion = {
  type: "input",
  message: "Please enter intern's school",
  name: "school"
}

const generalQuestions = [{
    type: "input",
    message: "Please enter name",
    name: "name"
  }, {
    type: "input",
    message: "Please enter ID",
    name: "id"
  },
  {
    type: "input",
    message: "Please enter Email",
    name: "email"
  }
];

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
    // line 63 bug numbere can be left empty? need to fix
    if (name !== "" && id !== "" && email !== "" && officeNumber !== "" && officeNumber !== NaN) {
      employees.push(manager);
      createEmployees();
    } else {
      console.log("Please enter valid input");
      return;
    }
  })
}

function createEmployees() {
  prompt(employeeTypeQuestion).then((data) => {
    if (data.role === "Engineer") {
      createEngineer();
    } else if (data.role === "Intern") {
      createIntern();
    } else {
      //generate HTML and write file
      writeToFile("./output/team.html", render(employees));
    }
  })
}

function createEngineer() {
  prompt([
    ...generalQuestions,
    engineerQuestion
  ]).then(({name, id, email, github}) => {
    let engineer = new Engineer(name, id, email, github);
    if (name === "" || id === "" || email === "" || github === "") {
      console.log("Please enter valid input");
      createEngineer();
    } else {
      employees.push(engineer);
      createEmployees();
    }
  })
}

function createIntern() {
  prompt([
    ...generalQuestions,
    internQuestion
  ]).then(({name, id, email, school}) => {
    let intern = new Intern(name, id, email, school);
    if (name === "" || id === "" || email === "" || school === "") {
      console.log("Please enter valid input");
      createIntern();
    } else {
      employees.push(intern);
      createEmployees();
    }
  })
}

// function to write file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      throw err;
    }
    console.log("Successful");
  });
}

init();