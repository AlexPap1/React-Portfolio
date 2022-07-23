import React from 'react';
import setCurrentPage from '../PortfolioContainer'
import contact from './images/contact.png'
import email from './images/email.png'
import linkedin from './images/linkedin.png'
import phone from './images/phone.png'
import pfp from './images/pfp.png'

export default function About() {
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
        <h1 className="text-center">About me!</h1>
        <div className="text-center">
            <img src={pfp} alt="profile picture"></img>
        </div>
        <p>
        My name is Alex. In May 2020, I graduated from 
        The College of New Jersey with a bachelor's degree in Finance and a minor in Philosophy. 
        I had a career as an accountant for two years, but have since left that career to focus on
        building my coding skills and dedicating myself to my boot camp course full time.
        </p>
        <br></br>
        <p>
        In my free time, I enjoy playing and learning about video games, weight lifitng, and building LEGO sets.
        </p>
        <br></br>
        <p>
        I have a passion for information technology and am furthering my web development skills. 
        I value continuous learning and one of my goals is to help make information more easily 
        accessible to everyone. I hope to grow professionally and lead a life of impact.
        </p>
        <br>
        </br>
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
