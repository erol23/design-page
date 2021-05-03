import './Navbar.css';
import { useState } from 'react';

const Navbar = () => {

    const [navbar, setNavbar] = useState(false)

    const handleClick = () => {
        setNavbar(!navbar)
    }

    return (
        <div>
            <div className="header">
                <span>design</span>
                <div className="navbar">
                    <a href="works">Works</a>
                    <a href="about">About</a>
                    <a href="career">Career</a>
                    <a href="contact">Contact</a>
                </div>
                <div className="icon">
                    <i className="fas fa-bars" onClick={handleClick}></i>
                </div>
            </div>
            <div className="icon-navbar">
                {navbar ? <ul>
                    <li><a href="works">Works</a></li>
                    <li><a href="about">About</a></li>
                    <li><a href="career">Career</a></li>
                    <li><a href="contact">Contact</a></li>
                </ul>: null }
            </div>  
        </div>
    )
}

export default Navbar;