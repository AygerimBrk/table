import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer_start">
        <h3>Get connected with us on social networks:</h3>
        <div className="footer_icon">
          <img
            className="icon"
            src="https://cdn-icons-png.flaticon.com/128/6422/6422199.png"
            alt="error"
          />
          <img
            className="icon"
            src="https://cdn-icons-png.flaticon.com/128/6422/6422200.png"
            alt="error"
          />
          <img
            className="icon"
            src="https://cdn-icons-png.flaticon.com/128/3917/3917033.png"
            alt="error"
          />
          <img
            className="icon"
            src="https://cdn-icons-png.flaticon.com/128/3917/3917567.png"
            alt="error"
          />
          <img
            className="icon"
            src="https://cdn-icons-png.flaticon.com/128/3916/3916880.png"
            alt="error"
          />
        </div>
      </div>
      <div className="footer_info">
        <div className="control_text">
          <h3>Company Name</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione,
            labore?
          </p>
        </div>
        <ul className="footer__list">
          <li className="list">
            <h3>Products</h3>
          </li>
          <li className="list">
            <a href="#">React</a>
          </li>
          <li className="list">
            <a href="#">Javascript</a>
          </li>
        </ul>
        <div>
          <h3>Usefull Links</h3>
          <a href="#">Setting</a>
        </div>
        <div>
          <h3>Contact</h3>
          <p>Tabyshalieva 28, Bishkek</p>
          <a href="#">info@makers.com</a>
          <br />
          <a href="#">0501000111</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
