import React, { useRef } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Goals from '../components/Goals';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer.jsx';
import ScrollToTop from '../ScrollToTop.jsx';

function Home() {
  const sectionRef = useRef(null);
  const aboutRef = useRef(null);
  const goalsRef = useRef(null);

  ScrollToTop()

  const scrollToRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Hero scrollToSection={() => scrollToRef(sectionRef)} scrollToRef={() => scrollToRef(aboutRef)} />
      <About aboutRef={aboutRef}/>
      <Services servicesRef={sectionRef} />
      <Goals goalsRef={goalsRef} />
      <Testimonials/>
      <Footer scrollToGoals={() => scrollToRef(goalsRef)} scrollToSection={() => scrollToRef(sectionRef)} scrollToRef={() => scrollToRef(aboutRef)} />
    </>
  );
}

export default Home;
