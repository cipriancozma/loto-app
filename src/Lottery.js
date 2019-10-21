import React, { Component } from "react";
import Lotoball from "./Lotoball";
import "./Lottery.css";

class Lottery extends Component {
  static defaultProps = {
    title: "Lottery",
    minNum: 6,
    maxNum: 49,
    maxBalls: 6
  };

  constructor(props) {
    super(props);
    this.state = { numbers: Array.from({ length: this.props.maxBalls }) };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(curentState => ({
      numbers: curentState.numbers.map(num =>
        Math.floor(
          Math.random() * (this.props.maxNum - this.props.minNum + 1) +
            this.props.minNum
        )
      )
    }));
  }

  render() {
    return (
      <section className="Lottery">
        <h2>{this.props.title}</h2>
        <div>
          {this.state.numbers.map(num => (
            <Lotoball number={num} />
          ))}
        </div>
        <button onClick={this.handleClick}>Generate!</button>
      </section>
    );
  }
}

export default Lottery;
