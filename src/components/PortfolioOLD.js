import React from 'react';
import Project from './Project';




const projectItems = [
  {
    id: 1,
    name: "Bike2Work",
    languages: "JavaScript, API, HTML, Bulma, CSS",
    deployedDemoBtnText: "Deployed",
    deployedDemoLink: "https://bpplaysguitar.github.io/Bike2Work/",
    repository: "https://github.com/bpplaysguitar/Bike2Work",
    backgroundImg:"project-image3"
  },
  {
    id: 2,
    name: "README Generator",
    languages: "JavaScript, Node.js, Inquirer.js",
    deployedDemoBtnText: "Demo",
    deployedDemoLink: "https://youtu.be/S1CyQbMa4A4",
    repository: "https://github.com/bpplaysguitar/readme-generator",
    backgroundImg:"project-image4"
  },
  {
    id: 3,
    name: "JavaScript Fundamentals Quiz",
    languages: "HTML, CSS, JavaScript",
    deployedDemoBtnText: "Deployed",
    deployedDemoLink: "https://bpplaysguitar.github.io/javascript-fundamentals-quiz/",
    repository: "https://github.com/bpplaysguitar/javascript-fundamentals-quiz",
    backgroundImg:"project-image7"
  },
  {
    id: 4,
    name: "Employee Tracker",
    languages: "JavaScript, Node.js, Inquirer.js, MySQL, Sequelize",
    deployedDemoBtnText: "Demo",
    deployedDemoLink: "https://youtu.be/vFqxlpn9C-U",
    repository: "https://github.com/bpplaysguitar/employeeTracker",
    backgroundImg:"project-image5"
  },
  {
    id: 5,
    name: "Team Profile Generator",
    languages: "JavaScript, Node.js, Inquirer.js, HTML, CSS",
    deployedDemoBtnText: "Demo",
    deployedDemoLink: "https://youtu.be/eCcu1BVvk48",
    repository: "https://github.com/bpplaysguitar/teamProfileGenerator",
    backgroundImg:"project-image6"
  }
];

function Portfolio() {
  return (
    <div>
      <section className="container my-5">
      <h2 className="container pb-3 border-bottom" id="portfolio">Portfolio</h2>
      <h5 className="container mt-3">Web Development</h5>
    <Project projectItems={projectItems} />
    </section>
    </div>
  );
}

export default Portfolio;
