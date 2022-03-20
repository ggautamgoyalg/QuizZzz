import React, { Component } from "react";

export default class Submitted extends Component {
  render() {
    let { indx, answer } = this.props;

    return (
      <>
        <br />
        <div className="d-flex justify-content-center">
          {indx}. {answer}
        </div>
      </>
    );
  }
}
