"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, FileDown } from "lucide-react"
import styles from "./style.module.css"

export default function Home() {
  const words = ["developer", "designer", "creator", "innovator", "problem solver"]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const socialLinks = [
    { icon: Github, href: "https://github.com/Luxsss", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/alexisbrun", label: "LinkedIn" },
    { icon: Mail, href: "mailto:alexis-dominique.brun@epitech.eu", label: "Email" },
  ]

  return (
    <section id="home" className={styles.containerHome}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Hey, I’m <span>Alexis Brun</span></h1>
        <h2 className={styles.subtitle}>I am a <span className={styles.wordChange}>{words[index]}</span></h2>
        <p className={styles.description}>Passionate about creating modern, efficient, and aesthetic web applications using the latest technologies.</p>

        <div className={styles.actions}>
          <a href="#projects" className={styles.buttonPrimary}>See My Work</a>
          <a href="/download/CvAlexisBrunCom.pdf" target="_blank" download className={styles.buttonSecondary}>Download CV</a>
        </div>

        <div className={styles.socialLinks}>
          {socialLinks.map((social) => (
            <a key={social.label} href={social.href} target="_blank"><social.icon className={styles.socialIcon} /></a>
          ))}
        </div>
      </div>

      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <img src="/images/me.webp" alt="Alexis Brun" className={styles.profileImage}/>
          <div className={styles.imageGlow}></div>
        </div>
      </div>
    </section>
  )
}