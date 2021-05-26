// IMPORT NEXT.JS & REACT COMPONENTS
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// IMPORT ASSETS
import RightArrow from './arrow-right.svg';

// IMPORT GSAP & ANIMATIONS
import gsap from 'gsap';

// PROJETS ARRAY
const projects = [
  {id: 1, title: "Messenger", subtitle: "Application de discussion en temps réel.", img: "/images/mess.jpg", link: "http://messenger-new.herokuapp.com/"},
  {id: 2, title: "Local Drive", subtitle: "Plateforme \"Click & Collect\" pour le marché local.", img: "/images/local.jpg", link: "http://local-drive.fr/"},
  {id: 3, title: "Epitech", subtitle: "Alternance MSC Pro Epitech [2021-2024]", img: "/images/epitech.jpg", link: "https://www.epitech.eu/msc-pro/"}
]

export default function Projets({ setState }) {
  let router = useRouter();
  let [disabled, setDisabled] = useState(false);
  
  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(".projets-line span",{
      y: 100,
      skewY: 7,
      delay: 1,
      duration: 1.5,
      ease: "power4.out",
      stagger: {
        amount: 0.3
      }
    }).to(".projets-overlay-top",{
      height: 0,
      duration: 1.3,
      ease: "expo.inOut",
      stagger: 0.4
    }).to(".projets-overlay-bottom",{
      width: 0,
      duration: 1.6,
      ease: "expo.inOut",
      display: "none",
      stagger: {
        amount: .4
      }
    }).to(".projets-intro-overlay",{
      duration: 0,
      css: {
        display: "none"
      }
    }).from(".projets-case-image img", {
      duration: 1.4,
      scale: 1.2,
      ease: "expo.inOut",
      delay: -2,
      stagger: {
        amount: 0.4
      }
    });
  }, []);

  const handleMenu = () => {
    gsap.to([".projets-main", ".about-main"], {
        opacity: 0,
        duration: .8
    });
    setDisabled(true);
    setTimeout(() => {
        router.replace("/about");
        router.pathname = "/about";
        setState({ deployed: false, clicked: true, menu: "Home"});
    }, 850)
};

const handleEnterCase = (e) => {
  console.log("enter");
}
  return (
    <div className='projets-main'>
      <Head>
        <title>DC | Projets</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="projets-container">
      <>
        <div className="projets-intro-overlay">
          <div className="projets-top">
            <div className="projets-overlay-top"></div>
            <div className="projets-overlay-top"></div>
            <div className="projets-overlay-top"></div>
          </div>
          <div className="projets-bottom">
            <div className="projets-overlay-bottom"></div>
            <div className="projets-overlay-bottom"></div>
            <div className="projets-overlay-bottom"></div>
          </div>
        </div>
      </>
        <div className="projets-row">
          <h2>
            <div className="projets-line">
              <span className="projets-span">Retrouvez une sélection</span>
            </div>
            <div className="projets-line">
              <span className="projets-span">de projets.</span>
            </div>
          </h2>
          <div className="projets-btn-row">
            <a onClick={handleMenu}>En savoir plus<RightArrow /></a>
          </div>
        </div>
        <div className="projets-cases">
          <div className="projets-container">
          <div className="projets-cases-row">
            {projects.map((el) => (
              <a className="projets-case" href={el.link} target="_blank">
                <div className="projets-case-details">
                  <span>{el.title}</span>
                  <h2>{el.subtitle}</h2>
                </div>
                <div className="projets-case-image">
                  <img src={el.img} alt={el.title}/>
                </div>
              </a>
            ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}