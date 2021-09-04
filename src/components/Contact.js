import React from 'react';
import Form from './Form';

function Contact() {
  return (
    <div>
   <section class="container my-5">
   <h2 class="container pb-3 border-bottom" id="contact">Contact</h2>
   <section class="pt-2 
    d-flex
    flex-row
    justify-content-center
    ">
    <div class="row container">
      <Form />
      <div class="col-12">
        <ul class="nav row text-center d-flex">
          <li class="nav-item mb-4 col-lg-3 col-md-6 col-sm-6 col-12">
            <a class="d-flex flex-column connect-icon text-decoration-none nowrap" href="https://www.linkedin.com/in/brianpalay"
              target="_blank"><i class="mb-2 fab fa-3x fa-linkedin"></i>linkedin.com/in/brianpalay</a>
          </li>
          <li class="nav-item mb-4 col-lg-3 col-md-6 col-sm-6 col-12">
            <a class="d-flex flex-column connect-icon text-decoration-none nowrap" href="https://github.com/bpplaysguitar"
              target="_blank"><i class="mb-2 fab fa-3x fa-github-square"></i>github.com/bpplaysguitar</a>
          </li>
          <li class="nav-item mb-4 col-lg-3 col-md-6 col-sm-6 col-12">
            <a class="d-flex flex-column connect-icon text-decoration-none nowrap" href="mailto:brianpalay@gmail.com"><i
              class="mb-2 fas fa-3x fa-envelope-square"></i>brianpalay@gmail.com</a>
            </li>
            <li class="nav-item mb-4 col-lg-3 col-md-6 col-sm-6 col-12">
              <a class="d-flex flex-column connect-icon text-decoration-none nowrap" href="tel:612-202-5710">
                <i class="mb-2 fas fa-3x fa-phone-square"></i>612-202-5710</a>
            </li>
          </ul>
      </div>
    </div>
  </section>
      
    </section>
    </div>
  );
}

export default Contact;
