import React, { Component } from "react";

export class PrintScore extends Component {
  render() {
    
    let { score } = this.props;
    return (
      <>
        <div className="d-flex justify-content-center bg-success py-3 my-4 h3">
          {" "}
          Your Total Score is : {score}
        </div>
        <div className="d-flex justify-content-center mt-5 h4">
          <i>Correct Answers :</i>

          <br />
        </div>
      </>
    );
  }
}
export default PrintScore;
