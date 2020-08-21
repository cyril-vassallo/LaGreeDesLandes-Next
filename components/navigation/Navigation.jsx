import React, { useState, useEffect } from "react";
import PcNav from "./PcNav";
import MobileNav from "./MobileNav";

export default function Navigation() {
  const [isMobile, setIsMobile] = useState(true);
    const [navigation, setNavigation] = useState([
      { title: "Accueil", path:"/" ,state:true},
      { title: "Nos services", path:"/", state:false},
      { title: "Nos produits", path:"/",state:false},
      { title: "À propos d'Yves Rocher", path:"/", state:false},
    ]);

  useEffect(() => {
    window.addEventListener("resize", changeNavbar);
    window.innerWidth < 1040 ? setIsMobile(true) : setIsMobile(false);
    return function cleanup() {
      window.removeEventListener("resize", changeNavbar)
    }
  });

  const changeNavbar = () => {
    window.innerWidth < 1040 ? setIsMobile(true) : setIsMobile(false);
  };

  const changeNavState = (activeKey) => {
    let newNavigation = navigation.map((link, key)=> {
      if(link.state === true){
        return { title: link.title, path: link.path, state: false };
      }
      else if(key == activeKey){
        return {title:link.title, path:link.path, state: true}
      }else{
        return link;
      }
    })
    setNavigation(newNavigation);
    console.log(navigation);
  }

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
