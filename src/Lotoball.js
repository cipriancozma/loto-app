import React, { Component } from "react";
import "./Lotoball.css";

class Lotoball extends Component {
  render() {
    return <div className="Ball">{this.props.number}</div>;
  }
}

export default Lotoball;
