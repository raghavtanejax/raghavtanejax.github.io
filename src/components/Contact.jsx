import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="section" style={{ paddingBottom: '50px' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <div>
                    <h2 className="section-title">Get In Touch</h2>

                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
                        I am currently looking for internship opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginBottom: '60px', flexWrap: 'wrap' }}>
                        <a href="mailto:raghavtaneja487@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.1rem' }}>
                            <FaEnvelope style={{ color: 'var(--primary-color)' }} /> raghavtaneja487@gmail.com
                        </a>
                        <a href="tel:+919548397355" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.1rem' }}>
                            <FaPhone style={{ color: 'var(--primary-color)' }} /> +91-9548397355
                        </a>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '50px' }}>
                        <a href="https://github.com/raghavtanejax" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ borderRadius: '50%', width: '50px', height: '50px', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/raghavtanejax" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ borderRadius: '50%', width: '50px', height: '50px', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                            <FaLinkedin />
                        </a>
                    </div>

                    <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '30px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        <p>&copy; {new Date().getFullYear()} Raghav Taneja. All rights reserved.</p>
                        <p style={{ marginTop: '10px' }}>Built with React & Vite</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
