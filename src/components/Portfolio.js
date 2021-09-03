import React from 'react';
import Footer from './Footer'

function Portfolio() {
  return (
    <div>
   <section class="container my-5">
      
      <div id="myCarousel" class="carousel slide mt-5" data-bs-ride="carousel" data-bs-interval="9000">
      <h2 class="container pb-3 border-bottom" id="portfolio">Portfolio</h2>
      <div class="pt-2">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active bg-dark border" aria-current="true"
          aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" class="bg-secondary border" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" class="bg-secondary border" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" class="bg-secondary border" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="4" class="bg-secondary border" aria-label="Slide 5"></button>
      </div>
      </div>
      <div class="carousel-inner carousel-body border border-2 border-dark rounded">
        {/* <!-- Carousel item 1 --> */}
        <div class="carousel-item active">
          <div class="container d-flex flex-column">
            <div class="carousel-image1 shadow border border-dark my-3 mx-2 rounded"></div>
          </div>
          <div class="row mt-2">
            <h2>Manage Me Now</h2>
            <p class="px-5">JavaScript, Node.js, MySQL, Sequelize, Handlebars.js, Bootstrap 
            </p>
            <p>
              <a class="btn btn-lg btn-dark text-white mx-1" target="_blank"
                href="https://manage-me-now.herokuapp.com/login">Deployed</a>
              <a class="btn btn-lg btn-dark text-white mx-1" target="_blank"
                href="https://github.com/bpplaysguitar/Manage-Me-Now">Repository</a>
            </p>
          </div>
        </div>

        {/* <!-- Carousel item 2 --> */}
        <div class="carousel-item rounded">
          <div class="container d-flex flex-column">
            <div class="carousel-image2 shadow border border-dark my-3 mx-2 rounded"></div>
          </div>
          <div class="row mt-2">
            <h2>Bike2Work</h2>
            <p class="px-5">JavaScript, API, HTML, Bulma, CSS
            </p>
            <p>
              <a class="btn btn-lg btn-dark text-white mx-1" target="_blank"
                href="https://bpplaysguitar.github.io/Bike2Work/">Deployed</a>
              <a class="btn btn-lg btn-dark text-white mx-1" target="_blank"
                href="https://github.com/bpplaysguitar/Bike2Work">Repository</a>
            </p>
          </div>
        </div>

        {/* <!-- Carousel item 3 --> */}
        <div class="carousel-item rounded">
          <div class="container d-flex flex-column">
            <div class="carousel-image3 shadow border border-dark my-3 mx-2 rounded"></div>
          </div>
          <div class="row mt-2">
            <h2>README Generator</h2>
            <p class="px-5">
              JavaScript, Node.js, Inquirer.js
            </p>
            <p>
              <a class="btn btn-lg btn-dark text-white mx-1" target="_blank" href="https://youtu.be/S1CyQbMa4A4">Demo</a>
              <a class="btn btn-lg btn-dark text-white mx-1" target="_blank"
                href="https://github.com/bpplaysguitar/readme-generator">Repository</a>
            </p>
          </div>
        </div>

        {/* <!-- Carousel item 4 --> */}
        <div class="carousel-item rounded">
          <div class="container d-flex flex-column">
            <div class="carousel-image4 shadow border border-dark my-3 mx-2 rounded"></div>
          </div>
          <div class="row mt-2">
            <h2>Employee Tracker</h2>
            <p class="px-5">
              JavaScript, Node.js, Inquirer.js, MySQL, Sequelize
            </p>
            <p>
              <a class="btn btn-lg btn-dark text-white mx-1" target="_blank" href="https://youtu.be/vFqxlpn9C-U">Demo</a>
              <a class="btn btn-lg btn-dark text-white mx-1" target="_blank"
                href="https://github.com/bpplaysguitar/employeeTracker">Repository</a>
            </p>
          </div>
        </div>

        {/* <!-- Carousel item 5 --> */}
        <div class="carousel-item rounded">
          <div class="container d-flex flex-column">
            <div class="carousel-image5 shadow border border-dark my-3 mx-2 rounded"></div>
          </div>
          <div class="row mt-2">
            <h2>Team Profile Generator</h2>
            <p class="px-5">
              JavaScript, Node.js, Inquirer.js, HTML, CSS
            </p>
            <p>
              <a class="btn btn-lg btn-dark text-white mx-1" target="_blank"
                href="https://www.youtube.com/watch?v=eCcu1BVvk48">Demo</a>
              <a class="btn btn-lg btn-dark mx-1" target="_blank"
                href="https://github.com/bpplaysguitar/teamProfileGenerator">Repository</a>
            </p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon rounded-circle p-4" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon rounded-circle p-4" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  
    </section>
<Footer />
    </div>
  );
}

export default Portfolio;
