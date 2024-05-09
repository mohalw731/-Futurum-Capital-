import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.svg';
import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import '../App.css';
import { Link } from 'react-router-dom';

const Nav = ({scrollToSection, scrollToRef, className, no}) => {
    const [menu, setMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
    };

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <nav className={`nav ${className} ${scrolled ? "scroll" : ""}`}>
                <Link to='/'>
                <img src={logo} alt="logo" />
                </Link>
                <button onClick={toggleMenu} className={`${no}`}>
                    {!menu ? <HamburgerMenuIcon color='white' className='menu-btn' /> : <Cross1Icon color='white' className='menu-btn' />}
                </button>
            </nav>

            <div className={`menu ${menu ? 'open' : ''}`}>
                <ul>
                    <li onClick={() => { scrollToRef(); toggleMenu(); }}>Om oss</li>
                    <li onClick={() => { scrollToSection(); toggleMenu(); }}>Våra tjänster</li>
                    <li><Link to='/karriar'>Karriär</Link></li>
                    <li><Link to='/kontakt'>Kontakta oss</Link></li>
                </ul>
            </div>
        </>
    );
}

export default Nav;
