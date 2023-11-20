import React from "react";
import "../styles/ContactForm.css";

function ContactForm() {
  return (
    <div className="form__container--background">
      <div className="form__container">
        <h1 className="form__heading">Contact Representative</h1>
        <form>
          <input placeholder="Name" />
          <input placeholder="Email" />
          <input placeholder="Subject" />
          <textarea placeholder="Message" rows="4"></textarea>
          <button className="form__button">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
