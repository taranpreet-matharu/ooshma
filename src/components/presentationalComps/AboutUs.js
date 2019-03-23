import React from 'react';

export function AboutUs(props) {
    return (
      <section id="about-us-section" class="py-5" data-spy="scroll" data-target="#navbar" data-offset="0">
      <div class="container">
        <div class="row p-5">
          <div class="col-md-6">
            <h6 class="text-muted about-h6">Welcome to OOSHMA</h6>
            <h2 class="font-weight-bold py-2">Solar power is the key to a clean unlimited source of energy</h2>
            <div class="row py-4">
              <div class="col-md-6 text-muted about-us-text">
                The sun provides more than enough energy to meet the whole world's energy needs, unlike fossil fuels,
                it won't run out anytime soon. As a renewable energy source, the only limitation of solar power is
                our ability to turn it into electricity in an efficient and cost effective way. No greenhouse gas
                emissions are released into the atmosphere.
              </div>
              <div class="col-md-6 text-muted about-us-text">
                After solar panels have been installed, operational costs are quite low compared to other forms of
                power generation. Fuel isn't required, and this means that solar power can create large amounts of
                electricity without uncertainity and expense of securing a fuel supply. The sun provides more energy
                than we'll ever need.
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <img src="./images/welcome.png" alt="Welcome" class="img-fluid p-3"/>
          </div>
        </div>
      </div>
    </section>
    )
}

