import Card from "./Card";
import AOS from "aos";
import React, { Component } from "react";
import styles from "./cards.module.scss";
import FetchData from "./../../services/FetchData";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.fetchData = null;
    this.state = {
      cards: []
    };
  }

  fetchSuccess = (cards) => {
    console.log(cards);
    console.log("cards: ", cards);
    this.setState({ ...this.state, cards });
    console.log(this.state);
  };

  componentDidMount = () => {
    this.fetchData = new FetchData();
    this.fetchCards();
    // AOS.init({ duration: 2000 });
  };
  
  fetchCards = async () => {
    await this.fetchData.getData(this.fetchSuccess, this.props.source);
  };

  render() {
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
}

export default Cards;
