import Card from "./Card";
import React, { Component } from "react";
import styles from "./cards.module.scss";
import FetchData from "./../../services/FetchData";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount = async () => {
    const fetchData = new FetchData();
    try {
      await fetchData.getData(this.fetchSuccess, "data-home");
    } catch (error) {
      this.fetchFailed(error);
    }
  };

  fetchSuccess = (data) => {
    const copyState = { ...this.state };
    copyState.data = data;
    this.setState(copyState);
    console.log("in success", this.state.data.cards);
  };

  fetchFailed = (error) => {
    console.log(error);
  };

  render() {
    return (
      <div className="container">
        {/* <div className="row">
          {this.state.data.cards.map((card, key) => {
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
