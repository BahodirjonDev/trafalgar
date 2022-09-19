import React from 'react';
import header from './assets/header.png'
const Header = () => {
    return (
        <>
            <header>
                <div className="header-texts">
                    <h1>Virtual healthcare for you</h1>
                    <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
                    <button>
                        Consult today
                    </button>
                </div>
                <div className="header-img">
                    <img src={header} alt="header-img" />
                </div>
            </header>
        </>
    );
};


export default Header;