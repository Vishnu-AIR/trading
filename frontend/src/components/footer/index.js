import React from 'react'
import index from './index.css'
import logo from '../../assets/logotf.png'
import { PiWechatLogoBold } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";import { TiSocialLinkedinCircular } from "react-icons/ti";

export const Footer = () => {
  return (
    <>
    <div className='footer'>
       <div className='col-foot'>
        <div className='flex-foot'>
            <img src={logo} className='footer-logo'/>
            <div className='partition-footer'></div>
            <div className='socials'>
                <div>Follow Our Social Media</div>
                <div className='logos'>
                <FaWhatsapp className="log"/>
                <FaInstagram className="log"/>
                <CiFacebook className="log"/>

<BsTwitterX className="log"/>
<TiSocialLinkedinCircular className="log"/>                </div>
            </div>
            <div className='navigator'>
                <div>Home </div>
                <div>About Us</div>
                <div>Courses</div>
                <div>Community</div>
            </div>
            <div className='connect-wus'>
                <div className='flex-display'><PiWechatLogoBold style={{color:'white',fontSize:'36px'}}/><div className='text-cws'>Connect with Us</div> </div>
                <div>We’d like to get your valuable feedback to give you an even better experience.</div>
                <button className='connect'>Connect</button>
            </div>
        </div>
       </div>
    </div>
    </>
  )
}
