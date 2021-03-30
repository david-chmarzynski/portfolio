import styles from '../../styles/About.module.scss';
import tableau2 from '../../datas/index.js';

export default function About() {
  console.log(tableau2.tableau2);
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.layerLeft}>
          <span className={styles.span}>
            David Chmarzynski
          </span>
        </div>
        <div className={styles.layerRight}>
          {tableau2.tableau2.map(tab => (
            <div className={styles.block}>
              <div className={styles.mainTitle}>
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