import React from 'react';
import contact from './images/contact.png'
import email from './images/email.png'
import linkedin from './images/linkedin.png'
import phone from './images/phone.png'
import DMD from './images/samplegif.gif'
import WTM from './images/WTM.png'
import SNAPI from './images/SocialNetworkAPI.png'
import Note from "./images/NoteTaker.png"
import Weather from "./images/Weather.png"
import ReadMe from "./images/ReadMe.png"

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio Page</h1>
      <p>
        Feel free to browse a few of my repositories by clicking the images below!
      </p>
      <div className="text-center">
        <ul class="row_1">
          <li>
              <h3>What's That Movie?</h3>
              <br></br>
              <a href="https://alexpap1.github.io/Whats-That-Movie/">
                  <img src={WTM} alt="What's That Movie?"></img>
                </a>
          </li>
          <br></br>
          <li>
              <h3>Dog Meet Dog</h3>
              <br></br>
              <a href="https://dog-meet-dog-final.herokuapp.com/">
                <img src={DMD} alt="Dog Meet Dog"></img>
                </a>
          </li>
          <br></br>
          <li>
              <h3>Social Network API</h3>
              <br></br>
              <a href="https://github.com/AlexPap1/social-network-api">
                <img src={SNAPI} alt="Social Network API"></img>
                </a>
          </li>
          <br></br>
          <li>
              <h3>Note Taker</h3>
              <br></br>
              <a href="https://note-taker-alexpap01.herokuapp.com/">
                <img src={Note} alt="Note Taker"></img>
                </a>
          </li>
          <br></br>
          <li>
              <h3>Weather Dashboard API</h3>
              <br></br>
              <a href="https://alexpap1.github.io/Weather-Dashboard/">
                <img src={Weather} alt="Weather Dashboard"></img>
                </a>
          </li>
          <br></br>
          <li>
              <h3>Read Me Generator</h3>
              <br></br>
              <a href="https://github.com/AlexPap1/READ-ME-Generator">
                <img src={ReadMe} alt="Read Me Generator"></img>
                </a>
          </li>
        </ul>
      </div>
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
