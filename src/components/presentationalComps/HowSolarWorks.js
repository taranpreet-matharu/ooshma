import React from 'react';

export function HowSolarWorks(props) {
    return (
      <section id="how-solar-works-section" class="py-5">
      <div class="container pl-md-5">
        <div class="row">
          <div class="col-md-4">
            <img src="./images/work-man.jpg" alt="Work man" class="img-fluid workman-image"/>
          </div>
          <div class="col-md-8">
            <div class="how-panels-work p-5">
              <h2 class="font-weight-bold py-2">How Do Solar Panels Work?</h2>
              <div class="row py-4">
                <div class="col text-muted about-us-text">
                  <p>
                  When photons hit a solar cell, they knock electrons loose from their atoms. If conductors
                  are attached to the positive and negative sides of a cell, it forms an electrical circuit.
                  When electrons flow through such a circuit, they generate electricity.
                  </p>
                  <p>
                  Multiple cells make up a solar panel, and multiple panels (modules) can be wired together to
                  form a solar array. THe more panels you can deploy, the more energy you can expect to generate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="what-made-of p-5">
            <h2 class="font-weight-bold py-2">What are Solar Panels Made of?</h2>
              <div class="row py-4">
                <div class="col about-us-text">
                  <p>
                  Photovoltaic (PV) are made up of many solar cells. Solar cells are made of silicon, like
                  semiconductors.
                  </p>
                  <p>
                  They are constructed with a positive layer and a negative layer, which together create an
                  electric field, just like in a battery.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <img src="./images/work-shop.jpg" alt="Work shop" class="img-fluid workshop-image"/>
          </div>
        </div>
      </div>
    </section>
    )
}

