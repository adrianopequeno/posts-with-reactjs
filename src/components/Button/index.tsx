// @ts-nocheck
import React, { Component } from "react";

export class Button extends Component {
  render() {
    const { text, onClick } = this.props;
    return (
      <button className="btn btn-primary" onClick={onClick}>
        {text}
      </button>
    );
  }
}
