import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectsData = [
    {
        title: "BENEVA – Sustainable Health App",
        tech: "Python, Android, Firebase",
        date: "Jul 2025",
        description: [
            "Backend Developer – Designed and implemented the core logic for food barcode scanning, ingredient analysis, and health-risk evaluation.",
            "Built personalized recommendation system using Firebase user data and health profile filtering."
        ],
        link: "https://github.com/raghavtanejax/Beneva"
    },
    {
        title: "Facial Expression Recognition",
        tech: "Python, Deep Learning",
        date: "Nov 2025",
        description: [
            "Built a real-time facial emotion detection system using CNN and OpenCV.",
            "Trained on the FER-2013 dataset to classify five emotions with high accuracy."
        ],
        link: "https://github.com/raghavtanejax/Facial-Expression-Recognition-main"
    },
    {
        title: "Secure File Encryption Tool",
        tech: "Python",
        date: "Apr 2025",
        description: [
            "Developed a CLI-based AES-256 encryption utility for secure file handling.",
            "Optimized key management and execution time for large files."
        ],
        link: "https://github.com/raghavtanejax/Secure_File_Encryption_and_decryption_Tool"
    },
    {
        title: "Virtual Resume Builder",
        tech: "Web App",
        date: "Jun 2025",
        description: [
            "Created a web-based resume generator with PDF/Word export and responsive UI.",
            "Implemented real-time preview using JavaScript and client-side rendering."
        ],
        link: "https://github.com/raghavtanejax/virtual-resume-builder"
    },
    {
        title: "Face Recognition using AI",
        tech: "Python, OpenCV",
        date: "Nov 2024",
        description: [
            "Developed a facial recognition system using Haar cascades and deep learning.",
            "Tested in real-world identity verification scenarios with reliable accuracy."
        ],
        link: "https://github.com/raghavtanejax/Face-recog-using-AI"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Projects</h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '30px'
                    }}>
                        {projectsData.map((project, index) => (
                            <motion.div
                                key={index}
                                className="glass-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                                    <h3 style={{ fontSize: '1.4rem', fontWeight: '600' }}>{project.title}</h3>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-color)', fontSize: '1.2rem' }}>
                                        <FaGithub />
                                    </a>
                                </div>

                                <p style={{
                                    color: 'var(--primary-color)',
                                    fontSize: '0.9rem',
                                    marginBottom: '10px',
                                    fontWeight: '500'
                                }}>
                                    {project.tech} | {project.date}
                                </p>

                                <ul style={{
                                    listStyle: 'disc',
                                    paddingLeft: '20px',
                                    color: 'var(--text-secondary)',
                                    marginBottom: '20px',
                                    flex: 1
                                }}>
                                    {project.description.map((desc, idx) => (
                                        <li key={idx} style={{ marginBottom: '5px' }}>{desc}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
