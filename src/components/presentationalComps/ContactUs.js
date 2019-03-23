import React from 'react';
import {sendMail} from "../../../services/sendMail.js";

const sendMailInternal = async () => {
  var contactObj = {};

  contactObj.name = document.getElementById("name").value;
  contactObj.email = document.getElementById("email").value;
  contactObj.phone = document.getElementById("phone").value;
  contactObj.message = document.getElementById("message").value;

  await sendMail(contactObj);
}

export function ContactUs(props) {
    return (
        <section id="contact-us-section" class="py-5">
        <div class="container p-5">
          <div class="row p-md-5">
            <div class="col-md-5">
              <h3>Contact Us</h3>
            </div>
          </div>
  
          <form>
            <div class="row px-md-5">
              <div class="col-md-5">
                <div class="form-group py-2">
                  <input id="name" type="text" class="form-control form-control-design" placeholder="Name" />
                </div>
                <div class="form-group py-2">
                  <input  id="email" type="email" class="form-control form-control-design" placeholder="E-mail" />
                </div>
                <div class="form-group py-2">
                    <input id="phone" type="text" class="form-control form-control-design" placeholder="Mobile Number"/>
                </div>
              </div>
  
              <div class="col-md-7">
                <div class="form-group py-2">
                  <textarea id="message" class="form-control form-control-design" placeholder="Your Message...."></textarea>
                </div>
              </div>
            </div>  
          </form>
  
          <div class="row p-md-5">
            <div class="col-lg-10"></div>
            <div class="col-lg-2">
              <button class="btn btn-block" onClick={sendMailInternal}>Submit</button>
            </div>
          </div> 
  
        </div>
      </section>
    )
}

