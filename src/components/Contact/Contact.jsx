import React from "react";

import { FaInstagramSquare, FaFacebookF, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <section id="contact">
        <h1>CONTACT Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi aliquid
          similique voluptas!
        </p>
        <div className="container">
          <img src="/about.jpg" alt="about" />
          <div className="content">
            <h3>Let's connect</h3>
            <div>
              <p>Phone</p>
              <span>+001 1234 999</span>
            </div>
            <div>
              <p>Email</p>
              <span>mk@gmail.com</span>
            </div>
            <div>
              <p>Address</p>
              <span>House No.123 Sector A-1</span>
            </div>
            <ul>
              <Link to="#" target="/">
                <FaInstagramSquare />
              </Link>
              <Link to="#" target="/">
                <FaFacebookF />
              </Link>
              <Link to="#" target="/">
                <FaTwitter />
              </Link>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
