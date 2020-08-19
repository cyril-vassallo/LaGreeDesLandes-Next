import styles from "./article1.module.scss";

export default function Article1() {
  return (
    <article data-aos="fade-in" className={`container ${styles.article1}`}>
      <div className={styles.container1}>
        <div className={styles.image1}>
          <img src="/images/Shoot1-433-15.jpg" alt="" />
        </div>
        <div className={styles.text}>
          <span>9:30</span>
          <h2>UN DOUX RÉVEIL</h2>
          <p>LAISSER LA NATURE VOUS RÉVEILLER TOUT EN DOUCEUR</p>
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.image2}>
          <img src="/images/suite6-354-15.jpg" alt="" />
        </div>
      </div>
    </article>
  );
}
