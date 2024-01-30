import Head from 'next/head';
import styles from '../styles/Home.module.css';
import nav from '../styles/nav.module.css';
import Link from 'next/link';
import * as React from "react";
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ray Shen</title>
        <link rel="icon" type="image/x-icon" href="/public/favicon.ico"></link>
      </Head>

      <main className={inter.className}>
        <div className={nav.navbtn}>
          <div className={nav.nav}>
            <input type="checkbox"></input>
            <span></span>
            <span></span>
            <div className={nav.menu}>
              <li><Link href="./project">Projects</Link></li>
              <li><Link href="./aboutme">About</Link></li>
            </div>
          </div>
        </div>
        <h1 className={styles.title}>
          Ray Shen
        </h1>
        <h2 className={styles.names}>Student and Developer</h2>
        <div className={styles.bcontainer}>
          <Link href="/project" className={nav.under}><button className={styles.buttons}><img src="projects.svg" className={styles.icon}></img>Projects</button></Link>
          <a href="https://github.com/rayyshen" target="_blank" className={nav.under}><button className={styles.buttons}><img src="github.svg" className={styles.icon}></img>Github</button></a>
          <Link href="/aboutme" className={nav.under}><button className={styles.buttons}><img src="aboutme.svg" className={styles.icon}></img>About Me</button></Link>
        </div>
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
