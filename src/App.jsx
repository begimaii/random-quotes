import React, { Component } from "react";
import { quotes } from "./data";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 0,
    };
    this.data = quotes;
  }

  handlePrevQuote = () => {
    this.setState((prevState) => ({
      currentIndex:
        (prevState.currentIndex - 1 + this.data.length) % this.data.length,
    }));
  };
  handleNextQuote = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % this.data.length,
    }));
  };
  render() {
    const currentQuote = this.data[this.state.currentIndex];
    console.log(currentQuote);
    return (
      <div className="app">
        <p>{currentQuote.text}</p>
        <p>- {currentQuote.author}</p>
        <div className="buttons">
          <button onClick={this.handlePrevQuote}>Previous</button>
          <button onClick={this.handleNextQuote}>Next</button>
        </div>
      </div>
    );
  }
}
