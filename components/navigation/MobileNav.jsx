import styles from "./mobileNav.module.scss";
import Link from "next/link";
import React, { useState } from "react";

export default function MobileNav({ navigation, changeNavState }) {
  const [isNavCollapse, setIsNavCollapse] = useState(true);

  const handleClickMobileButton = () => {
    const hamburger = document.querySelector("button.hamburger");
    toggleCollapseNav(hamburger);
  };

  const toggleCollapseNav = (target) => {
    if (isNavCollapse) {
      target.classList.add("hamburger--collapse");
      target.classList.add("is-active");
      setIsNavCollapse(false);
    } else {
      target.classList.remove("hamburger--collapse");
      target.classList.remove("is-active");
      setIsNavCollapse(true);
    }
  };

  const handleClickLink = ({target}) => {
    changeNavState(target.getAttribute("index"));
    setIsNavCollapse(true);

    const hamburger = document.querySelector("button.hamburger");
    hamburger.classList.remove("hamburger--collapse");
    hamburger.classList.remove("is-active");
  };

  return (
    <>
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
        {!isNavCollapse && (
          <div className={`row ${styles.menu}`}>
            <div className="col">
              {navigation.map((link, key) => {
                if (link.state) {
                  return (
                    <p
                  
                      key={key}
                      onClick={handleClickLink}
                      className={styles.activeLinkMobile}
                    >
                      <Link href={link.path}>
                        <a index={key}>~ {link.title}~</a>
                      </Link>
                    </p>
                  );
                } else {
                  return (
                    <p key={key} onClick={handleClickLink}>
                      <Link href={link.path}>
                        <a index={key}>~ {link.title}~</a>
                      </Link>
                    </p>
                  );
                }
              })}
            </div>
          </div>
        )}
      </nav>
      )
    </>
  );
}
