import React from 'react';

function Navbar() {
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
            <li class="nav-item">
              <a class="nav-link active ms-4 ps-3" href="/"><i class="me-2 bi bi-house-door-fill"></i>Home</a>
            </li>
            {/* About */}
            <li class="nav-item">
              <a class="nav-link ms-4 ps-3" href="#about"><i class="me-2 bi bi-person-fill"></i>About</a>
            </li>
            {/* Work */}
            <li class="nav-item">
              <a class="nav-link ms-4 ps-3" href="#work"><i class="me-2 bi bi-images"></i>Work</a>
            </li>
            {/* Connect */}
            <li class="nav-item">
              <a class="nav-link ms-4 ps-3" href="#connect"><i class="me-2 bi bi-people-fill"></i>Connect</a>
            </li>
            {/* Resume */}
            <li class="nav-item">
              <a class="nav-link ms-4 ps-3" href="/resume.html#resume"><i class="me-2 bi bi-file-earmark-text-fill"></i>Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    </div>
  );
}

export default Navbar;
