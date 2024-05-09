import React from 'react'
import about from '../assets/about.png'
import { Link } from 'react-router-dom'

function About({aboutRef}) {
    return (
        <div className="row" >
            <div className='about-container'ref={aboutRef} >
                <div className="about-text">
                    <h2>OM OSS</h2>
                    <p>
                        Futurum Capital, startat 2022, har snabbt etablerat sig som en pålitlig och innovativ aktör inom <span className="bold">telemarketing.</span> Med grundare och ledningsteam som har djup erfarenhet inom <span className="bold">försäljning,</span> har vi skapat en stark grund för framgångsrika samarbeten.

                        <br />
                        <br />

                        Tillsammans med våra fantastiska, hög presterande och engagerade medarbetare har vi fått ett gott rykte och snabbt växt våra avdelningar och belönat medarbetare!
                    </p>

<Link to='/kontakt'>
                    <button class="cta">
                        <span class="hover-underline-animation"> Kontakta oss</span>
                        <svg
                            id="arrow-horizontal"
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="10"
                            viewBox="0 0 46 16"
                        >
                            <path
                                id="Path_10"
                                data-name="Path 10"
                                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                                transform="translate(30)"
                                fill="#5CBBFF"
                            ></path>
                        </svg>
                    </button>
                    </Link>
                </div>

                <img src={about} alt=""/>
            </div>
        </div>
    )
}

export default About
