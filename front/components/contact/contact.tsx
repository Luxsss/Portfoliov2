"use client"
import { useState } from 'react'
import styles from './style.module.css'
import { Mail, Github, Linkedin, Twitter } from "lucide-react"
import { toast } from "sonner";

export default function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState();

  const socialLinks = [
    { icon: Github, href: "https://github.com/Luxsss", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/alexs-brun/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:alexis-dominique.brun@epitech.eu", label: "Email" },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!message.trim() || !email.trim() || !name.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("https://submit-form.com/Cp2sSeUN6", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          message: message,
          _email: {
            from: email,
            subject: name,
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      await response.json();

      toast.success("Your message has been sent successfully!");
      setName("");
      setEmail("");
      setMessage("");

    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

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
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} id="prenom" name="prenom" placeholder='Your name' required />

            <label htmlFor="email">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" name="email" placeholder='your@email.com' required />

            <label htmlFor="message">Message</label>
            <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} name="message" rows={4} placeholder='Your message' required></textarea>

            <button type="submit">Send the message</button>
          </form>
        </div>
      </div>
    </section>
  )
}
