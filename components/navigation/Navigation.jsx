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
    return (
      <>
        {!isMobile ? (
          <Navbar bg="light" variant="light">
            <Nav className="mr-auto">
              <div className="col d-flex  align-items-center justify-content-center">
                <img className={styles.logo} src="/images/logo.png" />
              </div>
              <Link href="/">
                <a class={styles.link}>Accueil</a>
              </Link>
              <Link href="/">
                <a class={styles.link}>Nos services</a>
              </Link>
              <Link href="/">
                <a class={styles.link}>Nos produits</a>
              </Link>
              <Link href="/">
                <a class={styles.link}>À propos d'Yves Rocher</a>
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
              <div className="col d-flex  align-items-center justify-content-start ml-3">
                <img className={styles.burger} src="/svg/open-menu.svg" />
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
          </nav>
        )}
      </>
    );
}
