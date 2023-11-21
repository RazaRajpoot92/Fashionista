import React from 'react'
import "./Footer.css"
import footer_logo from "../../assets/logo_big.png"
import instagram from "../../assets/instagram_icon.png"
import pintester from "../../assets/pintester_icon.png"
import whatsapp from "../../assets/whatsapp_icon.png"

const Footer = () => {
  return (
    <div className='footer'>

        <div className='footer-logo'>

            <img src={footer_logo} alt="" />
            <p>Fashionista</p>

        </div>

        <ul className='footer-links'>
            <li className="footer-link">Company</li>
            <li className="footer-link">Products</li>
            <li className="footer-link">Offices</li>
            <li className="footer-link">About</li>
            <li className="footer-link">Contact</li>
        </ul>

        <div className="footer-icons">

            <div className="footer-icon">
                <img src={instagram} alt="" />
            </div>

            <div className="footer-icon">
                <img src={pintester} alt="" />
            </div>

            <div className="footer-icon">
                <img src={whatsapp} alt="" />
            </div>

        </div>

        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2023 - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer;
