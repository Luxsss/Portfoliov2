"use client"
import { useEffect, useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import styles from './style.module.css'

interface Repository {
  id: number
  name: string
  description: string | null
  code: string
  homepage: string | null
  language: string | null
}

export default function Projects() {
  const [repos, setRepos] = useState<Repository[]>([])

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/Luxsss/repos?sort=updated&per_page=6"
        )
        if (!response.ok) throw new Error("Erreur lors de la récupération des projets")
        const data = await response.json()
        setRepos(data)
      } catch (err) {
        console.error(err)
      }
    }
    fetchRepos()
  }, [])

  return (
    <section id="projects" className={styles.containerProjects}>
      <h1 className={styles.title}>Projects</h1>
      <h2 className={styles.subtitle}>My Recent Work</h2>
      <p className={styles.description}>Discover a selection of my most recent projects, available on GitHub.</p>

      <div className={styles.grid}>
        {repos.map((el) => (
          <div key={el.id} className={styles.cardProjects}>
            <div className={styles.imageOverlay}>

            </div>
            <div className={styles.cardProjectsHeader}>
              <h4 className={styles.cardProjectsTitle}>{el.name}</h4>
              {el.language && (
                <span className={styles.cardProjectsLanguage}>{el.language}</span>
              )}
            </div>

            <p className={styles.cardProjectsDesc}>{el.description || "No description provided."}</p>

            <div className={styles.cardProjectsLinks}>
              <a href={el.code} target="_blank" rel="noopener noreferrer"><Github className={styles.icon} />Code</a>
              {el.homepage && (
                <a href={el.homepage} target="_blank" rel="noopener noreferrer"><ExternalLink className={styles.icon} />Demo</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}