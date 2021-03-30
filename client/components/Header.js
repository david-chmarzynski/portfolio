import Link from 'next/link';
import styles from '../styles/Header.module.scss';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { CloseOutlined } from '@ant-design/icons';


export default function Header({ state, setState }) {
    let router = useRouter();
    useEffect(() => {
        if(router.pathname !== "/") {
            setState({ deployed: false, clicked: null, menu: "Closed" });
        }
    }, [router]);
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.innerHeader}>
                        <div className={styles.logo}>
                            <Link href="/">
                                <a
                                  className={styles.link}
                                  onClick={() => setState({ deployed: true, clicked: true, menu: "Home"})}
                                >
                                    DAVID CHMARZYNSKI
                                </a>
                            </Link>
                            <span className={styles.span}>FR</span>
                        </div>
                        {!state.deployed && (
                            <Link href="/">
                                <a
                                  className={styles.a}
                                  onClick={() => setState({ deployed: true, clicked: true, menu: "Home"})}
                                >
                                  <CloseOutlined className={styles.svg} />
                                </a>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
};