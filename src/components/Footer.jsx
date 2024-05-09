import React from 'react'
import footerimg from '../assets/footerlogo.png'
import { InstagramLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import { Link } from 'react-router-dom'

function Footer({ scrollToRef, scrollToSection, scrollToGoals }) {
  return (
    <footer className='row'>
      <div className="footer-wrapper">


        <div className="footer-row">
          <img src={footerimg} alt="" />
          <p>Från toppsäljare till toppsäljare - vår plattform ger dig verktygen för framgång inom både sälj och personlig utveckling.</p>
          <div className="media-logos">
            <a href="https://www.instagram.com/futurumsverige/" target="_blank" rel="noopener noreferrer"> <InstagramLogoIcon className='media-icons' /></a>
            <a href="https://www.linkedin.com/company/capitalfuturum/" target="_blank" rel="noopener noreferrer"><LinkedInLogoIcon className='media-icons' /></a>
          </div>
        </div>

        <div className="footer-row footer-nav">
          <h3>Navigation</h3>
          <ul>
            <li onClick={scrollToRef}>Om oss</li>
            <li onClick={scrollToGoals}>Mål och Vision</li>
            <li onClick={scrollToSection}>Våra tjänster</li>
            <li><Link to="/karriar">Karrär</Link></li>
            <li><Link to='/kontakt'>Kontakta oss</Link></li>
          </ul>
        </div>

        <div className="footer-row footer-nav">
          <h3>Kontakt</h3>
          <ul>
            <li><a href="mailto:Loui.pratt@capitalfuturum.com">Loui.pratt@capitalfuturum.com</a></li>
            <li><a href="tel:+46760375902">076 037 59 02</a></li>
          </ul>
        </div>

      </div>
    </footer>
  )
}

export default Footer
