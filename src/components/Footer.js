import React from 'react';

function Footer() {
  return (
    <div className="mt-5 py-4 footer">
      <div className="d-flex flex-column text-center container">
      <div className="col-12">
        <ul className="nav row text-center d-flex">
            <li className="nav-item col-4 me-3"> <i className="me-1 far fa-copyright"></i>2021 Brian Palay</li>
          <li className="nav-item mb-4 col-1 me-2">
            <a className="d-flex flex-column connect-icon text-decoration-none nowrap" href="https://www.linkedin.com/in/brianpalay"
              target="_blank" rel="noreferrer"><i className="mb-2 fab fa-2x fa-linkedin"></i></a>
          </li>
          <li className="nav-item mb-4 col-1 me-2">
            <a className="d-flex flex-column connect-icon text-decoration-none nowrap" href="https://github.com/bpplaysguitar"
              target="_blank" rel="noreferrer"><i className="mb-2 fab fa-2x fa-github-square"></i></a>
          </li>
          <li className="nav-item mb-4 col-1 me-2">
            <a className="d-flex flex-column connect-icon text-decoration-none nowrap" href="mailto:brianpalay@gmail.com"><i
              className="mb-2 fas fa-2x fa-envelope-square"></i></a>
            </li>
            <li className="nav-item mb-4 col-1 me-2">
              <a className="d-flex flex-column connect-icon text-decoration-none nowrap" href="tel:612-202-5710">
                <i className="mb-2 fas fa-2x fa-phone-square"></i></a>
            </li>
          </ul>
      </div>
      </div>
  </div> 
  );
}

export default Footer;
