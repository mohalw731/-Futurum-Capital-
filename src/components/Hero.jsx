import Nav from './Nav';
import imgback from '../assets/imgback.svg';
import { Link } from 'react-router-dom';

function Hero({ scrollToSection, scrollToRef }) {

  return (
    <div className='hero-container'>
      <Nav scrollToSection={scrollToSection} scrollToRef={scrollToRef} />

      <div className="hero-img-container">
        <img src={imgback} alt="stockholm" />
      </div>

      <div className="hero-text">
        <h1><span>AV TOPPSÄLJARE</span> <br /> FÖR TOPPSÄLJARE</h1>
        <div className="hero-btn-wrapper">
          <button>
            <Link to='/karriar'>
              Karriär
            </Link>
            </button>
          <button onClick={scrollToSection}>Vårja Tjänster</button>
        </div>
      </div>

      <div className="overlay"></div>
    </div>
  );
}

export default Hero;
