
"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown, Mail, MapPin, Phone, MessageSquare } from "lucide-react"
import About from './Components/About';
import Services from './Components/Services';
export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const typingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    // Particles.js initialization
    if (typeof window !== "undefined") {
      const script = document.createElement("script")
      script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"
      script.onload = () => {
        // @ts-ignore
        window.particlesJS("particles-js", {
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#00f7ff" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: "#00f7ff", opacity: 0.4, width: 1 },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" }, resize: true },
            modes: { grab: { distance: 140, line_linked: { opacity: 1 } }, push: { particles_nb: 4 } },
          },
          retina_detect: true,
        })
      }
      document.head.appendChild(script)
    }

    // Typewriter effect
    const text = "Roheet Saha"
    const typingTarget = typingRef.current
    if (typingTarget) {
      let i = 0
      const speed = 150
      function typeWriter() {
        if (i < text.length && typingTarget) {
          typingTarget.textContent += text.charAt(i)
          i++
          setTimeout(typeWriter, speed)
        } else if (typingTarget) {
          typingTarget.style.borderRight = "none"
        }
      }
      typeWriter()
    }

    // Intersection Observer for animations
    const observerOptions = { threshold: 0.1 }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate")
        }
      })
    }, observerOptions)

    document
      .querySelectorAll(".animate-top, .animate-right, .animate-bottom, .animate-zoom, .animate-pop")
      .forEach((el) => {
        observer.observe(el)
      })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <div className="portfolio-container">
      <div className="particles" id="particles-js"></div>
      <div className="cyber-grid"></div>

      {/* Header */}
      <header className="header">
        <a href="#" className="logo">
          Portfolio
        </a>
        <button className={`menu-toggle ${isMenuOpen ? "active" : ""}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className="hamburger">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </button>
        <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
          <a href="#Home" className="nav-link" onClick={() => scrollToSection("Home")}>
            <span className="link-text">Home</span>
            <span className="link-hover"></span>
          </a>
          <a href="#about" className="nav-link" onClick={() => scrollToSection("about")}>
            <span className="link-text">About</span>
            <span className="link-hover"></span>
          </a>
          <a href="#Services" className="nav-link" onClick={() => scrollToSection("services")}>
            <span className="link-text">Services</span>
            <span className="link-hover"></span>
          </a>
          <a href="#work" className="nav-link" onClick={() => scrollToSection("work")}>
            <span className="link-text">Work</span>
            <span className="link-hover"></span>
          </a>
          <a href="#contact" className="nav-link" onClick={() => scrollToSection("contact")}>
            <span className="link-text">Contact</span>
            <span className="link-hover"></span>
          </a>
        </nav>
      </header>

      {/* Home Section */}
      <section className="home" id="Home">
        <div className="home-content">
          <h3 className="animate-top hello-text">Hello, I'm</h3>
          <h1 ref={typingRef} className="typing-effect-once"></h1>
          <h4 className="animate-right">Electronics & Communication Engineer | Full Stack Developer</h4>
          <p className="animate-bottom long-text">
            Electronics and Communication Engineering undergraduate with strong Computer Science expertise. Well-versed
            in Java, Linux, SQL, and AWS Cloud, with hands-on experience in embedded systems, IoT, and full-stack web
            development.
          </p>
          <div className="social-media animate-zoom">
            <a href="https://www.instagram.com/roheet_r9/" target="_blank" className="social-icon" rel="noreferrer">
              <i className="fab fa-instagram"></i>
              <span className="pulse-ring"></span>
            </a>
            <a href="https://www.facebook.com/roheet.saha.142" target="_blank" className="social-icon" rel="noreferrer">
              <i className="fab fa-facebook"></i>
              <span className="pulse-ring"></span>
            </a>
            <a href="https://www.linkedin.com/in/roheetsaha7/" target="_blank" className="social-icon" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
              <span className="pulse-ring"></span>
            </a>
            <a href="https://github.com/RoheetSaha007" target="_blank" className="social-icon" rel="noreferrer">
              <i className="fab fa-github"></i>
              <span className="pulse-ring"></span>
            </a>
            <a href="https://leetcode.com/u/8dADa1SzxN/" target="_blank" className="social-icon" rel="noreferrer">
              <i className="fas fa-code"></i>
              <span className="pulse-ring"></span>
            </a>
          </div>
          <a
            href="https://drive.google.com/file/d/1ZHFUzFvIyoZMnkZmtHMpcPG9OSjhCiVA/view?usp=sharing"
            className="btn animate-pop"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Download CV</span>
            <div className="btn-border btn-border-top"></div>
            <div className="btn-border btn-border-right"></div>
            <div className="btn-border btn-border-bottom"></div>
            <div className="btn-border btn-border-left"></div>
          </a>
        </div>
        <div className="home-img-wrapper">
          <div className="home-img">
            <div className="hexagon-border"></div>
            <div className="hexagon-border hexagon-border-2"></div>
            <img
              src="Profile photo.jpg"
              alt="Roheet Profile"
              className="profile-img"
            />
            <div className="glowing-circle"></div>
          </div>
        </div>

        <div className="scroll-indicator">
          <ChevronDown className="scroll-arrow" />
        </div>
      </section>

      <About/>
      <Services/>
      {/* Work Section */}
      <section className="work-section" id="work">
        <div className="section-container">
          <h2 className="section-title">💼 My Project Showcase</h2>
          <div className="project-gallery">
            <a
              href="https://www.linkedin.com/posts/roheetsaha7_powerbi-dataanalytics-dashboardproject-activity-7351300319319912448-wFyy"
              target="_blank"
              className="project-card"
              rel="noreferrer"
            >
              <img src="/modern-power-bi-dashboard-with-charts-graphs-analy.png" alt="Power BI Dashboard" />
              <p>Power BI Dashboard</p>
            </a>
            <div className="project-card">
              <img src="/electric-vehicle-battery-management-system-interfa.png" alt="EV Battery Management System" />
              <p>EV Battery Management System</p>
            </div>
            <a
              href="https://www.linkedin.com/posts/roheetsaha7_radarsystem-aeroscan-arduinoproject-activity-7342849743464632320-yotE"
              target="_blank"
              className="project-card"
              rel="noreferrer"
            >
              <img src="/smart-surveillance-radar-system-with-arduino-senso.png" alt="Smart Surveillance Radar" />
              <p>Smart Surveillance Radar</p>
            </a>
            <a
              href="https://www.linkedin.com/posts/roheetsaha7_iot-arduino-aqimonitoring-activity-7338041115020795906-i9JI"
              target="_blank"
              className="project-card"
              rel="noreferrer"
            >
              <img src="/air-quality-monitoring-system-with-sensors-environ.png" alt="AQI Monitoring System" />
              <p>AQI Monitoring System</p>
            </a>
            <div className="project-card">
              <img src="/women-safety-app-black-background.png" alt="Women Safety App" />
              <p>Women Safety Device</p>
            </div>
            <a
              href="https://roheetsaha007.github.io/TIC_TAC_TOE--PROGIDY_03/"
              target="_blank"
              className="project-card"
              rel="noreferrer"
            >
              <img src="/modern-tic-tac-toe-game-interface-with-neon-colors.png" alt="Tic Tac Toe" />
              <p>Tic‑Tac‑Toe</p>
            </a>
            <a
              href="https://roheetsaha007.github.io/PROJECT_STOPWATCH--PRODIGY_02/"
              target="_blank"
              className="project-card"
              rel="noreferrer"
            >
              <img src="/digital-stopwatch-black-background.png" alt="Digital Stopwatch" />
              <p>Digital Stopwatch</p>
            </a>
            <a
              href="https://roheetsaha007.github.io/WEATHER--PROGIDY_05/"
              target="_blank"
              className="project-card"
              rel="noreferrer"
            >
              <img src="/weather-app-black-background.png" alt="Weather Application" />
              <p>Weather Application</p>
            </a>
            <a
              href="https://roheetsaha007.github.io/PROJECT_LANDING--PRODIGY_01/land"
              target="_blank"
              className="project-card"
              rel="noreferrer"
            >
              <img src="/landing-page-design-black-background.png" alt="Landing Page" />
              <p>Landing Page</p>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="section-container">
          <h2 className="section-title">📞 Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <Phone className="contact-icon" />
                <div>
                  <strong>Primary Phone: <span></span></strong>
                  <span>+91 9064004743</span>
                </div>
              </div>
              <div className="contact-item">
                <MessageSquare className="contact-icon" />
                <div>
                  <strong>WhatsApp: <span></span></strong>
                  <span>+91 8509311748</span>
                </div>
              </div>
              <div className="contact-item">
                <Mail className="contact-icon" />
                <div>
                  <strong>Professional Email: <span></span></strong>
                  <span>roheetsaha2955@gmail.com</span>
                </div>
              </div>
              <div className="contact-item">
                <MapPin className="contact-icon" />
                <div>
                  <strong>Location: <span></span></strong>
                  <span> Nabadwip, West Bengal - 741302, India</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <strong>LinkedIn: <span></span></strong>
                  <span>linkedin.com/in/roheetsaha7</span>
                </div>
              </div>
            </div>
            <div className="contact-cta">
              <h3 className="work-heading">Ready to Collaborate?</h3>
              <div className="quote">
               I don’t just build projects — I craft solutions that blend innovation, technology, and real-world impact
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Font Awesome Icons */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    </div>
  )
}
