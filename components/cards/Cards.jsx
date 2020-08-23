import Card from "./Card";
import AOS from "aos";
import { useEffect, useState } from "react";
import styles from "./cards.module.scss";
import FetchData from "./../../services/FetchData";

function Cards() {
  const fetchData = new FetchData();
  const [cards, setCards] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    fetchCards();
    // AOS.init({ duration: 2000 });
  },[cards]);

  const fetchCards = async () => {
    try {
    await fetchData.getData( (data)=> {
        console.log("toto", data);
        console.log(data);
        if (cards === []) {
          setCards(data);
        }
        console.log("cards: ", cards);
        
      },"data-home")
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container">
      {/* <div className="row">
          {cards.map((card, key) => {
            return (
              <div key={key} className={`col ${styles.cardsParent}`}>
                <Card data={card} />
              </div>
            );
          })}
        </div> */}
    </div>
  );
}

export default Cards;
