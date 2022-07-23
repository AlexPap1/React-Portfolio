import React, { useState } from 'react';
import contact from './images/contact.png'
import email1 from './images/email.png'
import linkedin from './images/linkedin.png'
import phone from './images/phone.png'
import { validateEmail } from './images/helpers.js';

function Form() {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }

    setUserName('');

    setEmail('');
  };

  return (
    <div>
      <h1>Contact Page</h1>
      <form className="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        {/* <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="message"
        /> */}
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
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
                    <img src={email1} alt="EmailIcon"
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

export default Form;

// import React from 'react';
// import contact from './images/contact.png'
// import email from './images/email.png'
// import linkedin from './images/linkedin.png'
// import phone from './images/phone.png'

// export default function Contact() {
//   return (
//     <div>
//       <h1>Contact Page</h1>
//       <p>
//         Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis
//         molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet
//         magna a ultrices. Aenean pellentesque placerat lacus imperdiet
//         efficitur. In felis nisl, luctus non ante euismod, tincidunt bibendum
//         mi. In a molestie nisl, eu sodales diam. Nam tincidunt lacus quis magna
//         posuere, eget tristique dui dapibus. Maecenas fermentum elementum
//         faucibus. Quisque nec metus vestibulum, egestas massa eu, sollicitudin
//         ipsum. Nulla facilisi. Sed ut erat ligula. Nam tincidunt nunc in nibh
//         dictum ullamcorper. Class aptent taciti sociosqu ad litora torquent per
//         conubia nostra, per inceptos himenaeos. Etiam ornare rutrum felis at
//         rhoncus. Etiam vel condimentum magna, quis tempor nulla.
//       </p>
//       <section id="contact-me" class="contact-me">
//         <div class="text-center">
//             <img src={contact} alt="Contact Stock Photo"
//             width="100px"
//             height="100px"></img>
//         </div>
//         <h2 class="contact-info text-center"> Contact and Connect with Me! </h2>
//         </section>
//         <br></br>
//         <div class="text-center">
//             <ul class="contact-images">
//                 <li>
//                     <img src={email} alt="EmailIcon"
//                     width="110"
//                     height="110"></img>
//                 </li>
//                 <li>
//                     <img src={linkedin} alt="LinkedInIcon"
//                     width="100"
//                     height="100"></img>
//                 </li>
//                 <li>
//                     <img src={phone} alt="PhoneIcon"
//                     width="100"
//                     height="100"></img>
//                 </li>
//             </ul>
//         </div>
//         <ul class="contact-names text-center">
//            <li>
//                Email: <a href="mailto:arpappagallo@gmail.com">arpappagallo@gmail.com</a>
//            </li>
//            <li>
//                 LinkedIn: <a href= "https://www.linkedin.com/in/alex-pappagallo-3630781a2/" >My LinkedIn Profile</a>
//             </li>
//            <li>
//                 Phone: <a href="tel:(732)-610-6636">(732)-610-6636</a>
//            </li>
//         </ul>
//     </div>
//   );
// }
