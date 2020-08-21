import styles from "./card.module.scss";

function Card({ data }) {
  const displayDescription = () => {
    if (typeof data.description === "object") {
      return (
        <ul>
          {data.description.map((li) => {
            return <li>{li}</li>;
          })}
        </ul>
      );
    } else {
      return <p>{data.description}</p>;
    }
  };
  return (
    <div data-aos="fade-in" className={`${styles.cardContent}`}>
      <div className={`container ${styles.image}`}>
        <div className="row ">
          <div className="col">
            <img src={`/images/${data.image}`} />
          </div>
        </div>
      </div>
      <div className={`container ${styles.offer}`}>
        <div className="row">
          <div className={`col ${styles.fixedContent}`}>
            <h2>{data.title.toUpperCase()}</h2>
          </div>
        </div>
        <div className="row">
          <div className={`col ${styles.fixedContent}`}>
            {displayDescription()}
          </div>
        </div>
        <div className="row">
          <div className="col">
            <span>{data.price} EUR</span>
          </div>
          <div className="col text-right">
            <p>{data.persons} personne(s)</p>
            {data.type === "stay" ? <p>{data.nights} nuitée(s)</p> : <p>-</p>}
          </div>
        </div>
        <div className="row justify-centent center">
          <div className="col text-center">
            <button className={styles.button} type="button">
              EN SAVOIR PLUS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
