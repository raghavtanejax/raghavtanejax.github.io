import React from 'react';
import { FaPython, FaJs, FaJava, FaDatabase, FaGitAlt, FaLinux, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiFlask, SiDjango, SiMysql, SiFirebase, SiOpencv, SiLatex, SiFigma } from 'react-icons/si';

const skillsData = [
    {
        category: "Languages",
        items: [
            { name: "Python", icon: <FaPython /> },
            { name: "JavaScript", icon: <FaJs /> },
            { name: "Java", icon: <FaJava /> },
            { name: "C/C++", icon: null },
            { name: "SQL", icon: <FaDatabase /> }
        ]
    },
    {
        category: "Web Development",
        items: [
            { name: "HTML5", icon: <FaHtml5 /> },
            { name: "CSS3", icon: <FaCss3Alt /> },
            { name: "Flask", icon: <SiFlask /> },
            { name: "Django", icon: <SiDjango /> },
            { name: "Bootstrap", icon: null }
        ]
    },
    {
        category: "Databases & Cloud",
        items: [
            { name: "MySQL", icon: <SiMysql /> },
            { name: "SQLite", icon: <FaDatabase /> },
            { name: "Firebase", icon: <SiFirebase /> },
            { name: "GCP", icon: null }
        ]
    },
    {
        category: "Tools & Others",
        items: [
            { name: "Git/GitHub", icon: <FaGitAlt /> },
            { name: "Linux", icon: <FaLinux /> },
            { name: "OpenCV", icon: <SiOpencv /> },
            { name: "LaTeX", icon: <SiLatex /> },
            { name: "Figma", icon: <SiFigma /> }
        ]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="section" style={{ background: 'var(--surface-color)' }}>
            <div className="container">
                <div>
                    <h2 className="section-title">Technical Skills</h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '30px'
                    }}>
                        {skillsData.map((category, index) => (
                            <div
                                key={index}
                                className="glass-card"
                            >
                                <h3 style={{
                                    fontSize: '1.3rem',
                                    marginBottom: '20px',
                                    color: 'var(--primary-color)',
                                    borderBottom: '1px solid var(--glass-border)',
                                    paddingBottom: '10px'
                                }}>
                                    {category.category}
                                </h3>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                    {category.items.map((skill, idx) => (
                                        <span key={idx} style={{
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            padding: '8px 15px',
                                            borderRadius: '20px',
                                            fontSize: '0.9rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            border: '1px solid rgba(255, 255, 255, 0.1)'
                                        }}>
                                            {skill.icon && <span style={{ color: 'var(--primary-color)' }}>{skill.icon}</span>}
                                            {skill.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
