import React from 'react';
import line from './assets/line.png'
import care from './assets/care.png'
import consult from './assets/consult.png'
import details from './assets/details.png'
import pharm from './assets/pharm.png'
import search from './assets/search.png'
import tracking from './assets/tracking.png'
const Services = () => {
    const cards = [
        {
            img:search,
            title:'Search doctor',
            desc:'Choose your doctor from thousands of specialist, general, and trusted hospitals'
        },
        {
            img:pharm,
            title:'Online pharmacy',
            desc:'Buy your medicines with our mobile application with a simple delivery system'
        },
        {
            img:consult,
            title:'Consultation',
            desc:'Free consultation with our trusted doctors and get the best recomendations'
        }
    ]
    const cards2 = [
        {
            img:details,
            title:'Details info',
            desc:'Free consultation with our trusted doctors and get the best recomendations'
        },
        {
            img:care,
            title:'Emergency care',
            desc:'You can get 24/7 urgent care for yourself or your children and your lovely family'
        },
        {
            img:tracking,
            title:'Tracking',
            desc:'Track and save your medical history and health data'
        }
    ]
    return (
        <>
            <div className="services">
                <h1 className="service-title">
                    Our services
                </h1>
                <img className="hr" src={line} alt='line' />
                <div className="service-text">
                    <p style={{textAlign:'center',marginLeft:'15%'}}>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
                </div>
            </div>
            <div className="cards">
            {cards.map(card=>(
                <div className="card">
                    <img src={card.img} alt="card-image" />
                    <h1 className="card-title">{card.title}</h1>
                    <p className="card-desc">{card.desc}</p>
                </div>
            ))}
                </div> 
            <div className="cards2">
             {cards2.map(card=>(
                <div className="card2">
                    <img src={card.img} alt="card-image" />
                    <h1 className="card-title">{card.title}</h1>
                    <p className="card-desc">{card.desc}</p>
                </div>
            ))}
            </div>  
            <div className="btn-learn">

            <button className='learn'>Learn more</button>
            </div>
        </>
    );
};

export default Services;