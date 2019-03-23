import React from 'react';

export function Footer(props) {
    return (
        <footer id="footer-section">
            <div class="container p-5">
                <div class="row p-md-5">
                <div class="col-md-6 px-md-5">
                    <h3>OOSHMA</h3>
                    <p class="footer-col-1-text text-justify">
                    We at Ooshma, believe in revolutionising renewable resources of energy.
                    </p>
                    <ul class="list-inline">
                    <a class="list-inline-item social-link"><i class="fa fa-facebook stroke-transparent social-icon"></i></a>
                    <a class="list-inline-item social-link"><i class="fa fa-twitter stroke-transparent social-icon"></i></a>
                    <a class="list-inline-item social-link"><i class="fa fa-google stroke-transparent social-icon"></i></a>
                    <a class="list-inline-item social-link"><i class="fa fa-pinterest stroke-transparent social-icon"></i></a>
                    </ul>
                </div>

                <div class="col-md-6 contact-details px-md-5">
                    <h5 class="contact-us-orange">
                    CONTACT US
                    </h5>
                    <ul class="list-unstyled">
                    <li class="py-2"><span class="contact-us-orange">P: </span>+91.9896215977</li>
                    <li class="py-2"><span class="contact-us-orange">E: </span>contactus@ooshma.in</li>
                    </ul>
                </div>
               
                </div>
                <div class="row pt-5 pb-2 text-center copyright-section">
                <div class="col">
                    <br/>
                    Copyright &copy;2019 OOSHMA. All rights reserved.
                </div>
                </div>
            </div>
            </footer>
    )
}

