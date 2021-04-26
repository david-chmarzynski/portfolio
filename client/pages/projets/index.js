import styles from '../../styles/Projets.module.scss';
import Link from 'next/link';
import RightArrow from './arrow-right.svg';
import LeftArrow from './arrow-left.svg';
import IntroOverlay from '../../components/IntroOverlay';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

const projects = [
  {id: 1, title: "Messenger", subtitle: "Application de discussion en temps réel.", img: "/images/messenger.jpg"},
  {id: 2, title: "Local Drive", subtitle: "Plateforme \"Click & Collect\" pour le marché local.", img: "/images/local.jpg"},
  {id: 3, title: "Epitech", subtitle: "Alternance MSC Pro Epitech [2021-2024]", img: "/images/epitech_m.jpg"}
]

export default function Projets() {
  
  let line1 = useRef(null);
  let overlayTop1 = useRef(null);
  let overlayTop2 = useRef(null);
  let overlayTop3 = useRef(null);
  let overlayBottom1 = useRef(null);
  let overlayBottom2 = useRef(null);
  let overlayBottom3 = useRef(null);
  let introOverlay = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(".line", 0.5,{
      opacity: 0,
      y: 100,
      skewY: 7,
      delay: 1,
      ease: "power4.out",
    }).to(".overlayTop", 1.6,{
      height: 0,
      ease: "expo.inOut",
      stagger: 0.4
    }).to(".overlayBottom", 1.6,{
      width: 0,
      ease: "expo.inOut",
      display: "none",
      stagger: {
        amount: .4
      }
    }).to(introOverlay, 0,{
      css: {
        display: "none"
      }
    }).from(".caseImage img", 1.6, {
      scale: 1.2,
      ease: "expo.inOut",
      delay: -2,
      stagger: {
        amount: 0.4
      }
    })
  }, []);
  return (
    <div className={styles.projets}>
      <div className={styles.container}>
      <>
        <div className={styles.introOverlay} ref={el => (introOverlay = el)}>
          <div className={styles.top}>
            <div className="overlayTop" ref={el => (overlayTop1 = el)}></div>
            <div className="overlayTop" ref={el => (overlayTop2 = el)}></div>
            <div className="overlayTop" ref={el => (overlayTop3 = el)}></div>
          </div>
          <div className={styles.bottom}>
            <div className="overlayBottom" ref={el => (overlayBottom1 = el)}></div>
            <div className="overlayBottom" ref={el => (overlayBottom2 = el)}></div>
            <div className="overlayBottom" ref={el => (overlayBottom3 = el)}></div>
          </div>
        </div>
      </>
        <div className={styles.row}>
          <h2 ref={el => (line1 = el)}>
            <div className="line">
              <span >Retrouvez une sélection</span>
            </div>
            <div className="line">
              <span>de projets.</span>
            </div>
          </h2>
          <div className={styles.btnRow}>
            <Link href="/about">
              <a>En savoir plus<RightArrow /></a>
            </Link>
          </div>
        </div>
        <div className={styles.cases}>
          <div className={styles.container}>
          <div className={styles.casesNav}>
            <div className={styles.casesArrowPrev}>
              <LeftArrow />
            </div>
            <div className={styles.casesArrowNext}>
              <RightArrow />
            </div>
          </div>
          <div className={styles.casesRow}>
            {projects.map((el) => (
              <div className={styles.case} key={el.id}>
                <div className={styles.caseDetails}>
                  <span>{el.title}</span>
                  <h2>{el.subtitle}</h2>
                </div>
                <div className="caseImage">
                  <img src={el.img} alt={el.title}/>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}