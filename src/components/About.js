import React from 'react';

function About() {
  return (
    <div className="aboutContainer">
      <img class="sr-only" alt="Brian Palay" src="/src/assets/images/glitchbpopacity78.jpg"/>
   <div className="jumbotron jumbotron-fluid shadow">
  </div> 
   <section className="container my-5">
      <h2 className="container pb-2 border-bottom" id="aboutme">About Me</h2>
      <p className="pt-2">
        Hi, my name is Brian Palay, and I'm a UX designer and web developer. Welcome to this website I built!
      </p>
      <p className="pt-2">
        Design has always been a big part of my life. I graduated from the University of Minnsota with a Bachelor's of Arts in architecture. From there, I spent quite a few years working with all sorts of digital design programs, from photo editing to CAD to 3D modeling.
      </p>
      <p className="pt-2">
        With my sights set on entering the tech world, I completed a six-month web development boot camp at the University of Minnesota in 2021, earning a certification in full-stack web development.
      
        To compliment my newly-acquired development skillset, I enrolled in Google's UX design professional certification course (in progress), and was able to start working in UX design at the same time.
      </p>
      <p className="pt-2">
        When I'm not working, I'm...working? I keep myself busy by playing music gigs many weekends, and recording music at home to collaborate with other musicians all over the world. I'm also renovating a unique, modern house I purchased in 2022.
      </p>
    </section>
    </div>
  );
}

export default About;
