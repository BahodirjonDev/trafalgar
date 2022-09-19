import React from 'react';
import logo from './assets/logo.png'
const Footer = () => {
    return (
        <>
         <footer>
            <div className="about">
                <img src={logo} alt="logo" />
                <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
                <p>
                    ©Trafalgar PTY LTD 2020. All rights reserved
                </p>
            </div>
            <div className="company">
                <h1>Company</h1>
                <p>About</p>
                <p>Testmoniats</p>
                <p>Find a doctor</p>
                <p>Apps</p>
            </div>
            <div className="region">
                <h1>Region</h1>
                <p>Indonesia</p>
                <p>Singapore</p>
                <p>Honkong</p>
                <p>Canada</p>
            </div>
            <div className="Help">
                <h1>Help</h1>
                <p>Help Center</p>
                <p>Contact support</p>
                <p>Instructions</p>
                <p>How it works</p>
            </div>
        </footer>   
        </>
    );
};

export default Footer;