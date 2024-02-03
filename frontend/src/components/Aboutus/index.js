import React from "react";
import index from "./index.css";
import aboutus from '../../assets/aboutus.jpeg'
import ig from '../../assets/ig.png'
import linkedin from '../../assets/linkedin.png'

import mail from '../../assets/mail.png'

export const Aboutus = () => {
  return (
    < >
      <div className="Aboutus" id='About'>
        <div className="about-flexbox">
          <div className="left-about">
            <div className="head-and-tag">
              <div className="about-head">
                <div style={{color: '#999'}}>ABOUT</div>
                <div>
                  <span className="trading-about">TRADING</span> <span style={{color:'white'}}>TIERS</span>
                </div>
              </div>
              <div className="about-tag">
                AT TRADING TIERS, WE'RE HERE TO HELP TRADERS UNLOCK THEIR
                TRADING POTENTIAL. WITH OVER 5 YEARS OF SUCCESSFUL TRADING
                EXPERIENCE, WE'VE GUIDED OVER 200 STUDENTS TO BECOME PROFITABLE
                TRADERS. JOIN US TO BECOME A SKILLED TRADER AND GAIN PROPER
                KNOWLEDGE NEEDED FOR LASTING SUCCESS. OUR TOP-NOTCH COURSES
                PROVIDE ADVANCED KNOWLEDGE, PAVING THE PATH TO FINANCIAL
                INDEPENDENCE.
              </div>
            </div>
            <div className="our-numbers">
              <div className="about-numbers">
                <div className="flex-col-disp">
                  <div className="about-left-nums">200+</div>
                  <div className="green-color">Students</div>
                </div>
                <div className="flex-col-disp">
                  <div className="about-left-nums">20+</div>
                  <div className="green-color">Courses</div>
                </div>
                <div className="flex-col-disp">
                  <div className="about-left-nums">5+</div>
                  <div className="green-color">Mentors</div>
                </div>
              </div>
              <div className="rapid-growth">
                <div className="zero-1">
                    <div className="zero-1-num">01</div>
                    <div className="zero-1-adv">
                        <div>Rapid <br />  Growth</div>
                        <div>Triple your profits</div>
                    </div>
                </div>
                <div className="zero-2">
                <div className="zero-1-num">02</div>
                    <div className="zero-1-adv">
                        <div>Beginner<br /> Friendly</div>
                        <div>Easy for Newbies</div>
                    </div>
                </div>
                <div className="zero-3">
                <div className="zero-1-num">03</div>
                    <div className="zero-1-adv">
                        <div>Trending <br />  Techniques</div>
                        <div>Updated strategies</div>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right-about-img">
            <img src={aboutus} className="right-about-img-1"/>
            <div className="social">
               <img className="social-logo" src={ig}/>
               
               <img className="social-logo" src={mail}/>
               <img className="social-logo" src={linkedin}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
