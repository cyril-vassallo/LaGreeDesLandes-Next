import styles from "./article2.module.scss";

export default function Article2() {
  return (
    <article data-aos="" className={`container ${styles.article2}`}>
      <div className={styles.container1}>
        <div className={styles.text}>
          <span>11:07</span>
          <h2>UN DOUX RÉVEIL</h2>
          <p>LAISSER LA NATURE VOUS RÉVEILLER TOUT EN DOUCEUR</p>
        </div>
        <div className={styles.image1}>
          <img src="/images/chambre22-123-15.jpg" />
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.image2}>
          <img src="/images/YRshoot1-2322-15.jpg" />
        </div>
      </div>
    </article>
  );
}
