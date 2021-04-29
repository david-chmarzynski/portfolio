import '../styles/globals.css';
import { useRouter } from 'next/router';
import { useState } from 'react';

// IMPORT COMPONENTS
import Header from '../components/Header';
import Menu from '../components/Menu';

// IMPORT SASS STYLES
import "../styles/sass/Header.scss";
import "../styles/sass/Projets.scss";
import "../styles/sass/About.scss";

function MyApp({ Component, pageProps }) {
  // ROUTER STATE
  let router = useRouter().pathname;

  // MENU STATE
  const [state, setState] = useState({
    deployed: (router === "/"),
    clicked: false,
    menu: (router === "/") ? "Home" : "Closed"
  });
  return (
    <>
      <Header state={state} setState={setState} />
      <Menu state={state} setState={setState} />
      <Component {...pageProps} setState={setState} />
    </>
  );
};

export default MyApp;
