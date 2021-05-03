// IMPORT NEXT.JS & REACT COMPONENTS
import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

// IMPORT GSAP & ANIMATIONS
import gsap from 'gsap';

// IMPORT ASSETS
import { ArrowRightOutlined } from "@ant-design/icons";


export default function About() {

  useEffect(() => {
    gsap.from('.about-title', {
      opacity: 0,
      x: -200,
      ease: 'power4.out',
      duration: 1,
      delay: 1,
      stagger: {
        amount: 0.3
      }
    });

    gsap.from('.about-subtitle', {
      opacity: 0,
      y: 100,
      skewY: 7,
      ease: 'power4.out',
      duration: 1,
      delay: 1.3,
      stagger: {
        amount: 0.3
      }
    });

    gsap.from('p', {
      opacity: 0,
      x: -100,
      ease: 'power4.out',
      duration: 1,
      delay: 2,
      stagger: {
        amount: 0.3
      }
    });

    gsap.from('a', {
      opacity: 0,
      x: -100,
      ease: 'power4.out',
      duration: 1,
      delay: 2,
      stagger: {
        amount: 0.3
      }
    });
  }, []);

  return (
    <div className="about-main">
      <Head>
        <title>DC | A propos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="about-container">
        <div className="about-left-layer">
          <h1 className="about-title">
            DAVID<br/>CHMARZYNSKI
          </h1>
        </div>
        <div className="about-right-layer">
          <h2 className="about-subtitle">
            BIO
          </h2>
          <div className="about-description">
            <p>
              Basé à Marseille, je suis un développeur web fullstack Javascript
              créatif passionné par le design et les animations.<br/>
              Futur étudiant Epitech, je suis à la recherche d'une entreprise 
              accueillant un alternant.</p>
          </div>
          <h2 className="about-subtitle">
            TECHNOS
          </h2>
          <div className="about-technos">
            <div className="about-technos-part-1">
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
              <p>Git</p>
              <p>Github</p>
            </div>
            <div className="about-technos-part-2">
              <p>React.js</p>
              <p>Next.js</p>
              <p>Node.js</p>
              <p>Express.js</p>
              <p>GSAP</p>
            </div>
            <div className="about-technos-part-3">
              <p>MongoDB</p>
              <p>SQL/NoSQL</p>
              <p>Adobe XD</p>
              <p>Production</p>
              <p>PM2</p> 
            </div>
          </div>
          <h2 className="about-subtitle">
            SOCIAL
          </h2>
          <div className="about-social">
            <div className="about-link">
              <Link href="mailto: david.chmarzynski@gmail.com">
                <a className="about-email" target="_blank">EMAIL</a>
              </Link>
              <ArrowRightOutlined />
            </div>
            <div className="about-link">
              <Link href="https://github.com/david-chmarzynski">
                <a className="about-github" target="_blank">GITHUB</a>
              </Link>
              <ArrowRightOutlined />
            </div>
            <div className="about-link">
              <Link href="https://www.linkedin.com/in/david-chmarzynski-3bab78190/">
                <a className="about-linkedin" target="_blank">LINKEDIN</a>
              </Link>
              <ArrowRightOutlined />
            </div>
          </div>
          <h2 className="about-subtitle">
            RECRUTEZ-MOI
          </h2>
          <div className="about-hire">
            <div className="about-epitech">
              E
            </div>
            <div className="about-curriculum">
              CV
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};