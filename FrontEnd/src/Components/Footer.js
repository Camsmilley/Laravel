import React, { useEffect } from "react";
import { Link } from 'react-router-dom';

// Imported Icons
import { HiPhone } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter, AiFillYoutube, AiFillInstagram, AiOutlineWhatsApp } from 'react-icons/ai';

const Footer = () => {
  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo(0, 0);
    };

    // Add event listener for page refresh or navigation
    window.addEventListener('beforeunload', handleScrollToTop);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('beforeunload', handleScrollToTop);
    };
  }, []);

  return (
    <footer className="bg-light text-dark py-4">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h5 className="mb-3">CONTACT US</h5>
            <div className="contactDiv">
              <div className="d-flex align-items-center mb-2">
                <HiPhone className="icon me-2" />
                <span>+639 334 556 671</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <MdEmail className="icon me-2" />
                <span>trekssafari@gmail.com</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <AiOutlineWhatsApp className="icon me-2" />
                <span>+639 334 556 671</span>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h5 className="mb-3">POPULAR NEWS</h5>
            <div className="singleNews mb-3">
              <span className="text">Your Personal Guide to the hiking places in the Philippines</span>
              <p>August 01, 2024</p>
            </div>
            <div className="singleNews">
              <span className="text">With ForeverHiking, you will be treated like family. Your safety and enjoyment is our primary mission. We are excited to meet you!</span>
              <p>August 01, 2024</p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <h5 className="mb-3">QUICK LINKS</h5>
            <div className="footerLinks">
              <ul className="list-unstyled">
                <li><Link to="/about" className="text-dark">About Us</Link></li>
                <li><Link to="/ourpurpose" className="text-dark">Our Purpose</Link></li>
                <li><Link to="/whattowear" className="text-dark">What to Wear</Link></li>
                <li><Link to="/safety" className="text-dark">Safety</Link></li>
                <li>Careers</li>
              </ul>
            </div>
          </div>
        </div>

       
      </div>
      <div className="row mt-4 py-3 text-white" style={{backgroundColor: '#3f6b29'}}>
          <div className="col-12 text-center">
            <p className="mb-0">TreksSafari 2024 - All rights reserved</p>
          </div>
          <div className="col-12 text-center mt-2">
            <div className="social d-flex justify-content-center">
              <FaFacebookF className="icon mx-2" />
              <AiOutlineTwitter className="icon mx-2" />
              <AiFillYoutube className="icon mx-2" />
              <AiFillInstagram className="icon mx-2" />
            </div>
          </div>
          <div className="col-12 text-center mt-2">
            <a href="#top" className="nav-link">Back to Top</a>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
