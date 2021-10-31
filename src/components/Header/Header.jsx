import React, { useState } from 'react'
import logo from "../../Picture/logo.png"
import { Link } from 'react-router-dom'
import "./header.scss"
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import { HashLink} from 'react-router-hash-link';

function Header() {

    const [navbarOpen, setNavbarOpen] = useState(false)

    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
        setNavbarOpen(!navbarOpen)
    }

    const closeMenu = () => {
        setNavbarOpen(false)
    }

    return (
        <header>
            <div className="headerContainer">
                <div className="logoContainer">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                    <div className="spacer">

                    </div>
                </div>
                <div className="navContainer">
                    <nav className="navBar">
                        <div className="linkContainer">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><HashLink to="#About">About</HashLink></li>
                                <li><Link to="/Features">Feature</Link></li>
                                <li><HashLink to="#Service">Service</HashLink></li>
                                <li><HashLink to="#Contact">Contact</HashLink></li>
                            </ul>
                        </div>

                        <div className="burgerMenu">

                            {/* burger er fra https://ibaslogic.com/how-to-add-hamburger-menu-in-react/ */}

                            <button onClick={handleToggle} className="burgerMenuButton">{navbarOpen ? (
                            <MdClose style={{ color: "#ff817e", width: "40px", height: "40px" }} />) : (
                            <FiMenu style={{ color: "#ff817e", width: "40px", height: "40px" }} />)}
                            </button>

                            <div className="burgerUl">

                                <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                                    <li><Link to="/" activeClassName="active-link" onClick={() => closeMenu()}>Home</Link></li>
                                    <li><HashLink to="#About" activeClassName="active-link" onClick={() => closeMenu()}>About</HashLink></li>
                                    <li><Link to="/Features" activeClassName="active-link" onClick={() => closeMenu()}>Feature</Link></li>
                                    <li><HashLink to="#Service" activeClassName="active-link" onClick={() => closeMenu()}>Service</HashLink></li>
                                    <li className="menuButtom"><HashLink to="#Contact" activeClassName="active-link" onClick={() => closeMenu()}>Contact</HashLink></li>
                                </ul>
                                
                            </div>

                        </div>


                    </nav>
                </div>
            </div>
        </header>
    )
}


export default Header