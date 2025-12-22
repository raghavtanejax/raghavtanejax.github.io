import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="home" style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'radial-gradient(circle at center, rgba(0, 242, 234, 0.1) 0%, rgba(5, 5, 5, 1) 70%)'
        }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 style={{
                        fontSize: '1.5rem',
                        color: 'var(--primary-color)',
                        marginBottom: '10px',
                        letterSpacing: '2px',
                        textTransform: 'uppercase'
                    }}>Hello, I'm</h2>

                    <h1 style={{
                        fontSize: '5rem',
                        fontWeight: '700',
                        marginBottom: '20px',
                        lineHeight: '1.1'
                    }}>
                        Raghav Taneja
                    </h1>

                    <h3 style={{
                        fontSize: '2rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '40px'
                    }}>
                        Aspiring Python Backend Developer
                    </h3>

                    <p style={{
                        maxWidth: '600px',
                        margin: '0 auto 50px',
                        fontSize: '1.1rem',
                        color: 'var(--text-secondary)'
                    }}>
                        Building scalable backend systems and AI-powered applications with Python, Flask, and Django.
                    </p>

                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                        <a href="#projects" className="btn">View Work</a>
                        <a href="#contact" className="btn btn-outline">Contact Me</a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
