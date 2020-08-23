import styles from "./headerCarousel.module.scss";
import { Carousel } from "react-bootstrap";

export default function HeaderCarousel() {
  return (
    <div className={styles.headerCarousel}>
      <div data-aos="fade-in">
        <div className={`${styles.reactCarousel}`}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/header.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/header2.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className={`container ${styles.layer}`}>
          <div className="row">
            <div className="col-8">
              <img src="images/natural_slowlife.png" />
            </div>
          </div>
          <div className="row">
            <div className="col-8 d-flex justify-content-center">
              <p className={`text-center ${styles.innerSlogan}`}>
                Un temps pour retrouver, dans la nature, l'essence même du bien
                être
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-8 d-flex justify-content-center">
              <button className="button">DECOUVRIR</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <p className={`text-center ${styles.outerSlogan}`}>
              Un temps pour retrouver, dans la nature, l'essence même du bien
              être
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

{
 
}
