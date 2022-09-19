import React from 'react';
import img1 from './assets/trafalgar-illustration sec02 1.png'
import img2 from './assets/trafalgar-illustration sec03 1.png'
import test from './assets/testimonials.png'
const More = () => {
    return (
        <>
            <div className="sec1">
                <img src={img1} alt="section-image" />
                <div className="sec-texts">
                    <h1>Leading healthcare providers</h1>
                    <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver</p>
                <button className='learn sec-btn'>Learn more</button>
                </div>
            </div>
            <div className="sec2">
                <div className="sec-texts">
                    <h1>Download our mobile apps</h1>
                    <p>Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely</p>
                <button className='learn sec-btn'>Download</button>
                </div>
                <img src={img2} alt="section-image" />
            </div>
            <div className="test">
                <img src={test} alt="test" style={{width:'80%'}} />
            </div>
        </>
    );
};

export default More;