import React from 'react';

export function NavBar(props) {
    return (
    <nav class="navbar bg-light navbar-light navbar-expand-md fixed-top nav-styles" id="navbar">
        <div class="container">
            <a href="index.html" class="navbar-brand pr-5">
                <img src="./images/logo.jpg" alt="Logo" class="d-inline-block align-top logo-image"/>
            </a>
            <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <div class="container pl-5">
                <ul class="navbar-nav">
                    <li class="nav-item px-md-2">
                      <a href="#home-section" class="nav-link nav-link-styles">Home</a>
                    </li>
                    <li class="nav-item px-md-2">
                      <a href="#about-us-section" class="nav-link nav-link-styles">About Us</a>
                    </li>
                    <li class="nav-item px-md-2">
                        <a href="#benefits-section" class="nav-link nav-link-styles">Benefits of Solar</a>
                      </li>
                    <li class="nav-item px-md-2">
                      <a href="#how-solar-works-section" class="nav-link nav-link-styles">How it Works</a>
                    </li>
                    <li class="nav-item px-md-2">
                        <a href="#contact-us-section" class="nav-link nav-link-styles">Contact Us</a>
                    </li>
                  </ul>
              </div>
            </div>
        </div>
      </nav>
    )
}

