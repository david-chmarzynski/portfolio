import styles from '../../styles/About.module.scss';
import tableau2 from '../../datas/index.js';

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.cover}></div>
      <div className={styles.container}>
        <div className={styles.layerLeft}>
          <span className={styles.span}>
            David Chmarzynski
          </span>
        </div>
        <div className={styles.layerRight}>
          {tableau2.tableau2.map(tab => (
            <div className={styles.block}>
              <div className={tab.title === "Education" ? styles.firstMainTitle : styles.mainTitle}>
                <div className={styles.title}>
                  {tab.title}
                </div>
                <span className={styles.line}></span>
                <div className={styles.number}>
                  {tab.number}
                </div>
              </div>
              {tab.subtitles.map(sub => (
                <div className={styles.sub}>
                  <div className={styles.subtitle}>
                     {sub.title}
                  </div>
                  <span className={styles.line}></span>
                  <div className={styles.year}>
                     {sub.year}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};