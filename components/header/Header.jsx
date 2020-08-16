import styles from "./header.module.scss";
import { Carousel } from "react-bootstrap";

export default function Header() {
  return (
    <header>
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
      <div className={`container ${styles.layer}`}>
        <div className="row">
          <div className='col-8'>
            <img src="images/natural_slowlife.png" />
          </div>
        </div>
        <div className="row">
          <div className="col-8 d-flex justify-content-center">
            <p className="text-center">
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
    </header>
  );
}
