import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import {gsap} from 'gsap';


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
        gsap.to([".projets-main", ".about-main"], {
            opacity: 0,
            duration: .8
        });
        setDisabled(true);
        setTimeout(() => {
            router.replace("/");
            router.pathname = "/";
            setState({ deployed: true, clicked: true, menu: "Home"});
        }, 850)
    };

    const disableMenu = () => {
      setDisabled(!disabled);
      setTimeout(() => {
          setDisabled(false);
      }, 1000);
    };
    return (
        <header className="header-main">
          <div className="header-container">
            <div className="header-wrapper">
              <div className="header-inner">
                <div className="header-logo">
                  <a className={!state.deployed && router.pathname !== "/about" ? "header-link-dark" : "header-link-light"} onClick={handleMenu}>
                    DAVID CHMARZYNSKI
                  </a>
                  <span className={!state.deployed && router.pathname !== "/about" ? "header-span-dark" : "header-span-light"}>FR</span>
                  </div>
                  {!state.deployed &&  (
                    <a className={!state.deployed && router.pathname !== "/about" ? "header-link-dark" : "header-link-light"} onClick={handleMenu}>
                      {!disabled ?  <CloseOutlined className="projets-svg" /> : null}
                    </a>
                  )}
              </div>
            </div>
          </div>
        </header>
    )
};