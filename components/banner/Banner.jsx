import styles from "./banner.module.scss";
import { useEffect, useState } from "react";
import AOS from "aos";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";

export default function Banner({
  title = "Title",
  background = "header2.jpg",
  titleStyle = "fade-in",
  titleColor = "#8b9620"
}) {
  const [bannerStyle, setBannerStyle] = useState({
          height: "45vw",
        })

  useEffect(() => {
    // window.addEventListener('resize', modifyBanner);
    // if (window.innerWidth > 768) {
    //   setBannerStyle({ height: "30vw" });
    // } else {
    //   setBannerStyle({ height: "45vw" });
    // }
    AOS.init({ duration: 1000 });
    return function cleanup(){
      //  window.removeEventListener("resize", modifyBanner);
    }
  });

  const modifyBanner = () => {
    if(window.innerWidth > 768 ){
      setBannerStyle({height : "30vw"});
    }else{
      setBannerStyle({height : "45vw"});
    }
    
  }

  const layer = [
    {
      image: "/images/" + background,
      amount: 0.5,
    },
    {
      children: (
        <h1 data-aos={titleStyle} className={styles.title} style={{
          color: titleColor
        }}>
          {title.toUpperCase()}
        </h1>
      ),
      amount: 0.0,
    },
  ];

  return (
    <ParallaxProvider>
      <ParallaxBanner
        layers={layer}
        style={bannerStyle}
      ></ParallaxBanner>
    </ParallaxProvider>
  );
}
