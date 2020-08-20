import Nav from "../components/navigation/Navigation";
import Header from "./../components/header/Header";
import Article1 from "./../components/articles/Article1";
import Article2 from "./../components/articles/Article2";
import Card from "./../components/cards/Card";
import AOS from "aos";
import { useEffect, useState } from "react";

export default function Home() {
  const [cards, setCards] = useState([
    {
      image: "offre1.jpg",
      title: "NOËL À LA GREE DES LANDES",
      description: "Le Bien-Être s'invite à Noël",
      price: "490",
      persons: "2",
      nights: "1",
      type: "stay",
    },
    {
      image: "offre2.jpg",
      title: "RÉVEILLON DE LA SAINT-SYLVESTRE",
      description:
        "Un séjour d'exception pour la fin d'année à partager avec vos amis ou votre famille. Réservation jusqu'au 20/12/2017",
      price: "1042",
      persons: "2",
      nights: "1",
      type: "stay",
    },
    {
      image: "offre3.jpg",
      title: "COFFRET CADEAUX",
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
    <>
      <Nav />
      <main>
        <Header />
        <section>
          <Article1 />
          <Article2 />
        </section>
        <section className="container">
          <div className="row">
            {cards.map((card) => {
              return (
                <div className="col">
                  <Card data={card} />
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
