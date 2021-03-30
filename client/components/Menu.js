import Link from 'next/link';
import styles from '../styles/Menu.module.scss';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';

export default function Menu() {
  return (
    <div className={styles.menu}>
      <div className={styles.secondaryBackground}></div>
      <div className={styles.menuLayer}>
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