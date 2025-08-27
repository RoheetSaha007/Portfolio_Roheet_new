import React, { useState, useEffect, useRef } from 'react';
import { 
  Code, 
  Cloud, 
  Cpu, 
  BarChart3, 
  TrendingUp, 
  Zap,
  ArrowRight,
  Sparkles,
  Star,
  Hexagon,
  Circle
} from 'lucide-react';
import './Services.css';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, delay: number}>>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    // Generate floating particles
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2000
    }));
    setParticles(newParticles);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const services = [
    {
      icon: Code,
      title: "Full Stack Project Development",
      description: "End-to-end project solutions from front-end design to GitHub deployment with clean code architecture using React.js, HTML5, CSS3, and JavaScript.",
      color: "blue-cyan",
      features: ["React.js", "Clean Architecture", "GitHub Deployment"]
    },
    {
      icon: Cloud,
      title: "AWS Cloud Solutions", 
      description: "AWS Certified Cloud Practitioner offering cloud deployment, database management, and networking solutions with hands-on experience in AWS Educate platform.",
      color: "orange-yellow",
      features: ["AWS Certified", "Cloud Deployment", "Database Management"]
    },
    {
      icon: Cpu,
      title: "IoT & Embedded Systems",
      description: "Developing smart systems using Arduino, sensors, and real-time monitoring solutions — ideal for automation, surveillance, and environmental monitoring projects.",
      color: "green-emerald",
      features: ["Arduino", "Real-time Monitoring", "Smart Automation"]
    },
    {
      icon: BarChart3,
      title: "Data Analytics & Business Intelligence",
      description: "Power BI dashboard development with DAX, SQL integration, and automated reporting pipelines for business intelligence and data visualization.",
      color: "purple-pink",
      features: ["Power BI", "DAX", "SQL Integration"]
    },
    {
      icon: TrendingUp,
      title: "Technical Analysis & Research",
      description: "Comprehensive technical analysis for engineering projects, market research, system optimization, and performance evaluation using advanced analytical tools.",
      color: "red-rose",
      features: ["Market Research", "System Optimization", "Performance Analysis"]
    },
    {
      icon: Zap,
      title: "MATLAB & Signal Processing",
      description: "Proficient in advanced simulation and multiphysics modeling using MATLAB, Simulink, and COMSOL for engineering research, focusing on electronics and signal processing.",
      color: "indigo-blue",
      features: ["MATLAB", "Simulink", "COMSOL"]
    }
  ];

  const technologies = [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "#3776ab", category: "Programming" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", color: "#f89820", category: "Programming" },
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", color: "#00599c", category: "Programming" },
    { name: "R", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg", color: "#276dc3", category: "Analytics" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "#e34f26", category: "Frontend" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "#1572b6", category: "Frontend" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#f7df1e", category: "Frontend" },
    { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61dafb", category: "Frontend" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", color: "#06b6d4", category: "Frontend" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "#4479a1", category: "Database" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", color: "#ff9900", category: "Cloud" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", color: "#181717", category: "Tools" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", color: "#007acc", category: "Tools" },
    { name: "Arduino", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg", color: "#00979d", category: "IoT" },
    { name: "MATLAB", icon: "https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png", color: "#0076a8", category: "Analytics" },
    { name: "Power BI", icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg", color: "#f2c811", category: "Analytics" },
    { name: "Firebase", icon: "https://www.svgrepo.com/show/303670/firebase-1-logo.svg", color: "#f2c811", category: "Backend" },
    { name: "Linux", icon: "https://www.svgrepo.com/show/448236/linux.svg", color: "#f2c811", category: "OS" }
  ];


  return (
    <section 
      ref={sectionRef}
      className="services-section"
      id = "Services"
    >
      {/* Dynamic Background */}
      <div className="services-background"></div>
      
      {/* Interactive Mouse Follower */}
      <div 
        className="mouse-follower"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
        }}
      ></div>

      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="floating-particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}ms`,
            animationDuration: `${3000 + Math.random() * 2000}ms`
          }}
        >
          <div className="particle-ping"></div>
        </div>
      ))}
      
      {/* Animated Background Elements */}
      <div className="background-elements">
        <div className="bg-element bg-element-1"></div>
        <div className="bg-element bg-element-2"></div>
        <div className="bg-element bg-element-3"></div>
        
        {/* Geometric Shapes */}
        <Hexagon className="geometric-shape shape-hexagon" />
        <Circle className="geometric-shape shape-circle" />
        <Star className="geometric-shape shape-star" />
      </div>

      <div className="services-container">
        {/* Section Header */}
        <div className={`section-header ${isVisible ? 'visible' : ''}`}>
          <div className="header-icons">
            <div className="header-icon-wrapper">
              <Sparkles className="header-sparkle" />
              <div className="sparkle-glow"></div>
            </div>
            <h2 className="main-title">
              Services I Offer
              <div className="title-glow"></div>
            </h2>
            <div className="header-icon-wrapper">
              <Sparkles className="header-sparkle sparkle-delayed" />
              <div className="sparkle-glow sparkle-glow-delayed"></div>
            </div>
          </div>
          <p className="section-description">
            Delivering cutting-edge solutions across multiple technology domains with a focus on innovation and excellence
          </p>
          <div className="section-divider">
            <div className="divider-line"></div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isHovered = hoveredCard === index;
            
            return (
              <div
                key={index}
                className={`service-card ${isVisible ? 'visible' : ''} ${isHovered ? 'hovered' : ''}`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Background */}
                <div className="card-content">
                  
                  {/* Animated Border Effect */}
                  <div className={`card-border-effect ${service.color}`}></div>
                  
                  {/* Corner Accent */}
                  <div className={`corner-accent ${service.color}`}></div>
                  
                  {/* Icon Container */}
                  <div className="icon-container">
                    <div className={`icon-wrapper ${service.color}`}>
                      <IconComponent className="service-icon" />
                      <div className="icon-overlay"></div>
                    </div>
                    {/* Icon Glow */}
                    <div className={`icon-glow ${service.color}`}></div>
                  </div>
                  
                  {/* Content */}
                  <div className="card-text-content">
                    <h3 className="service-title">
                      {service.title}
                    </h3>
                    <p className="service-description">
                      {service.description}
                    </p>
                    
                    {/* Feature Tags */}
                    <div className="feature-tags">
                      {service.features.map((feature, idx) => (
                        <span 
                          key={idx}
                          className="feature-tag"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    {/* Learn More Arrow */}
                    <div className="learn-more">
                      <span className="learn-more-text">Explore Service</span>
                      <ArrowRight className="learn-more-arrow" />
                    </div>
                  </div>

                  {/* Hover Particles */}
                  {isHovered && (
                    <div className="hover-particles">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="hover-particle"
                          style={{
                            left: `${20 + i * 15}%`,
                            top: `${20 + (i % 2) * 60}%`,
                            animationDelay: `${i * 200}ms`
                          }}
                        ></div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Stack Section */}
        <div className={`tech-stack-section ${isVisible ? 'visible' : ''}`}>
          <div className="tech-header">
            <h3 className="tech-title">
              🛠️ Tools & Technologies I Master
            </h3>
            <p className="tech-description">
              A comprehensive arsenal of cutting-edge technologies and frameworks
            </p>
            <div className="tech-divider">
              <div className="tech-divider-line"></div>
            </div>
          </div>

          

          {/* Tech Grid */}
          <div className="tech-grid">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className={`tech-item ${isVisible ? 'visible' : ''} ${hoveredTech === tech.name ? 'hovered' : ''}`}
                style={{ transitionDelay: `${(index * 50) + 1000}ms` }}
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <div className="tech-card">
                  
                 
                  
                  {/* Glow Effect */}
                  <div 
                    className="tech-glow"
                    style={{ backgroundColor: tech.color }}
                  ></div>
                  
                  {/* Icon */}
                  <div className="tech-content">
                    <div className="tech-icon-wrapper">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="tech-icon"
                        style={{
                          filter: hoveredTech === tech.name ? `drop-shadow(0 0 12px ${tech.color})` : undefined
                        }}
                      />
                      {/* Icon Ring */}
                      <div 
                        className="tech-ring"
                        style={{ borderColor: tech.color }}
                      ></div>
                    </div>
                    <span className="tech-name">
                      {tech.name}
                    </span>
                  </div>

                  {/* Hover Sparkles */}
                  {hoveredTech === tech.name && (
                    <div className="tech-sparkles">
                      <Sparkles className="tech-sparkle tech-sparkle-1" />
                      <Sparkles className="tech-sparkle tech-sparkle-2" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className={`cta-section ${isVisible ? 'visible' : ''}`}>
          <div className="cta-content">
            <div className="cta-glow"></div>
            <div className="cta-card">
              <p className="cta-text">
                Ready to bring your ideas to life? Let's create something amazing together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
