import Link from 'next/link';
import styles from '../styles/Menu.module.scss';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import { useRef, useEffect } from 'react';

// IMPORT GSAP & ANIMATIONS
import { gsap } from 'gsap';
import { staggerRevealClose, staggerReveal, handleHover, handleHoverExit } from '../animations/Menu.animation';


export default function Menu({state, setState}) {
    // REFS
    let menu = useRef(null);
    let reveal1 = useRef(null);
    let reveal2 = useRef(null);
    let line1 = useRef(null);
    let line2 = useRef(null);
    let line3 = useRef(null);

    // ON MOUNT
    useEffect(() => {
      if(state.deployed === false) {
        staggerRevealClose(reveal2, reveal1, menu);
      } else if(state.deployed === true) {
        staggerReveal(reveal1, reveal2, menu);
      }
    }, [state]);
  return (
    <div className={styles.menu} ref={el => (menu = el)}>
      <div className={styles.secondaryBackground} ref={el => (reveal1 = el)}></div>
      <div className={styles.menuLayer} ref={el => (reveal2 = el)}>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.menuLinks}>
              <nav className={styles.nav}>
                <ul className={styles.ul}>
                  <li className={styles.link}>
                    <Link href="/about">
                      <a
                        className={styles.a}
                      >
                        à propos.
                      </a>
                    </Link>
                  </li>
                  <li className={styles.link}>
                    <Link href="/contact">
                      <a
                        className={styles.a}
                      >
                        contact.
                      </a>
                    </Link>
                  </li>
                  <li className={styles.link}>
                    <Link href="/projets">
                      <a
                        className={styles.a}
                      >
                        projets.
                      </a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <footer className={styles.footer}>
            <GithubOutlined />
            <LinkedinOutlined />
          </footer>
        </div>
      </div>
    </div>
  )
}