import React, { useState } from 'react';
import { GraduationCap, Briefcase, Award, Code, Trophy, ExternalLink, ChevronDown } from 'lucide-react';
import './About.css';

const About = () => {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    education: true,
    experience: true,
    certifications: false,
    skills: true,
    achievements: false,
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const certifications = [
    {
      title: "Master in Power BI",
      date: "July 2025",
      url: "https://drive.google.com/file/d/179898iBKYqj_IKBJbHoI8ilashWpnSGm/view?usp=sharing"
    },
    {
      title: "AWS Cloud Practitioner (CLF-C02)",
      date: "June 2025",
      url: "https://drive.google.com/file/d/18wkO2jqGXMuJc0Qg1KMnFSX5lcwCQbdI/view?usp=sharing"
    },
    {
      title: "Embedded System Design",
      date: "Maven Silicon, June 2025",
      url: "https://drive.google.com/file/d/1_WH8CaOSlg0UzV-mkhCkgZ_A7N01zTmL/view?usp=sharing"
    },
    {
      title: "Advanced Python",
      date: "IIT Madras, December 2023",
      url: "https://drive.google.com/file/d/1-f4G-dHS_92heXHD69Bomuc7ezIQJNfb/view?usp=sharing"
    },
    {
      title: "Game Development with Pygame",
      date: "GUVI, September 2023",
      url: "https://drive.google.com/file/d/1-eKaPEQ_V9V2Ybsh_QMXM6olCpqsnJTt/view?usp=sharing"
    },
    {
      title: "ChatGPT Fundamentals",
      date: "GUVI, September 2023",
      url: "https://drive.google.com/file/d/1-eoApkDvjacZdvZ_LUj1o6e2uE2jhKDy/view?usp=sharing"
    },
    {
      title: "C Programming",
      date: "VIT Vellore, December 2022",
      url: "https://drive.google.com/file/d/1-Wuu41m4lqqHWOksTlQgE492gIGzW_Le/view?usp=sharing"
    }
  ];

  const skillCategories = [
    {
      category: "Languages",
      skills: ["Python", "Java", "C", "SQL", "R", "HTML5", "CSS3", "JavaScript"]
    },
    {
      category: "Frameworks",
      skills: ["React.js", "Tailwind CSS", "DAX"]
    },
    {
      category: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Eclipse", "Arduino IDE", "Power BI", "MS Office Suite"]
    },
    {
      category: "Databases & Cloud",
      skills: ["MySQL", "AWS Educate", "Firebase"]
    },
    {
      category: "Software",
      skills: ["MATLAB", "COMSOL", "KEIL", "ModelSim", "Cadence", "AWR", "NetSim", "RStudio", "Optisystem", "PellesC"]
    }
  ];

  return (
    <section className="about-section" id="about">
      <div className="section-containment">
        <h2 className="section-title-head-h">About Me</h2>
        <div className="about-content">
          
          {/* Education Section */}
          <div className="section-group-t">
            <div 
              className="section-header-h" 
              onClick={() => toggleSection('education')}
            >
              <GraduationCap className="section-icon" />
              <h3>Education</h3>
              <ChevronDown 
                className={`expand-icon ${expandedSections.education ? 'expanded' : ''}`} 
              />
            </div>
            <div className={`section-content ${expandedSections.education ? 'expanded' : ''}`}>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>B.Tech - Electronics and Communication Engineering</h4>
                    <p className="institution">VIT Vellore (2022–Present)</p>
                    <p className="grade">CGPA: 8.9/10</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>Higher Secondary (ISC)</h4>
                    <p className="institution">Salt Lake Point School</p>
                    <p className="grade">84%</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>Secondary (ICSE)</h4>
                    <p className="institution">Bishop Morrow School</p>
                    <p className="grade">90.8%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="section-group-t">
            <div 
              className="section-header-h" 
              onClick={() => toggleSection('experience')}
            >
              <Briefcase className="section-icon" />
              <h3>Professional Experience</h3>
              <ChevronDown 
                className={`expand-icon ${expandedSections.experience ? 'expanded' : ''}`} 
              />
            </div>
            <div className={`section-content ${expandedSections.experience ? 'expanded' : ''}`}>
              <div className="experience-grid">
                <div className="experience-card">
                  <div className="card-header">
                    <h4>Embedded System Design Intern</h4>
                    <span className="company">Maven Silicon</span>
                    <span className="duration">May 2025 – Jun 2025</span>
                  </div>
                  <ul className="achievements-list">
                    <li>Implemented real-time women safety device with GSM, GPS, and buzzer, ensuring 99.99% uptime</li>
                    <li>Explored FSMs, SRAM/DRAM, and RISC/ARM architectures, boosting digital design knowledge by 30%</li>
                  </ul>
                </div>
                <div className="experience-card">
                  <div className="card-header">
                    <h4>Web Development Intern</h4>
                    <span className="company">Skilledity and Prodigy InfoTech</span>
                    <span className="duration">Sep 2024 – Nov 2024</span>
                  </div>
                  <ul className="achievements-list">
                    <li>Developed 3 interactive JavaScript apps focusing on responsive design</li>
                    <li>Engineered role-based school website using Tailwind CSS and GitHub deployment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="section-group-t">
            <div 
              className="section-header-h" 
              onClick={() => toggleSection('certifications')}
            >
              <Award className="section-icon" />
              <h3>Certifications</h3>
              <ChevronDown 
                className={`expand-icon ${expandedSections.certifications ? 'expanded' : ''}`} 
              />
            </div>
            <div className={`section-content ${expandedSections.certifications ? 'expanded' : ''}`}>
              <div className="certifications-grid">
                {certifications.map((cert, index) => (
                  <a 
                    key={index}
                    href={cert.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="certification-card"
                  >
                    <div className="cert-content">
                      <h4>{cert.title}</h4>
                      <p>{cert.date}</p>
                    </div>
                    <ExternalLink className="external-icon" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="section-group-t">
            <div 
              className="section-header-h" 
              onClick={() => toggleSection('skills')}
            >
              <Code className="section-icon" />
              <h3>Technical Skills</h3>
              <ChevronDown 
                className={`expand-icon ${expandedSections.skills ? 'expanded' : ''}`} 
              />
            </div>
            <div className={`section-content ${expandedSections.skills ? 'expanded' : ''}`}>
              <div className="skills-container">
                {skillCategories.map((category, index) => (
                  <div key={index} className="skill-category">
                    <h4 className="category-title">{category.category}</h4>
                    <div className="skills-tags">
                      {category.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="section-group-t">
            <div 
              className="section-header-h" 
              onClick={() => toggleSection('achievements')}
            >
              <Trophy className="section-icon" />
              <h3>Achievements</h3>
              <ChevronDown 
                className={`expand-icon ${expandedSections.achievements ? 'expanded' : ''}`} 
              />
            </div>
            <div className={`section-content ${expandedSections.achievements ? 'expanded' : ''}`}>
              <div className="achievements-container">
                <div className="achievement-item">
                  <div className="achievement-icon">🏅</div>
                  <div className="achievement-content">
                    <h4>AWS Certified Credly Badges</h4>
                    <p>Cloud Computing, Database, and Networking Essentials</p>
                  </div>
                </div>
                <div className="achievement-item">
                  <div className="achievement-icon">📜</div>
                  <div className="achievement-content">
                    <h4>Letter of Recommendation</h4>
                    <p>
                      Received{" "}
                      <a
                        href="https://drive.google.com/file/d/1C3SQGmM2sUU_kmmuZ8ModgKg60uvMiW5/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Letter of Recommendation
                      </a>{" "}
                      for Front-end Development (Skilledity Solution Limited)
                    </p>
                  </div>
                </div>
                <div className="achievement-item">
                  <div className="achievement-icon">💻</div>
                  <div className="achievement-content">
                    <h4>Coding Proficiency</h4>
                    <p>
                      Solved <strong>100+</strong> problems on{" "}
                      <a href="https://leetcode.com/u/8dADa1SzxN/" target="_blank" rel="noreferrer">
                        LeetCode – CODE_ROHEET007
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;