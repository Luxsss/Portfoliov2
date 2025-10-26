"use client"
import React from 'react'
import styles from './style.module.css'

export default function Footer() {
  return (
    <div className={styles.containerFooter}>
      <span className={styles.footerText}>© 2025 | 23:00 PM GMT+2</span>

      <ul className={styles.navLinks}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#technologies">Technologies</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  )
}
