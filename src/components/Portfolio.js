import React from 'react';
import Project from './Project';

const projectItems = [
  {
    id: 1,
    name: "Manage Me Now",
    languages: "JavaScript, Node.js, MySQL, Sequelize, Handlebars.js, Bootstrap",
    deployedDemoBtnText: "Deployed",
    deployedDemoLink: "https://manage-me-now.herokuapp.com/login",
    repository: "https://github.com/bpplaysguitar/Manage-Me-Now",
    backgroundImg:"project-image1"
  },
  {
    id: 2,
    name: "EnviroPact",
    languages: "JavaScript, React, Apollo, Material UI, GraphQL, Express, Mongoose",
    deployedDemoBtnText: "Deployed",
    deployedDemoLink: "https://enviropact.herokuapp.com/",
    repository: "https://github.com/bpplaysguitar/EnviroPact",
    backgroundImg:"project-image2"
  },
  {
    id: 3,
    name: "Bike2Work",
    languages: "JavaScript, API, HTML, Bulma, CSS",
    deployedDemoBtnText: "Deployed",
    deployedDemoLink: "https://bpplaysguitar.github.io/Bike2Work/",
    repository: "https://github.com/bpplaysguitar/Bike2Work",
    backgroundImg:"project-image3"
  },
  {
    id: 4,
    name: "README Generator",
    languages: "JavaScript, Node.js, Inquirer.js",
    deployedDemoBtnText: "Demo",
    deployedDemoLink: "https://youtu.be/S1CyQbMa4A4",
    repository: "https://github.com/bpplaysguitar/readme-generator",
    backgroundImg:"project-image4"
  },
  {
    id: 5,
    name: "Employee Tracker",
    languages: "JavaScript, Node.js, Inquirer.js, MySQL, Sequelize",
    deployedDemoBtnText: "Demo",
    deployedDemoLink: "https://youtu.be/vFqxlpn9C-U",
    repository: "https://github.com/bpplaysguitar/employeeTracker",
    backgroundImg:"project-image5"
  },
  {
    id: 6,
    name: "Team Profile Generator",
    languages: "JavaScript, Node.js, Inquirer.js, HTML, CSS",
    deployedDemoBtnText: "Demo",
    deployedDemoLink: "https://youtu.be/eCcu1BVvk48",
    repository: "https://github.com/bpplaysguitar/teamProfileGenerator",
    backgroundImg:"project-image6"
  },
  {
    id: 7,
    name: "JavaScript Fundamentals Quiz",
    languages: "HTML, CSS, JavaScript",
    deployedDemoBtnText: "Deployed",
    deployedDemoLink: "https://bpplaysguitar.github.io/javascript-fundamentals-quiz/",
    repository: "https://github.com/bpplaysguitar/javascript-fundamentals-quiz",
    backgroundImg:"project-image7"
  }
];

function Portfolio() {
  return (
    <div>
      <section className="container my-5">
      <h2 className="container pb-3 border-bottom" id="portfolio">Portfolio</h2>
    <Project projectItems={projectItems} />
    </section>
    </div>
  );
}

export default Portfolio;
