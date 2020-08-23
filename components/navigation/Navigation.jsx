import React, { useState, useEffect } from "react";
import PcNav from "./PcNav";
import MobileNav from "./MobileNav";

export default function Navigation() {
  const [isMobile, setIsMobile] = useState(true);
  const [navigation, setNavigation] = useState([
    { title: "Accueil", path: "/"},
    { title: "Nos offres", path: "/offer"},
    { title: "À propos d'Yves Rocher", path: "/yves-rocher"},
    { title: "Nous contacter", path: "/contact"},
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


  return (
    <>
      {!isMobile ? (
        <PcNav navigation={navigation}/>
      ) : (
        <MobileNav navigation={navigation}/>
      )}
    </>
  );
}
