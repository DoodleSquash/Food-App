import React from 'react'
import './Footer.css' 
import { assets } from '../../assets/assets'  

const Footer = () => {
  return (
    <div className="footer" id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="logo" />
                <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with</p>
                <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="logo" />
                <img src={assets.twitter_icon} alt="logo" />
                <img src={assets.linkedin_icon} alt="logo" />  
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+897-987-6780</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
               
        </div>
        <hr/>
        <p className='footer-copyright'>Copyright 2024 &copyright Tomato.com - All Right Resreved. </p>
    </div>
  )
}

export default Footer