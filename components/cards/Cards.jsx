import Card from "./Card";
import React, { Component } from "react";
import styles from "./cards.module.scss";


class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        cards: [
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
        ],
      },
    };
  }

  // todo
  // move data in json file in public folder for exemple and fetch data to make a générique cards component
  // use Next.js Specification  
  // getStaticProps (Static Generation on build)
  // or 
  // getServerSideProps (SSR rendering on each request)
  // Or
  // SWR dependency for client side fetching
  //

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.data.cards.map((card, key) => {
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
}

export default Cards;
