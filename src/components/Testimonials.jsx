import React from 'react'
import p1 from '../assets/p1.jpeg'
import p2 from '../assets/p2.jpeg'
import p3 from '../assets/p3.jpeg'
import { StarFilledIcon } from '@radix-ui/react-icons'
import { Link } from 'react-router-dom'

function Testimonials({hidden}) {
    return (
        <div className='testimonials-container'>
            <div className="row">
                <h2>HUR ÄR DET ATT JOBBA HOS OSS?</h2>

                <div className="card-container">
                    
                    <Card
                        image={p1}
                        name='Loui Pratt'
                        text='Resan med Futurum har på väldigt kort tid varit otroligt händelserik. Tack vare våra grymma partners, samarbeten och självklart teamet - så är vi påväg mot nya höjder.' />

                    <Card
                        image={p3}
                        name='Malte Binz'
                        text='Att få arbete väldigt nära med väldigt duktiga personer är något jag inte underskattar. Alla grymma säljare som tipsar varandra och lär ut sina kunskaper hjälper verkligen alla här att utvecklas!' />

                    <Card
                        image={p2}
                        name='Elias Olsson'
                        text='Min tid på Futurum har minst sagt varit fartfylld. Vi växer för varje dag som går, inte minst i våra kunskaper och färdigheter.' />
                </div>

                <div className="btn-wrapper-services">
                    <Link to='/karriar'>
                <button className={hidden ? 'no' : 'contact-btn'}>Jobba hos oss</button>
                </Link>
                </div>
                
            </div>
        </div>
    )
}

const Card = ({ image, text, name }) => {
    return (
        <div className="testimonial-card">
            <div className="top">
                <img src={image} alt="" />
                <div className="testimonial-card-info-text">
                    <h4>{name}</h4>
                    <div className="rating">
                        <StarFilledIcon className='star' />
                        <StarFilledIcon className='star' />
                        <StarFilledIcon className='star' />
                        <StarFilledIcon className='star' />
                        <StarFilledIcon className='star' />
                    </div>

                </div>
            </div>
            <p>{text}</p>
        </div>
    )
}

export default Testimonials
