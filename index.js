const { prompt } = require("inquirer");
const fs = require("fs");
const generateHTML = require("./src/generateHTML");
const Engineer = require("./js/engineer");
const Manager = require("./js/manager");
const Intern = require("./js/intern");

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
  prompt(addTeamMem).then((res) => {
    switch (res.teamMember) {
      case "Engineer":
        initEngineer();
        break;
      case "Intern":
        initIntern();
        break;
      default:
        // console.log(teamMembers);
        console.log("Generating HTML....");
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
  prompt(questionsEngineer).then(
    ({ engineerName, engineerId, engineerEmail, engineerUserName }) => {
      const newEngineer = new Engineer(
        engineerName,
        engineerId,
        engineerEmail,
        engineerUserName
      );
      teamMembers.push(newEngineer);
      initTeamMem();
    }
  );
}

function initIntern() {
  prompt(questionsIntern).then(
    ({ internName, internId, internEmail, internSchool }) => {
      const newIntern = new Intern(
        internName,
        internId,
        internEmail,
        internSchool
      );
      teamMembers.push(newIntern);
      initTeamMem();
    }
  );
}

function init() {
  prompt(questionsManger).then(
    ({ managersName, managersId, managersEmail, managersOffNum }) => {
      const newManager = new Manager(
        managersName,
        managersId,
        managersEmail,
        managersOffNum
      );
      teamMembers.push(newManager);
      initTeamMem();
    }
  );
}

init();
