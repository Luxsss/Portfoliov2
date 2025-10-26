"use client"
import { useEffect, useState } from 'react'
import { Menu, X } from "lucide-react"
import styles from './style.module.css'

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = { root: null, rootMargin: "0px", threshold: 0.5 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, options);

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <button className={styles.burgerButton} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={28} /> : <Menu size={28} />}</button>

      <div className={`${styles.container} ${menuOpen ? styles.open : ""}`}>
        <div className={styles.topSection}>
          <h1 className={styles.logo}>Alexis Brun</h1>

          <ul className={styles.navLinks}>
            <li className={activeSection === "home" ? styles.active : ""}>
              <div className={styles.line}></div>
              <a href="#home" onClick={handleLinkClick}>Home</a>
            </li>
            <li className={activeSection === "technologies" ? styles.active : ""}>
              <div className={styles.line}></div>
              <a href="#technologies" onClick={handleLinkClick}>Technologies</a>
            </li>
            <li className={activeSection === "projects" ? styles.active : ""}>
              <div className={styles.line}></div>
              <a href="#projects" onClick={handleLinkClick}>Projects</a>
            </li>
            <li className={activeSection === "contact" ? styles.active : ""}>
              <div className={styles.line}></div>
              <a href="#contact" onClick={handleLinkClick}>Contact</a>
            </li>
          </ul>
        </div>

        <span className={styles.footerText}>© 2025</span>
      </div>
    </>
  )
}
