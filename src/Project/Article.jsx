import React from 'react';
import line from './assets/line.png'
const Article = () => {
    const cards = [
        {
            img:'/src/Project/assets/card1.png',
            title:'Disease detection, check up in the laboratory',
            blog:'In this case, the role of the health laboratory is very important to do a disease detection...'
        },
        {
            img:'/src/Project/assets/card2.png',
            title:'Herbal medicines that are safe for consumption',
            blog:'Herbal medicine is very widely used at this time because of its very good for your health...'
        },
        {
            img:'/src/Project/assets/card3.png',
            title:'Natural care for healthy facial skin',
            blog:'A healthy lifestyle should start from now and also for your skin health. There are some...'
        }
    ]
    return (
        <>
            <article>
                <div className="article-title" style={{textAlign:'center',marginTop:'25px'}}>
                    <h1 >
                    Check out our latest article
                    </h1>
                    <img src={line} alt="" />
                </div>
                <div className="article cards">
                    {cards.map(card=>(
                        <div className='card'>
                            <img src={card.img} alt="card" />
                            <h1>{card.title}</h1>
                            <p>{card.blog}</p>
                        </div>
                    ))}
                </div>
                <div style={{display:'flex',justifyContent:'center'}} className="center">

                <button className="learn btn">View all</button>
                </div>
            </article>   
        </>
    );
};

export default Article;