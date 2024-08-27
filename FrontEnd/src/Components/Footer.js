import React from "react";
import './Components.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';

//imported Icons
import {HiPhone} from 'react-icons/hi'
import {MdEmail} from 'react-icons/md'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'


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
    <div className='foot'>

      <div className="secContainer container">
        <div className="content grid">

          <div data-aos='fade-up' data-aos-duration='2000' className="row">
            <div className="spanText">
              CONTACT US
            </div>

            <div className="contactDiv">
              <span className="flex">
                <HiPhone className='icon'/>
                <span>+639 334 556 671</span>
              </span>
              <span className="flex">
                <MdEmail className='icon'/>
                <span>trekssafari@gmail.com</span>
              </span>
              <span className="flex">
                <AiOutlineWhatsApp className='icon'/>
                <span>+639 334 556 671</span>
              </span>
            </div>
          </div>

          <div data-aos='fade-up' data-aos-duration='2000' className="row">
            <div className="spanText">
            POPULAR NEWS
            </div>

            <div className="singleNews">
              <span className="text">
              Your Personal Guide to the hiking places in the Philippines
              </span>
              <p>
                August 01, 2024
              </p>
            </div>

            <div className="singleNews">
              <span className="text">
              With ForeverHiking, you will be treated like family. 
              Your safety and enjoyment is our primary mission.<br/> 
              We are excited to meet you!
              </span>
              <p>
                August 01, 2024
              </p>
            </div>
          </div>

          <div data-aos='fade-up' data-aos-duration='2000' className="row">
             <div className="spanText">
              QUICK LINKS
             </div>
             <div className="footerLinks">
              <ul>
                <Link to='/about' className="text-dark">About Us</Link><br/>
                <Link to='/ourpurpose' className="text-dark">Our Purpose</Link><br/>
                <Link to='/whattowear' className="text-dark">What to Wear</Link><br/>
                <Link to='/safety' className="text-dark">Safety</Link><br/>
                <li>Careers</li>
              </ul>
             </div>
          </div>

        </div>
        <div  className="bottomDiv flex container-fluid">
          <p >TreksSafari 2024 - All rights reserved</p>

          <div className="social flex">
            <FaFacebookF className='icon'/>
            <AiOutlineTwitter className='icon'/>
            <AiFillYoutube className='icon'/>
            <AiFillInstagram className='icon'/>
          </div>

          <a href="#top" className="nav-link">Back to Top</a>
        </div>
      </div>
      
    </div>
  )
}

export default Footer