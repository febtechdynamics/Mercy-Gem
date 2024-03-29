import React from 'react';
import { Link } from 'react-router-dom';
import "./footer.css"
import whatsapp from '../../../public/images/whatsapp.png';
import logo from '../../../public/images/logo.png'; 
import locationIcon from '../../../public/images/location.png'; 
import phoneIcon from '../../../public/images/phone.png'; 
import mailIcon from '../../../public/images/mail.png'; 
import fbIcon from '../../../public/images/fb.png'; 
import twitterIcon from '../../../public/images/twitter.png'; 
import linkedinIcon from '../../../public/images/linkedin.png'; 
import instaIcon from '../../../public/images/insta.png'; 

const Footer = () => {
  return (
    <>
      <section className="info_section">
        <div className="container">
          <div className="info_container">
            <div className="row">
              <div className="col-md-3">
                <div className="info_logo">
                  <Link to="/">
                    <img src={logo} alt="Logo" />
                    <span>MG</span>
                  </Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="info_contact">
                  <Link to="/">
                    <img src={locationIcon} alt="Location" />
                    <span>Address</span>
                  </Link>
                  <br />
                  Addis Ababa Bole In front of Harmony Hotel SA Building 6th floor off.no.2
                </div>
              </div>
              <div className="col-md-3">
                <div className="info_contact">
                  <Link to="/">
                    <img src={phoneIcon} alt="Phone" />
                    <span>+01 1234567890</span>
                  </Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="info_contact">
                  <Link to="/">
                    <img src={mailIcon} alt="Email" />
                    <span>demo@gmail.com</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="info_form">
              <div className="d-flex justify-content-center"></div>
              <form action="">
                <div className="email_box">
                  <Link to="/whatsapp">
                    <button>
                      <span>
                        <img src={whatsapp} alt="WhatsApp" />
                      </span>
                      Message us on WhatsApp
                    </button>
                  </Link>
                </div>
              </form>
            </div>
            <div className="info_social">
              <div className="d-flex justify-content-center">
                <h5 className="info_heading">Follow Us</h5>
              </div>
              <div className="social_box">
                <Link to="#">
                  <img src={fbIcon} alt="Facebook" />
                </Link>
                <Link to="#">
                  <img src={twitterIcon} alt="Twitter" />
                </Link>
                <Link to="#">
                  <img src={linkedinIcon} alt="LinkedIn" />
                </Link>
                <Link to="#">
                  <img src={instaIcon} alt="Instagram" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
