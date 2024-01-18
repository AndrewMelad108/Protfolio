import "./Contact.css";
import Lottie from "lottie-react";
import ContactAnimation from "../../animation/contact-us.json";
import { useForm, ValidationError } from "@formspree/react";
export default function Contact() {
  const [state, handleSubmit] = useForm("xvojnrol");

  return (
    <div className="contact">
      <div className="title-info flex">
        <span className="icon-envelope"></span>
        <h1 className="title">Contact Me</h1>
      </div>
      <p className="sub-title">
        Contact us more information and Get notified when i publish something
        new .
      </p>
      <div className="flex contact-content">
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="Email">Email Address:</label>
          <input name="email" id="email" type="email" />
          <ValidationError field="email" prefix="email" errors={state.errors} />
          <label htmlFor="Email">Your message:</label>
          <textarea name="message" id="message"></textarea>
          <ValidationError
            field="message"
            prefix="message"
            errors={state.errors}
          />
          <button
            type="submit"
            disabled={state.submitting}
            className="contact-btn"
          >
            {state.submitting ? "Submitting......" : "Submit"}
          </button>
          <h6 className="Message">
            {state.succeeded ? (
              <h2> Thank you, the email was sent successfully &#128540;</h2>
            ) : (
              <h2> Please fill out all data fields &#129300;</h2>
            )}
          </h6>
        </form>
        <Lottie className="contact-image" animationData={ContactAnimation} />
      </div>
    </div>
  );
}
