function buildTeam(team) {
  //   console.log(team);
  function genIcon(team) {
    switch (team) {
      case "Manager":
        return '<i class="fa fa-coffee" aria-hidden="true"></i>';
      case "Engineer":
        return '<i class="fa fa-file-code-o" aria-hidden="true"></i>';
      case "Intern":
        return '<i class="fa fa-graduation-cap" aria-hidden="true"></i>';
      default:
        return;
    }
  }
  function generateManager(Manager) {
    return `<div class="card text-white bg-primary mb-3 mx-2"
    style="max-width: 18rem">
    <div class="card-body">
      <h5 class="card-title">${Manager.getName()}</h5>
      <p class="card-text">${genIcon(Manager)} ${Manager.getRole()}</p>
    </div>
    <div class="card mb-3">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${Manager.getId()}</li>
        <li class="list-group-item">
          Email: <a href="mailto:${Manager.getEmail()}" target="_blank" onclick="window.open"('your WS URL');>${Manager.getEmail()}</a>
        </li>
        <li class="list-group-item">Office Number: ${Manager.getOfficeNum()}</li>
      </ul>
    </div>
  </div>`;
  }

  function generateEngineer(Engineer) {
    return `<div class="card text-white bg-primary mb-3 mx-2"
    style="max-width: 18rem">
    <div class="card-body">
    <h5 class="card-title">${Engineer.getName()}</h5>
    <p class="card-text">${genIcon(Engineer)} ${Engineer.getRole()}</p>
    </div>
    <div class="card mb-3">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${Engineer.getId()}</li>
      <li class="list-group-item">
        Email: <a href="mailto:${Engineer.getEmail()}" target="_blank" onclick="window.open"('your WS URL');">${Engineer.getEmail()}</a>
      </li>
      <li class="list-group-item">GitHub: <a href="https://github.com/${Engineer.getGitHub()}">${Engineer.getGitHub()}</a></li>
    </ul>
    </div>
    </div>`;
  }

  function generateIntern(Intern) {
    return `<div class="card text-white bg-primary mb-3 mx-2"
  style="max-width: 18rem">
  <div class="card-body">
    <h5 class="card-title">${Intern.getName()}</h5>
    <p class="card-text">${genIcon(Intern)} ${Intern.getRole()}</p>
  </div>
  <div class="card mb-3">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${Intern.getId()}</li>
      <li class="list-group-item">
         Email: <a href="mailto:${Intern.getEmail()}" target="_blank" onclick="window.open"('your WS URL');>${Intern.getEmail()}</a>
      </li>
      <li class="list-group-item">School: ${Intern.getSchool()}</li>
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
  //   console.log(teamCards);
  return teamCards;
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
