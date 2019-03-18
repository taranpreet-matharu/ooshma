import React from 'react';

export function Footer(props) {
    return (
        <footer id="footer-section">
            <div class="container p-5">
                <div class="row p-md-5">
                <div class="col-md-4 px-md-5">
                    <h3>OOSHMA</h3>
                    <p class="footer-col-1-text text-justify">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. In neque sint culpa nostrum quo explicabo.
                    </p>
                    <ul class="list-inline">
                    <a class="list-inline-item social-link"><i class="fa fa-facebook stroke-transparent social-icon"></i></a>
                    <a class="list-inline-item social-link"><i class="fa fa-twitter stroke-transparent social-icon"></i></a>
                    <a class="list-inline-item social-link"><i class="fa fa-google stroke-transparent social-icon"></i></a>
                    <a class="list-inline-item social-link"><i class="fa fa-pinterest stroke-transparent social-icon"></i></a>
                    </ul>
                </div>

                <div class="col-md-4 contact-details px-md-5">
                    <h5 class="contact-us-orange">
                    CONTACT US
                    </h5>
                    <ul class="list-unstyled">
                    <li class="py-2"><span class="contact-us-orange">A: </span>ABC Street</li>
                    <li class="py-2"><span class="contact-us-orange">P: </span>(011)-745678759345</li>
                    <li class="py-2"><span class="contact-us-orange">F: </span>998783792353</li>
                    <li class="py-2"><span class="contact-us-orange">E: </span>info@ooshma.co.in</li>
                    </ul>
                </div>
                <div class="col-md-4 px-md-5">
                    <h5 class="contact-us-orange">
                        RECENT WORKS
                    </h5>
                    <div class="d-flex flex-row">
                    <div class="recent-work"></div>
                    <div class="recent-work"></div>
                    <div class="recent-work"></div>
                    <div class="recent-work"></div>
                    </div>
                    <div class="d-flex flex-row">
                    <div class="recent-work"></div>
                    <div class="recent-work"></div>
                    <div class="recent-work"></div>
                    <div class="recent-work"></div>
                    </div>
                </div>
                </div>
                <div class="row pt-5 pb-2 text-center copyright-section">
                <div class="col">About | Blog | Customer Service | Terms | Contact
                    <br/>
                    Copyright &copy;2019 OOSHMA. All rights reserved.
                </div>
                </div>
            </div>
            </footer>
    )
}

