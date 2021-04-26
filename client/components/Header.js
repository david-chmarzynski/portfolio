import Link from 'next/link';
import styles from '../styles/Header.module.scss';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';


export default function Header({ state, setState }) {
    let router = useRouter();

    // Able/Disable button menu
    let [disabled, setDisabled] = useState(false);

    useEffect(() => {
        disableMenu();
        if(router.pathname !== "/") {
            setState({ deployed: false, clicked: null, menu: "Closed" });
        } else {
            setState({ deployed: true, clicked: true, menu: "Home" });
        }
    }, [router]);

    const handleMenu = () => {
        setDisabled(true);
        setState({ deployed: true, clicked: true, menu: "Home"})
    }

    const disableMenu = () => {
      setDisabled(!disabled);
      setTimeout(() => {
          setDisabled(false);
      }, 1000);
    };
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.innerHeader}>
                        <div className={styles.logo}>
                            <Link href="/">
                                <a
                                  className={!state.deployed && router.pathname !== "/about" ? styles.linkDark : styles.linkLight}
                                  onClick={handleMenu}
                                >
                                    DAVID CHMARZYNSKI
                                </a>
                            </Link>
                            <span className={!state.deployed && router.pathname !== "/about" ? styles.spanDark : styles.spanLight}>FR</span>
                        </div>
                        {!state.deployed &&  (
                            <Link href="/">
                                <a
                                  className={!state.deployed && router.pathname !== "/about" ? styles.linkDark : styles.linkLight}
                                  onClick={handleMenu}
                                >
                                  {!disabled ?  <CloseOutlined className={styles.svg} /> : null}
                                </a>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
};