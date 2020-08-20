import styles from "./article2.module.scss";

export default function Article2() {
  return (
    <article data-aos="fade-in" className={`container ${styles.article2}`}>
      <div className={styles.container1}>
        <div className={styles.text}>
          <span>11:07</span>
          <h2>DETENTE.</h2>
          <h2>RELAXATION.</h2>
          <h2>SILENCE.</h2>
          <p>SE RESSOURCER, SE RETROUVER...</p>
          <p>UN RITUEL POUR SOI POUR UNE DOUCE ENTREE EN MÂTINE</p>
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
