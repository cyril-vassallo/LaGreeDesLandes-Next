import React, { useState, useEffect } from "react";
import PcNav from "./PcNav";
import MobileNav from "./MobileNav";

export default function Navigation() {
  const [isMobile, setIsMobile] = useState(true);
  const [navigation, setNavigation] = useState([
    { title: "Accueil", path: "/", state: true },
    { title: "Nos offres", path: "/offer", state: false },
    { title: "À propos d'Yves Rocher", path: "/yves-rocher", state: false },
    { title: "Nous contacter", path: "/contact", state: false },
  ]);

  useEffect(() => {
    window.addEventListener("resize", changeNavbar);
    window.innerWidth < 1040 ? setIsMobile(true) : setIsMobile(false);
    return function cleanup() {
      window.removeEventListener("resize", changeNavbar);
    };
  });

  const changeNavbar = () => {
    window.innerWidth < 1040 ? setIsMobile(true) : setIsMobile(false);
  };

  const changeNavState = (activeKey) => {
    let newNavigation = null;
    if (activeKey === null) {
      newNavigation = navigation.map((link) => {
        return { title: link.title, path: link.path, state: link.state };
      });
    } else {
      newNavigation = navigation.map((link) => {
        return { title: link.title, path: link.path, state: false };
      });
      newNavigation = newNavigation.map((link, key) => {
        if (key == activeKey) {
          return { title: link.title, path: link.path, state: true };
        } else {
          return link;
        }
      });
    }
    setNavigation(newNavigation);
  };

  return (
    <>
      {!isMobile ? (
        <PcNav navigation={navigation} changeNavState={changeNavState} />
      ) : (
        <MobileNav navigation={navigation} changeNavState={changeNavState} />
      )}
    </>
  );
}
