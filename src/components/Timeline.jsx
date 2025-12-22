import React from 'react';
import { FaGraduationCap, FaTrophy } from 'react-icons/fa';

const Timeline = () => {
    return (
        <section id="timeline" className="section" style={{ background: 'var(--surface-color)' }}>
            <div className="container">
                <div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px' }}>

                        {/* Education Column */}
                        <div>
                            <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '40px' }}>Education</h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>

                                <div className="glass-card">
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                                        <FaGraduationCap style={{ color: 'var(--primary-color)', fontSize: '1.5rem' }} />
                                        <h3 style={{ fontSize: '1.2rem' }}>BCA</h3>
                                    </div>
                                    <p style={{ color: 'var(--text-secondary)' }}>Graphic Era University, Dehradun</p>
                                    <p style={{ color: 'var(--primary-color)', fontSize: '0.9rem' }}>2023 -- Present</p>
                                    <p style={{ marginTop: '5px' }}>GPA: 7.10/10.0</p>
                                </div>

                                <div className="glass-card">
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                                        <FaGraduationCap style={{ color: 'var(--primary-color)', fontSize: '1.5rem' }} />
                                        <h3 style={{ fontSize: '1.2rem' }}>Class 12 (CBSE)</h3>
                                    </div>
                                    <p style={{ color: 'var(--text-secondary)' }}>Rainbow School, Saharanpur</p>
                                    <p style={{ color: 'var(--primary-color)', fontSize: '0.9rem' }}>2023</p>
                                    <p style={{ marginTop: '5px' }}>Percentage: 70.33%</p>
                                </div>

                                <div className="glass-card">
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                                        <FaGraduationCap style={{ color: 'var(--primary-color)', fontSize: '1.5rem' }} />
                                        <h3 style={{ fontSize: '1.2rem' }}>Class 10 (CBSE)</h3>
                                    </div>
                                    <p style={{ color: 'var(--text-secondary)' }}>Rainbow School, Saharanpur</p>
                                    <p style={{ color: 'var(--primary-color)', fontSize: '0.9rem' }}>2021</p>
                                    <p style={{ marginTop: '5px' }}>Percentage: 73.40%</p>
                                </div>

                            </div>
                        </div>

                        {/* Achievements Column */}
                        <div>
                            <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '40px' }}>Achievements</h2>
                            <div className="glass-card">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                                    <FaTrophy style={{ color: 'var(--secondary-color)', fontSize: '1.5rem' }} />
                                    <h3 style={{ fontSize: '1.2rem' }}>TechSprint Hackathon</h3>
                                </div>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '10px' }}>Graphic Era University</p>
                                <p>
                                    Ranked in <strong style={{ color: 'var(--primary-color)' }}>Top 30 out of 1800+ teams</strong>.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
