// @ts-nocheck
import React, { Component } from "react";

import "./styles.css";

export class Button extends Component {
  render() {
    const { text, onClick, disabled } = this.props;
    return (
      <button className="btn btn-primary" disabled={disabled} onClick={onClick}>
        {text}
      </button>
    );
  }
}
