import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#050505]/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
                }`}
            style={{
                background: scrolled ? 'rgba(5, 5, 5, 0.8)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                padding: scrolled ? '15px 0' : '25px 0',
                position: 'fixed',
                width: '100%',
                zIndex: 1000,
                top: 0,
                left: 0,
                borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="#" style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary-color)' }}>RT.</a>

                <ul style={{ display: 'flex', gap: '30px' }}>
                    {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item.toLowerCase()}`}
                                style={{
                                    color: 'var(--text-color)',
                                    fontWeight: '500',
                                    fontSize: '1rem'
                                }}
                                onMouseOver={(e) => e.target.style.color = 'var(--primary-color)'}
                                onMouseOut={(e) => e.target.style.color = 'var(--text-color)'}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>

                <div style={{ display: 'flex', gap: '20px' }}>
                    <a href="https://github.com/raghavtanejax" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.2rem' }}>
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/raghavtanejax" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.2rem' }}>
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
