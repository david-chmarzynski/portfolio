import styles from '../styles/IntroOverlay.module.scss';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

export default function IntroOverlay() {
  let overlayTop1 = useRef(null);
  let overlayTop2 = useRef(null);
  let overlayTop3 = useRef(null);
  useEffect(() => {
    gsap.to(overlayTop3, {
      height: 0,
      ease: "expo.inOut",
      delay: 2
    });
    // gsap.to(overlayTop2, {
    //   height: 0,
    //   ease: "expo.inOut",
    //   delay: 2.1
    // });
    // gsap.to(overlayTop3, {
    //   height: 0,
    //   ease: "expo.inOut",
    //   delay: 2.2
    // });
  }, []);
  return (
    <>
      <div className={styles.introOverlay}>
        <div className={styles.top}>
          <div className={styles.overlayTop} ref={el => (overlayTop1 = el)}></div>
          <div className={styles.overlayTop} ref={el => (overlayTop2 = el)}></div>
          <div className={styles.overlayTop} ref={el => (overlayTop3 = el)}></div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.overlayBottom}></div>
          <div className={styles.overlayBottom}></div>
          <div className={styles.overlayBottom}></div>
        </div>
      </div>
    </>
  )
}