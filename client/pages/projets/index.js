import styles from '../../styles/Projets.module.scss';


export default function Projets() {
  return (
    <div className={styles.projets}>
      <div className={styles.container}>
        <div className={styles.layer}>
          <div className={styles.messengerImage}>
            <div className={styles.titleLayer}>
              <h1 className={styles.title}>Messenger</h1>
                <span className={styles.line}></span>
                <span className={styles.number}>01</span>
            </div>
            <div className={styles.subTitleLayer}>
              <h2 className={styles.subtitle}>Application</h2>
              <span className={styles.year}>2021</span>
            </div>
          </div>
        </div>
        <div className={styles.counter}>
          <div className={styles.firstCounter}>
            1
          </div>
          <span className={styles.lineCounter}></span>
          <div className={styles.secondCounter}>
            2
          </div>
        </div>
      </div>
    </div>
  );
};