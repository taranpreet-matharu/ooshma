import React from 'react';

export function Benefits(props) {
    return (
      <section id="benefits-section" class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h6 class="text-muted benefits-h6">Benefits of Using Solar Energy</h6>
            <h2 class="font-weight-bold py-2">Solar energy - A clean source</h2>
            <div class="row py-4">
              <div class="col text-muted benefits-text">
              <div class="d-flex flex-row">
                <div class="px-2 py-2 align-self-start">
                  <i class="fa fa-check-circle-o"></i>
                </div>
                <div class="px-4 py-2 align-self-end">
                  Solar energy is a truly renewable energy source. We cannot
                    run out of solar energy.
                </div>
              </div>
              <div class="d-flex flex-row">
                <div class="px-2 py-2 align-self-start">
                  <i class="fa fa-check-circle-o"></i>
                </div>
                <div class="px-4 py-2 align-self-end">
                  Since you will be meeting some of your energy needs with the 
                    electricity your solar system has generated, your energy bills will drop. 
                </div>
              </div>
              <div class="d-flex flex-row">
                <div class="px-2 py-2 align-self-start">
                  <i class="fa fa-check-circle-o"></i>
                </div>
                <div class="px-4 py-2 align-self-end">
                  Solar energy can be used for diverse purposes. You can generated
                    electricity (photovoltaics) or heat (solar thermal). 
                </div>
              </div>
			        <div class="d-flex flex-row">
                <div class="px-2 py-2 align-self-start">
                  <i class="fa fa-check-circle-o"></i>
                </div>
                <div class="px-4 py-2 align-self-end">
                  Solar energy systems generally don't require a lot of maintenance.
                    You only need to keep them relatively clean. 
                </div>
              </div>
              </div>
            </div>
            <a class="btn" href="#contact-us-section" role="button">Contact Us</a>
          </div>
          <div class="col-md-6">
            <img src="./images/panel.png" alt="Panel" class="img-fluid mb-3"/>
          </div>
        </div>
      </div>
    </section>

    )
}

