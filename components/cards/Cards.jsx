import Card from "./Card";
import AOS from "aos";
import { useEffect, useState } from "react";
import styles from "./cards.module.scss";

function Cards() {
  const [cards, setCards] = useState([
    {
      image: "offre1.jpg",
      title: "noël à la grée des landes",
      description: "Le Bien-Être s'invite à Noël",
      price: "490",
      persons: "2",
      nights: "1",
      type: "stay",
    },
    {
      image: "offre2.jpg",
      title: "réveillon de la saint-sylvestre",
      description:
        "Un séjour d'exception pour la fin d'année à partager avec vos amis ou votre famille. Réservation jusqu'au 20/12/2017",
      price: "1042",
      persons: "2",
      nights: "1",
      type: "stay",
    },
    {
      image: "offre3.jpg",
      title: "coffret cadeaux",
      description: [
        "séjour",
        "soin et bien être",
        "Gastronomie",
        "Cabane d'exception",
        "Chèques Cadeaux",
      ],
      price: "48",
      persons: "2",
      nights: "0",
      type: "present",
    },
  ]);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

    return (
      <div className="container">
        <div className="row">
          {cards.map((card, key) => {
            return (
              <div key={key} className={`col ${styles.cardsParent}`}>
                <Card data={card} />
              </div>
            );
          })}
        </div>
      </div>
    );
}

export default Cards;