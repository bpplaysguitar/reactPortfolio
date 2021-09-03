import React from 'react';

function Navbar({ currentPage, handlePageChange }) {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        {/* Logo */}
        <a class="navbar-brand ms-3" id="navLogo" href="/"><span id="navLogoInitials"
            class="rounded-circle border border-1 border-white px-2 py-0">BP</span><span id="navLogoName"
            class="mx-3">Brian Palay</span></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse ms-5" id="navbarNav">
          <ul class="navbar-nav h6">
            {/* Home */}
            {/* <li class="nav-item">
              <a href="/" onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'nav-link active ms-4 ps-3' : 'nav-link ms-4 ps-3'}><i class="me-2 bi bi-house-door-fill"></i>Home</a>
            </li> */}
            {/* About */}
            <li class="nav-item">
              <a href="#aboutme" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active ms-4 ps-3' : 'nav-link ms-4 ps-3'}><i class="me-2 bi bi-person-fill"></i>About Me</a>
            </li>
            {/* Portfolio */}
            <li class="nav-item">
              <a href="#portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active ms-4 ps-3' : 'nav-link ms-4 ps-3'}><i class="me-2 bi bi-images"></i>Portfolio</a>
            </li>
            {/* Contact */}
            <li class="nav-item">
              <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active ms-4 ps-3' : 'nav-link ms-4 ps-3'}><i class="me-2 bi bi-people-fill"></i>Contact</a>
            </li>
            {/* Resume */}
            <li class="nav-item">
              <a href="#resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active ms-4 ps-3' : 'nav-link ms-4 ps-3'}><i class="me-2 bi bi-file-earmark-text-fill"></i>Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    </div>
  );
}

export default Navbar;
