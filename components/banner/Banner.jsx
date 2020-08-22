import styles from "./banner.module.scss";
import { useEffect } from "react";
import AOS from "aos";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";

export default function Banner({
  title = "Title",
  background = "header2.jpg",
  titleStyle = "fade-in",
  titleColor = "#8b9620"
}) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

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
          {title}
        </h1>
      ),
      amount: 0.0,
    },
  ];

  return (
    <ParallaxProvider>
      <ParallaxBanner
        layers={layer}
        style={{
          height: "45vw",
        }}
      ></ParallaxBanner>
    </ParallaxProvider>
  );
}
