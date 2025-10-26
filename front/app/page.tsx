import Navbar from "@/components/navbar/navbar";
import Header from "@/components/home/home";
import Techs from "@/components/techs/techs";
import Projects from "@/components/projects/projects";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import styles from "./style.module.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className={styles.content}>
        <Header />
        <Techs />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
