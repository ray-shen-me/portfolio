import Head from 'next/head';
import styles from '../styles/Aboutme.module.css';
import Link from 'next/link';
import * as React from "react";
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })


export default function aboutme() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ray Shen | About Me</title>
        <link rel="icon" type="image/x-icon" href="/public/favicon.ico"></link>
      </Head>

      <main className={inter.className}>
        <section>
          <div className={styles.scontainer}>
            <div className={styles.content}>
              <span className={styles.subtitle}>
                Hey 👋
              </span>
              <h1 className={styles.title}>
                I'm <span>Ray</span> a Student & Developer
              </h1>
              <p className={styles.description}>
                Welcome to my portfolio website! I'm Ray, a student at Oakton High School with an interest in Computer Science. In my free time I love to participate in hackathons, explore nature, cook, and eat. I'm excited to learn and am currently looking for entry-level tech interships/programs so feel free to contact me.
              </p>

              <div className={styles.btncontainer}>
                <a href="./Ray_Shen_-_Resume.pdf" target="_blank"><button className={styles.btn}><img src="resume.svg" className={styles.icon}></img>CV Download</button></a>
                <a href="https://www.linkedin.com/in/ray-shen-15b7b8260/" target="_blank"><button className={styles.btn}><img src="linkedin.svg" className={styles.icon}></img>LinkedIn</button></a>
                <a href="https://github.com/rayyshen" target="_blank"><button className={styles.btn}><img src="github.svg" className={styles.icon}></img>Github</button></a>
                <a href="https://www.instagram.com/ray.shen_/" target="_blank"><button className={styles.btn}><img src="instagram.svg" className={styles.icon}></img>Instagram</button></a>
              </div>
            </div>
            <div className={styles.image}>
              <img src="./ray2.jpg" alt="pfp" className={styles.rayimg}></img>
            </div>
          </div>
        </section>
      </main>


      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
