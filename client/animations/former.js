import { useEffect, useRef, useState } from 'react';
import styles from '../../styles/Projets.module.scss';
import { ArrowRightOutlined } from '@ant-design/icons';

// IMPORT GSAP & ANIMATIONS
import gsap from 'gsap';
import { imageAnimation, titleAnimation, subtitleAnimation, numberAnimation, counterAnimation } from '../../animations/Projet.animation';


export default function Projets() {
  // REFS
  let projets = useRef(null);
  let messengerImage = useRef(null);
  let subtitle = useRef(null);
  let year = useRef(null);
  let title = useRef(null);
  let line = useRef(null);
  let number = useRef(null);
  let counter = useRef(null);

  // DISPLAY STATE
  const [isActive, setIsActive] = useState(false);
  
  // ANIMATIONS ON MOUNT
  useEffect(() => {
      imageAnimation(messengerImage);
      titleAnimation(title);
      subtitleAnimation(subtitle, year);
      numberAnimation(line, number);
      counterAnimation(counter);
  });

  return (
    <div className={styles.projets} ref={el => (projets = el)}>
      <div className={styles.container}>
        <div className={!isActive ? styles.layer : styles.invisibleLayer}>
          <div className={styles.messengerImage} ref={el => (messengerImage = el)}>
            <div className={styles.titleLayer}>
              <h1 className={styles.title} ref={el => (title = el)}>Messenger</h1>
                <span className={styles.line} ref={el => (line = el)}></span>
                <span className={styles.number} ref={el => (number = el)}>01</span>
            </div>
            <div className={styles.subTitleLayer}>
              <h2 className={styles.subtitle} ref={el => (subtitle = el)}>Application</h2>
              <span className={styles.year} ref={el => (year = el)}>2021</span>
            </div>
          </div>
        </div>
        <div className={isActive ? styles.layer : styles.invisibleLayer}>
          <div className={styles.localDriveImage}>
            <div className={styles.localTitleLayer}>
              <h1 className={styles.localTitle}>LocalDrive</h1>
                <span className={styles.line}></span>
                <span className={styles.number}>02</span>
            </div>
            <div className={styles.subTitleLayer}>
              <h2 className={styles.subtitle}>Application</h2>
              <span className={styles.year}>2020</span>
            </div>
          </div>
        </div>
        <div className={styles.counter} ref={el => (counter = el)}>
          <div className={styles.firstCounter}>
            1
          </div>
          <span className={styles.lineCounter}></span>
          <div className={styles.secondCounter}>
            2
          </div>
        </div>
        <div className={styles.swiper} onClick={() => setIsActive(!isActive)}>
          <span className={styles.swiperSpan}>Suivant <span className={styles.arrow}><ArrowRightOutlined /></span></span>
        </div>
      </div>
    </div>
  );
};