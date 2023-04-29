import React from "react";
import "./Contact.css";

function Contact() {
  return (
    
    <div className="contact-us-container">
         <h2>Contact Us</h2>
        <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14887.666760177664!2d79.03254517835249!3d21.115887325218193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bff48019bc0d%3A0x5b3c81aae7d37473!2sTrimurtee%20Nagar%2C%20Nagpur%2C%20Maharashtra%20440022!5e0!3m2!1sen!2sin!4v1677685580849!5m2!1sen!2sin" 
      width="550"
       height="350" 
       style={{border:0}}
       allowfullscreen="" 
       loading="lazy" 
       referrerpolicy="no-referrer-when-downgrade">
        </iframe>
     
      
      <p>Please fill out the form below to get in touch with us.</p>
      <form action="https://formspree.io/f/mjvdrrge"
      method="POST">
        
        <input type="text" id="name"  placeholder="Name" name="name" />

       <br></br>
        <input type="email" id="email"   placeholder="Email" name="email" />

        <br></br>
        <textarea id="message"   placeholder="Message" name="message"></textarea>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;

