const { prompt } = require("inquirer");
const fs = require("fs");
const generateHTML = require("./src/generateHTML");

const teamMembers = [];

const questionsManger = [
  {
    type: "input",
    message: "What is your Managers name (First and Last)?",
    name: "managersName",
    default: "John Smith",
  },
  {
    type: "input",
    message: "What is your Managers employee id?",
    name: "managersId",
    default: 1,
  },
  {
    type: "input",
    message: "What is your Managers email address?",
    name: "managersEmail",
    default: "sampleemail@gmail.com",
  },
  {
    type: "input",
    message: "What is your Managers office number?",
    name: "managersOffNum",
    default: "12345",
  },
];

const addTeamMem = [
  {
    type: "list",
    name: "teamMember",
    message: "Would you like to add a team member?",
    choices: ["Engineer", "Intern", "End Application"],
  },
];

const questionsEngineer = [
  {
    type: "input",
    message: "What is your Engineers name (First and Last)?",
    name: "engineerName",
    default: "John Smith",
  },
  {
    type: "input",
    message: "What is your Engineers employee id?",
    name: "engineerId",
    default: 2,
  },
  {
    type: "input",
    message: "What is your Engineers email address?",
    name: "engineerEmail",
    default: "sampleemail@gmail.com",
  },
  {
    type: "input",
    message: "What is your Engineers GitHub username?",
    name: "engineerUserName",
    default: "gitHubUserName",
  },
];

const questionsIntern = [
  {
    type: "input",
    message: "What is your Intern name (First and Last)?",
    name: "internName",
    default: "John Smith",
  },
  {
    type: "input",
    message: "What is your Intern employee id?",
    name: "internId",
    default: 3,
  },
  {
    type: "input",
    message: "What is your Intern email address?",
    name: "internEmail",
    default: "sampleemail@gmail.com",
  },
  {
    type: "input",
    message: "What is the name of the school this Intern attended?",
    name: "internSchool",
    default: "schoolName",
  },
];

function initTeamMem() {
  prompt(addTeamMem).then((teamMem) => {
    switch (teamMem) {
      case "Engineer":
        initEngineer();
        break;
      case "Intern":
        initIntern();
        break;
      default:
        fs.writeFileSync(
          "./dist/index.html",
          generateHTML(teamMembers),
          "UTF8"
        );
        process.exit();
    }
  });
}

function initEngineer() {
  prompt(questionsEngineer).then((res) => {
    teamMembers.push(res);
    initTeamMem();
  });
}

function initIntern() {
  prompt(questionsIntern).then((res) => {
    teamMembers.push(res);
    initTeamMem();
  });
}

function init() {
  prompt(questionsManger).then((res) => {
    teamMembers.push(res);
    initTeamMem();
  });
}

init();
