import React from 'react';
import contact from './images/contact.png'
import email from './images/email.png'
import linkedin from './images/linkedin.png'
import phone from './images/phone.png'
import resume from './images/resume.pdf'

export default function Resume() {
  return (
    <div>
      <h1>Resume Page</h1>
      <p>
        Check out my resume by clicking the link below 🤝
      </p>
      <a href={resume} download>Click to download</a>
      <section id="contact-me" class="contact-me">
        <div class="text-center">
            <img src={contact} alt="Contact Stock Photo"
            width="100px"
            height="100px"></img>
        </div>
        <h2 class="contact-info text-center"> Contact and Connect with Me! </h2>
        </section>
        <br></br>
        <div class="text-center">
            <ul class="contact-images">
                <li>
                    <img src={email} alt="EmailIcon"
                    width="110"
                    height="110"></img>
                </li>
                <li>
                    <img src={linkedin} alt="LinkedInIcon"
                    width="100"
                    height="100"></img>
                </li>
                <li>
                    <img src={phone} alt="PhoneIcon"
                    width="100"
                    height="100"></img>
                </li>
            </ul>
        </div>
        <ul class="contact-names text-center">
           <li>
               Email: <a href="mailto:arpappagallo@gmail.com">arpappagallo@gmail.com</a>
           </li>
           <li>
                LinkedIn: <a href= "https://www.linkedin.com/in/alex-pappagallo-3630781a2/" >My LinkedIn Profile</a>
            </li>
           <li>
                Phone: <a href="tel:(732)-610-6636">(732)-610-6636</a>
           </li>
        </ul>
    </div>
  );
}
