import React from 'react';

function Navbar({ currentPage, handlePageChange }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand ms-3" id="navLogo" href="/"><span id="navLogoInitials"
            className="rounded-circle border border-1 border-white px-2 py-0">BP</span><span id="navLogoName"
            className="mx-3">Brian Palay</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ms-5" id="navbarNav" data-toggle="collapse" data-target=".navbar-collapse">
          <ul className="navbar-nav h6">
            {/* Home */}
            {/* <li className="nav-item">
              <a href="/" onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'nav-link active ms-4 ps-3' : 'nav-link ms-4 ps-3'}><i className="me-2 bi bi-house-door-fill"></i>Home</a>
            </li> */}
            {/* About */}
            <li className="nav-item">
              <a href="#" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active ms-4 ps-3' : 'nav-link ms-4 ps-3'}><i className="me-2 bi bi-person-fill"></i>About Me</a>
            </li>
            {/* Portfolio */}
            <li className="nav-item">
              <a href="#" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active ms-4 ps-3' : 'nav-link ms-4 ps-3'}><i className="me-2 bi bi-images"></i>Portfolio</a>
            </li>
            {/* Contact */}
            <li className="nav-item">
              <a href="#" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active ms-4 ps-3' : 'nav-link ms-4 ps-3'}><i className="me-2 bi bi-people-fill"></i>Contact</a>
            </li>
            {/* Resume */}
            <li className="nav-item">
              <a href="#" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active ms-4 ps-3' : 'nav-link ms-4 ps-3'}><i className="me-2 bi bi-file-earmark-text-fill"></i>Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    </div>
  );
}

export default Navbar;
