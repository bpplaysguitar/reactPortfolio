import React from 'react';
import Project from './Project';
import projectImage1 from '../assets/images/manageMeNow.jpg';
import projectImage2 from '../assets/images/bike2work.jpg';
import projectImage3 from '../assets/images/readmeGenerator.jpg';
import projectImage4 from '../assets/images/employeeTracker.jpg';
import projectImage5 from '../assets/images/teamProfileGenerator.jpg';
import projectImage6 from '../assets/images/manageMeNow.jpg';

const projectItems = [
  {
    id: 1,
    name: "Manage Me Now",
    img: <img src={projectImage1} alt="Project1" />,
    languages: "JavaScript, Node.js, MySQL, Sequelize, Handlebars.js, Bootstrap",
    deployedDemoBtnText: "Deployed",
    deployedDemoLink: "https://manage-me-now.herokuapp.com/login",
    repository: "https://github.com/bpplaysguitar/Manage-Me-Now",
    backgroundImg:"project-image1"
  },
  {
    id: 2,
    name: "Bike2Work",
    img: <img src={projectImage2} alt="Project2" />,
    languages: "JavaScript, API, HTML, Bulma, CSS",
    deployedDemoBtnText: "Deployed",
    deployedDemoLink: "https://bpplaysguitar.github.io/Bike2Work/",
    repository: "https://github.com/bpplaysguitar/Bike2Work",
    backgroundImg:"project-image2"
  },
  {
    id: 3,
    name: "README Generator",
    img: <img src={projectImage3} alt="Project3" />,
    languages: "JavaScript, Node.js, Inquirer.js",
    deployedDemoBtnText: "Demo",
    deployedDemoLink: "https://youtu.be/S1CyQbMa4A4",
    repository: "https://github.com/bpplaysguitar/readme-generator",
    backgroundImg:"project-image3"
  },
  {
    id: 4,
    name: "Employee Tracker",
    img: <img src={projectImage4} alt="Project4" />,
    languages: "JavaScript, Node.js, Inquirer.js, MySQL, Sequelize",
    deployedDemoBtnText: "Demo",
    deployedDemoLink: "https://youtu.be/vFqxlpn9C-U",
    repository: "https://github.com/bpplaysguitar/employeeTracker",
    backgroundImg:"project-image4"
  },
  {
    id: 5,
    name: "Team Profile Generator",
    img: <img src={projectImage5} alt="Project5" />,
    languages: "JavaScript, Node.js, Inquirer.js, HTML, CSS",
    deployedDemoBtnText: "Demo",
    deployedDemoLink: "https://youtu.be/eCcu1BVvk48",
    repository: "https://github.com/bpplaysguitar/teamProfileGenerator",
    backgroundImg:"project-image5"
  },
  {
    id: 6,
    name: "Sixth One",
    img: <img src={projectImage5} alt="Project5" />,
    languages: "JavaScript, Node.js, Inquirer.js, HTML, CSS",
    deployedDemoBtnText: "Deployed",
    deployedDemoLink: "https://youtu.be/eCcu1BVvk48",
    repository: "https://github.com/bpplaysguitar/teamProfileGenerator",
    backgroundImg:"project-image6"
  }
];

function Portfolio() {
  return (
    <div>
      <section class="container my-5">
      <h2 class="container pb-3 border-bottom" id="portfolio">Portfolio</h2>
    <Project projectItems={projectItems} />
    </section>
    </div>
  );
}

export default Portfolio;
