import styles from "./room.module.scss";

export default function Room() {
  return (
    <article className={`container ${styles.article1}`}>
      <div className={`row  ${styles.room}`}>
        <div className="col-8">
          <img src="/images/Shoot1-433-15.jpg" alt="" />
        </div>
        <div className="col-4 d-flex flex-column align-items-center">
          <span className="clock">9:23</span>
          <h2>UN DOUX RÉVEIL</h2>
          <p className="text-center">
            LAISSER LA NATURE VOUS RÉVEILLER TOUT EN DOUCEUR
          </p>
        </div>
      </div>
      <div className={`row ${styles.layer}`}>
        <div className="col-6"></div>
        <div className={`col ${styles.patron}`}>
          <img src="/images/suite6-354-15.jpg" alt="" />
        </div>
      </div>
    </article>
  );
}
