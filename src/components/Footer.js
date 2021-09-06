import React from 'react';

function Footer() {
  return (
    <div className="mt-5 footer">
      <div className="container">
      <div className="col-12">
        <ul className="nav py-4 row d-flex align-items-center text-center">
            <li className="me-5 nav-item col-4 d-flex justify-content-center align-items-center"> <i className="me-1 far fa-copyright"></i>2021 Brian Palay</li>
          <li className="nav-item d-flex justify-content-center align-items-center col-1 ms-3 ">
            <a className="d-flex flex-column connect-icon text-decoration-none nowrap" href="https://www.linkedin.com/in/brianpalay"
              target="_blank" rel="noreferrer"><i className="fab fa-2x fa-linkedin"></i></a>
          </li>
          <li className="nav-item d-flex justify-content-center align-items-center col-1 ms-2 ">
            <a className="d-flex flex-column connect-icon text-decoration-none nowrap" href="https://github.com/bpplaysguitar"
              target="_blank" rel="noreferrer"><i className="fab fa-2x fa-github-square"></i></a>
          </li>
          <li className="nav-item d-flex justify-content-center align-items-center col-1 ms-2 ">
            <a className="d-flex flex-column connect-icon text-decoration-none nowrap" href="https://www.facebook.com/brianpalay"
              target="_blank" rel="noreferrer"><i class="fa-2x fab fa-facebook-square"></i></a>
          </li>
          <li className="nav-item d-flex justify-content-center align-items-center col-1 ms-2 ">
            <a className="d-flex flex-column connect-icon text-decoration-none nowrap" href="mailto:brianpalay@gmail.com"><i
              className="fas fa-2x fa-envelope-square"></i></a>
            </li>
            <li className="nav-item d-flex justify-content-center align-items-center col-1 ms-2 ">
              <a className="d-flex flex-column connect-icon text-decoration-none nowrap" href="tel:612-202-5710">
                <i className="fas fa-2x fa-phone-square"></i></a>
            </li>
          </ul>
      </div>
      </div>
  </div> 
  );
}

export default Footer;
