// import React from 'react';
import './Footer.css';
import { FaInstagram, FaWhatsapp, FaFacebook, FaTwitter, FaLinkedin, FaComment } from 'react-icons/fa';
// import { SiVisa, SiMastercard, SiPaypal, SiAmericanexpress, SiDiscover } from 'react-icons/si';

import React from 'react';
import './Footer.css';


const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Connect With Us Section */}
      <div className="connect-section">
        <div className="connect-heading">
          <strong><h2>Connect With Us</h2></strong>
        </div>
        <div className="social-links-container">
          <div className="social-link">
            <FaInstagram className="text-light mr-2" />
            <span>Instagram</span>
          </div>
          <div className="social-link">
            <FaWhatsapp className="text-light mr-2" />
            <span>WhatsApp</span>
          </div>
          <div className="social-link">
            <FaFacebook className="text-light mr-2" />
            <span>Facebook</span>
          </div>
          <div className="social-link">
            <FaTwitter className="text-light mr-2" />
            <span>Twitter</span>
          </div>
          <div className="social-link">
            <FaLinkedin className="text-light mr-2" />
            <span>LinkedIn</span>
          </div>
        </div>
      </div>

      {/* Payment Modes Section */}
      <div className="payment-section">
        <strong><h2>Payment Modes</h2></strong>
        <h3>MPESA PAYBILL</h3>
        <h3>AIRTEL MONEY</h3>
      </div>

      {/* Useful Links Section */}
<div className="useful-links-section">
  <strong><h2>Useful Links</h2></strong>
  <ul className="list-unstyled">
    <li><a href="/About" className="text-light">About</a></li>
    <li><a href="/Contact" className="text-light">Contact</a></li>
    <li><a href="/Hire" className="text-light">Hire</a></li>
  </ul>
</div>

      {/* Customer Reviews Section */}
<div className="reviews-section">
  <strong><h2>Customer Reviews</h2></strong>
  <ul className="list-unstyled">
    <li>
      <FaComment className="text-light ml-2" />
       Great service! The rides are always on time.
    </li>
    <li>
      <FaComment className="text-light ml-2" />
       Excellent communication and friendly drivers.
    </li>
  </ul>
</div>



      {/* Copyright and Contact Section */}
      <div className="copyright-section">
        <p>Contact us: <a href="mailto:info@swiftrides.com" className="text-light">info@swiftrides.com</a></p>
        <p>&copy; 2024 Swift Rides</p>
      </div>
    </footer>
  );
};

export default Footer;
