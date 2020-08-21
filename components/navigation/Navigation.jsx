import styles from "./nav.module.scss"
import { Navbar, Nav } from "react-bootstrap";
import Link from 'next/link';
import React, { useState, useEffect } from "react";

export default function Navigation() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    window.addEventListener('resize',changeNavbar)
    window.innerWidth < 768 ? setIsMobile(true) :  setIsMobile(false);
  });

  const changeNavbar = () => {
    window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false);
  }

  

  const handleClickMobileButton = () => {
   const hamburger = document.querySelector('button.hamburger');
    hamburger.classList.add("hamburger--vortex");
    hamburger.classList.add("is-active");
    console.log(hamburger)
  }
    return (
      <>
        {!isMobile ? (
          <Navbar bg="light" variant="light">
            <Nav className="mr-auto">
              <div className="col d-flex  align-items-center justify-content-center">
                <img src="/images/logo.png" />
              </div>
              <Link href="/">
                <a className={styles.link}>Accueil</a>
              </Link>
              <Link href="/">
                <a className={styles.link}>Nos services</a>
              </Link>
              <Link href="/">
                <a className={styles.link}>Nos produits</a>
              </Link>
              <Link href="/">
                <a className={styles.link}>À propos d'Yves Rocher</a>
              </Link>
            </Nav>
            <div className="col d-flex  align-items-center justify-content-end mr-3">
              <button className={styles.button} type="button">
                RESERVER
              </button>
            </div>
          </Navbar>
        ) : (
          <nav className="container-fluid navigation my-1">
            <div className="row">
              <div className="col d-flex align-items-center">
                <button
                  onClick={handleClickMobileButton}
                  className={`hamburger`}
                  type="button"
                >
                  <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                  </span>
                </button>
              </div>
              <div className="col d-flex  align-items-center justify-content-center">
                <img className={styles.logo} src="/images/logo.png" />
              </div>
              <div className="col d-flex  align-items-center justify-content-end mr-3">
                <button className={styles.button} type="button">
                  RESERVER
                </button>
              </div>
            </div>
            <div className={`row ${styles.menu}`}>
              <div className="col">
                <p className={styles.activeButton}> <a>~ Accueil ~</a> </p>
                <p> <a>~ Nos services ~</a> </p>
                <p> <a>~ Nos Produits ~ </a></p>
                <p> <a>~ Yves Rocher ~ </a></p>
              </div>
            </div>
          </nav>
        )}
      </>
    );
}
