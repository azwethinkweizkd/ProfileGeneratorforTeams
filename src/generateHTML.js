// const Manager = require("../js/manager");
// const Engineer = require("../js/engineer");
// const Intern = require("../js/intern");

function buildTeam(team) {
  function generateManager(manager) {
    `<div class="card text-white bg-primary mb-3 mx-2"
    style="max-width: 18rem">
    <div class="card-body">
      <h5 class="card-title">${manager.getName()}</h5>
      <p class="card-text">icon ${manager.getRole()}</p>
    </div>
    <div class="card mb-3">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID:${manager.getId()}</li>
        <li class="list-group-item">
          Email: <a href="#">${manager.getEmail()}</a>
        </li>
        <li class="list-group-item">Office Number:${manager.getOfficeNum()}</li>
      </ul>
    </div>
  </div>`;
  }
  function generateEngineer(engineer) {
    `<div class="card text-white bg-primary mb-3 mx-2"
    style="max-width: 18rem">
    <div class="card-body">
    <h5 class="card-title">${engineer.getName()}</h5>
    <p class="card-text">icon ${engineer.getRole()}</p>
    </div>
    <div class="card mb-3">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID:${engineer.getId()}</li>
      <li class="list-group-item">
        Email: <a href="#">${engineer.getEmail()}</a>
      </li>
      <li class="list-group-item">GitHub:<a href="${engineer.getGitHub()}">${engineer.getGitHub()}</a></li>
    </ul>
    </div>
    </div>`;
  }
  function generateIntern(intern) {
    `<div class="card text-white bg-primary mb-3 mx-2"
  style="max-width: 18rem">
  <div class="card-body">
    <h5 class="card-title">${intern.getName()}</h5>
    <p class="card-text">icon ${intern.getRole()}</p>
  </div>
  <div class="card mb-3">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID:${intern.getId()}</li>
      <li class="list-group-item">
        Email: <a href="#">${intern.getEmail()}</a>
      </li>
      <li class="list-group-item">School:${intern.getSchool()}</li>
    </ul>
  </div>
    </div>`;
  }

  const teamCards = [];

  teamCards.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
  );
  teamCards.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
  );
  teamCards.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
  );
}

module.exports = (team) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>My Team Profiler</title>
      <!-- CSS only -->
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"
      />
    </head>
    <body>
      <div class="jumbotron jumbotron-fluid mw-100">
        <div class="container">
          <h1 class="display-1 bg-danger text-white blockquote text-center">
            <hr class="my-2" />
            <strong>My Team</strong>
            <hr class="my-4" />
          </h1>
        </div>
      </div>
      <div class="container">
      <div class="row justify-content-md-center">
      ${buildTeam(team)}
      </div>
    </div>
    </body>
  </html>
  `;
};
