import React from 'react';
import Form from './Form';

function Contact() {
  return (
    <div>
   <section className="container my-5">
   <h2 className="container pb-3 border-bottom" id="contact">Contact</h2>
   <section className="pt-2 
    d-flex
    flex-row
    justify-content-center
    ">
    <div className="row container">
      <Form />
      <div className="col-12">
        <ul className="nav row text-center d-flex">
          <li className="nav-item mb-4 col-lg-3 col-md-6 col-sm-6 col-12">
            <a className="d-flex flex-column connect-icon text-decoration-none nowrap" href="https://www.linkedin.com/in/brianpalay"
              target="_blank" rel="noreferrer"><i className="mb-2 fab fa-3x fa-linkedin"></i>linkedin.com/in/brianpalay</a>
          </li>
          <li className="nav-item mb-4 col-lg-3 col-md-6 col-sm-6 col-12">
            <a className="d-flex flex-column connect-icon text-decoration-none nowrap" href="https://github.com/bpplaysguitar"
              target="_blank" rel="noreferrer"><i className="mb-2 fab fa-3x fa-github-square"></i>github.com/bpplaysguitar</a>
          </li>
          <li className="nav-item mb-4 col-lg-3 col-md-6 col-sm-6 col-12">
            <a className="d-flex flex-column connect-icon text-decoration-none nowrap" href="mailto:brianpalay@gmail.com"><i
              className="mb-2 fas fa-3x fa-envelope-square"></i>brianpalay@gmail.com</a>
            </li>
            <li className="nav-item mb-4 col-lg-3 col-md-6 col-sm-6 col-12">
              <a className="d-flex flex-column connect-icon text-decoration-none nowrap" href="tel:612-202-5710">
                <i className="mb-2 fas fa-3x fa-phone-square"></i>612-202-5710</a>
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
