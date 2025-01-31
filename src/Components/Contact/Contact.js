import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact section bg-primary" id="contact_us">
      <div className="container">
        <h2 className="section__title">Contact Me</h2>
        <div>
          <h1 className="section__titleTwo">Let's work together</h1>
          <p className="section__titlePera">
            I help bring your ideas to life by supporting your digital
            transformations. As an experienced Frontend Software Engineer, I
            turn your concepts into modern, user-friendly, and responsive web
            applications. Together, we can create innovative digital solutions
            that bring your vision to reality and strengthen your presence in
            the digital space.
          </p>
        </div>
        {/* <form action="">
          <input type="text" placeholder="your name" className="box" />
          <input type="email" placeholder="your email" className="box" />
          <input type="text" placeholder="subject" className="box" />
          <textarea
            name=""
            className="box"
            placeholder="your message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <input type="submit" value="send message" className="btn" />
        </form> */}

        <form action="" class="contact-form">
          <div class="row">
            <input type="text" placeholder="First Name" class="box" />
            <input type="text" placeholder="Last Name" class="box" />
          </div>
          <div class="row">
            <input type="email" placeholder="Email" class="box" />
            <input type="text" placeholder="Phone Number" class="box" />
          </div>
          <div class="row">
            <textarea
              class="box"
              placeholder="Your Message"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <input type="submit" value="Send Message" class="btnContact" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
