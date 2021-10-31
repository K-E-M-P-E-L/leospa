import React from 'react'
import "./footer.scss"
import { Link } from 'react-router-dom'
import logo from "../../Picture/logo.png"
import { FaFacebookF } from 'react-icons/fa'
import { ImTwitter } from 'react-icons/im'
import { ImVimeo } from "react-icons/im"
import { FaInstagram } from 'react-icons/fa'
import { HashLink } from 'react-router-hash-link';

function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }

    return (
        <footer>
            <div className="footerCon">
                <div className="footerLogo">
                    <Link to="/" onClick={scrollToTop}><img src={logo} alt="" /></Link>
                </div>
                <div className="footerUlCon">
                    <ul className="footerLinks">
                        <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
                        <li><HashLink to="#About">About</HashLink></li>
                        <li><Link to="/Features">Feature</Link></li>
                        <li><HashLink to="#Service">Service</HashLink></li>
                        <li><HashLink to="#Contact">Contact</HashLink></li>
                    </ul>
                </div>
                <div className="footerlogos">
                    <Link to="https://www.facebook.com/"><FaFacebookF style={{ color: "#3a414e", width: "20px", height: "20px" }}></FaFacebookF></Link>
                    <p>|</p>
                    <Link to="https://twitter.com/"><ImTwitter style={{ color: "#3a414e", width: "20px", height: "20px" }}></ImTwitter></Link>
                    <p>|</p>
                    <Link to="https://vimeo.com/"><ImVimeo style={{ color: "#3a414e", width: "20px", height: "20px" }}></ImVimeo></Link>
                    <p>|</p>
                    <Link to="https://www.instagram.com/"><FaInstagram style={{ color: "#3a414e", width: "20px", height: "20px" }}></FaInstagram></Link>
                </div>
                <div className="footerCopyright">
                    <p>© COPYRIGHT 2019 <Link to="/" onClick={scrollToTop} className="footerUrl">THEMEIES.COM.</Link> ALL RIGHTS RESERVED.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
