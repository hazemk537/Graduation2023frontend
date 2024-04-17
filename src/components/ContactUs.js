import React from "react";
import "../styles/contactus.css";
function ContactUs() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.elements[0].value;
    const message = event.target.elements[1].value;
    //#todo_4
    console.log(message);
    console.log(email);
    event.target.reset();
  };
  return (
    
    <div id="contact_us"  className="contact-container">
      <h2 className="contact-heading">Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="email"
          className="contact-input"
          placeholder="email@example.com"
          required
        />

        <textarea
          className="contact-textarea"
          placeholder="Leave your message"
          required
        ></textarea>
        <button type="submit" className="contact-submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
