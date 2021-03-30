import Link from 'next/link';
import styles from '../../styles/About.module.scss';

export default function About() {
    return (
        <div className={styles.about}>
            <div className={styles.container}>
                <div className={styles.layerLeft}>
                    <span className={styles.span}>
                        David Chmarzynski
                    </span>
                </div>
                <div className={styles.layerRight}>
                    <div className={styles.education}>
                        <div className={styles.title}>
                            EDUCATION
                        </div>
                        <span className={styles.line}></span>
                        <div className={styles.num}>
                            01
                        </div>
                    </div>
                    <div className={styles.subEducation}>
                        <div className={styles.subtitle}>
                            Lycée louis pasteur
                        </div>
                        <span className={styles.line}></span>
                        <div className={styles.year}>
                            2013
                        </div>
                    </div>
                    <div className={styles.subEducation}>
                        <div className={styles.subtitle}>
                            O'Clock
                        </div>
                        <span className={styles.line}></span>
                        <div className={styles.year}>
                            2019
                        </div>
                    </div>
                    <div className={styles.education}>
                        <div className={styles.title}>
                            FUTUR
                        </div>
                        <span className={styles.line}></span>
                        <div className={styles.num}>
                            02
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};