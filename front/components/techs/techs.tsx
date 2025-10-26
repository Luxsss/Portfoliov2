"use client"
import React from 'react'
import styles from './style.module.css'

const techs = [
  { name: "Next.js", type: "FRAMEWORK", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "AWS", type: "DEPLOYMENT", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Supabase", type: "DATABSE", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
  { name: "React", type: "FRONTEND", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "MySQL", type: "DATABASE", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "TypeScript", type: "LANGUAGE", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Tailwind", type: "STYLING", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Python", type: "LANGUAGE", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "Node.js", type: "BACKEND", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" },
  { name: "Java", type: "LANGUAGE", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" },
  { name: "Spring Boot", type: "FRAMEWORK", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
];

export default function Techs() {
  return (
    <section id="technologies" className={styles.containerTechs}>
      <h1 className={styles.title}>Technologies</h1>
      <h2 className={styles.subtitle}>Tools and Skills</h2>
      <p className={styles.description}>Here are the technologies and tools I regularly use to create modern, high-performance web applications.</p>

      <div className={styles.grid}>
        {techs.map((tech, index) => (
          <div key={index} className={styles.card}>
            <img src={tech.icon} alt={tech.name} className={styles.icon} />
            <div className={styles.cardContain}>
              <span className={styles.cardContainColor}>{tech.type}</span>
              <span className={styles.name}>{tech.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
