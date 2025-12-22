import React from 'react';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <div>
                    <h2 className="section-title">About Me</h2>

                    <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <p style={{ fontSize: '1.1rem', marginBottom: '20px', color: 'var(--text-secondary)' }}>
                            I am an aspiring <strong style={{ color: 'var(--primary-color)' }}>Python Backend Developer</strong> with hands-on experience in AI-based applications, web development, and real-time computer vision projects.
                        </p>
                        <p style={{ fontSize: '1.1rem', marginBottom: '20px', color: 'var(--text-secondary)' }}>
                            Currently pursuing my BCA at Graphic Era University, Dehradun, I have built functional prototypes using <strong style={{ color: 'var(--primary-color)' }}>Python, Flask, Django, and OpenCV</strong>. I possess a strong problem-solving mindset, honed through hackathon experiences and practical projects involving REST APIs, data handling, and model training.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                            I am actively seeking internship opportunities to apply my skills in building scalable backend systems and AI-powered applications.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
