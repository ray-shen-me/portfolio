import Link from "next/link";
import styles from '../styles/Project.module.css';
import nav from '../styles/nav.module.css';
import Head from 'next/head';
import React from "react";
import { useState } from 'react';
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function project() {
  const [cards] = useState([
    {
      title: ' 🥭 Mango Chat',
      image: './mangochat.png',
      text: 'Chat privately and send money securely with MangoChat. MangoChat is a decentralized and end-to-encrypted chat web application that is capable of sending $DESO coin. It was made within 24 hours during HackTJ 9.0 and won the best overall hack award 🥳!',
      github: 'https://github.com/notken12/mangochat',
    },
    {
      title: ' 🍴 Foody',
      image: './Foody-logos_transparent.png',
      text: 'Barcode scanning app for quick nutritional information, improves food information accessibility with translation and text-to-speech features for wider accessibility. Supports the food pharmacy program. Made in 24 hours during HackTJ 10.0',
      github: 'https://github.com/rayyshen/foody'
    },
    {
      title: ' 👋 Portfolio',
      image: './portfolio.png',
      text: 'This website was made with Next.js and React, it was my first reactive web project and I learned a lot about front end web design. It\'s currently a work in progress and hosted on Google Cloud.',
      github: 'https://github.com/rayyshen/portfolio'
    }
  ])

  return (

    <div className={styles.container}>
      <Head>
        <title>Ray Shen | Projects</title>
        <link rel="icon" type="image/x-icon" href="/public/favicon.ico"></link>
      </Head>
      <meta charset="UTF-8"></meta>

      <main className={inter.className}>
        <div className={nav.navbtn}>
          <div className={nav.nav}>
            <input type="checkbox"></input>
            <span></span>
            <span></span>
            <div className={nav.menu}>
              <li><Link href="./">Home</Link></li>
              <li><Link href="./aboutme">About</Link></li>
            </div>
          </div>
        </div>
        <div className={styles.cardbody}>
          <section className={styles.cardsection}>
            <div className={styles.cardcontainer}>
              <h1 className={styles.bigtitle}>Projects</h1>
              <div className={styles.cards}>
                {
                  cards.map((card, i) =>
                    <div key={i} className={styles.card}>
                      <h3 className={styles.cardtitle}>{card.title}</h3>
                      <img className={styles.projectimage} src={card.image}></img>
                      <p className={styles.cardtitle}>
                        {card.text}
                      </p>
                      <a href={card.github} target="_blank"><button className={styles.btn}><img src="github.svg" className={styles.icon}></img>Github</button></a>
                    </div>)
                }
              </div>
            </div>
          </section>
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

  // function mangochat() {
  //   return (
  //     <div className="card">
  //       <img src="/public/mangochat.png" alt="Mangochat Logo" style="width:100%"></img>
  //         <h1>Mango Chat</h1>
  //         <p className="cotainer-title">CEO & Founder, Example</p>
  //         <p>Chat privately and send money securely with MangoChat. MangoChat is a decentralized and end-to-encrypted chat web application that is capable of sending $DESO coin. It was made within 24 hours during HackTJ 9.0 and won the best overall hack award 🥳!</p>
  //         <a href="#"><i class="fa fa-dribbble"></i></a>
  //         <a href="#"><i class="fa fa-twitter"></i></a>
  //         <a href="#"><i class="fa fa-linkedin"></i></a>
  //         <a href="#"><i class="fa fa-facebook"></i></a>
  //     </div>
  //   );
  // }
}
