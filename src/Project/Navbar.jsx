import React from 'react';
import logo from './assets/logo.png'
 
const Navbar = () => {
    return (
        <>
            <nav>
                <div className="logo">
                    <a href="/">
                        <img src={logo} alt="logo" />
                    </a>
                </div>
                <div className="nav">
                    <ul>
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">Find a doctor</a>
                        </li>
                        <li>
                            <a href="">Apps</a>
                        </li>
                        <li>
                            <a href="">Testimonials</a>
                        </li>
                        <li>
                            <a href="">About us</a>
                        </li>
                    </ul>
                </div>
                <div className="dropdown">
                    <button className="down">
                        <select name="menus" id="menu">
                            <option value="">
                                <a href=""><i class="fa-thin fa-list-dropdown"></i></a>
                            </option>
                            <option value="">
                                <a href="">Home</a>
                            </option>
                            <option value="">
                                <a href="">Find a doctor</a>
                            </option>
                            <option value="">
                                <a href="">Apps</a>
                            </option>
                            <option value="">
                                <a href="">Testimonials</a>
                            </option>
                            <option value="">
                                <a href="">About us</a>
                            </option>
                        </select>
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;