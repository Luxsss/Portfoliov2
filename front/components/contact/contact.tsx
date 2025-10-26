"use client"
import React from 'react'
import styles from './style.module.css'
import { Mail, Github, Linkedin, Twitter } from "lucide-react"

export default function Contact() {

  const socialLinks = [
    { icon: Github, href: "https://github.com/Luxsss", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/alexs-brun/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:alexis-dominique.brun@epitech.eu", label: "Email" },
  ]

  return (
    <section id="contact" className={styles.containerContact}>
      <h1 className={styles.title}>Contact</h1>
      <h2 className={styles.subtitle}>Let's work together</h2>
      <p className={styles.description}>Do you have a project in mind ? Don't hesitate to contact me. I'd love to discuss it with you.</p>

      <div className={styles.contactGrid}>
        <div className={styles.infoCard}>
          <h3 className={styles.subtitleMore}>Social Networks</h3>
          <div className={styles.socialLinks}>
            {socialLinks.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer"><social.icon className={styles.icon}/></a>
            ))}
          </div>

          <h3 className={styles.subtitleMore}>Informations</h3>
          <p>📍 Paris, France</p>
          <p>📧 alexis-dominique.brun@epitech.eu</p>
        </div>

        <div className={styles.formCard}>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id='name' placeholder='Your name' />

            <label htmlFor="email">Email</label>
            <input type="email" id='email' placeholder='your@email.com' />

            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder='Your message'></textarea>

            <button type="submit">Send the message</button>
          </form>
        </div>
      </div>
    </section>
  )
}
