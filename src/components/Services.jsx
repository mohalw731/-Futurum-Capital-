import { useRef } from 'react';
import b2b from '../assets/b2b.svg';
import mote from '../assets/mote.svg';
import { Link } from 'react-router-dom';

const Services = ({ servicesRef }) => {
    return (
        <div className='services-container' ref={servicesRef}>
            <div className="row">
                <h2>säljbolag med heltäckande tjänster</h2>

                <div className="card-container">
                    <div className="card">
                        <img src={b2b} alt="" />
                        <h3>Försäljning</h3>
                        <ul>
                            <li>B2B / B2C försäljning</li>
                            <li>Kall / varm försäljning</li>
                            <li>Ny kund / Merförsäljning</li>
                        </ul>
                    </div>

                    <div className="card">
                        <img src={mote} alt="" />
                        <h3>Mötesbokning</h3>
                        <ul>
                            <li>Skräddarsydd mötesbokning</li>
                            <li>Nykundsbearbetning</li>
                            <li>Kvalitativa säljmöten</li>
                        </ul>
                    </div>
                </div>

                <div className="btn-wrapper-services">
                    <Link to='/kontakt'>
                        <button className='contact-btn'>Kontakta oss</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Services;
