import React, { Component } from "react";
import "../styles/Quiz.css"

export class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      background1: "light",
      background2: "light",
      background3: "light",
      background4: "light",
      markedAnswer: 0,
      isCorrect: 0,
    };
  }

  changeBackground1 = () => {
    if (this.state.background1 == "primary") {
      this.setState({
        background1: "light",
        markedAnswer: -1,
      });
      this.props.answer[this.props.indx] = -1;
    } else {
      this.setState({
        background2: "light",
        background3: "light",
        background4: "light",
        background1: "primary",
        markedAnswer: 1,
        isCorrect: 1,
      });

      this.props.answer[this.props.indx] = 1;
    }
  };
  changeBackground4 = () => {
    if (this.state.background4 == "primary") {
      this.setState({
        background4: "light",
        markedAnswer: -1,
      });
      this.props.answer[this.props.indx] = -1;
    } else {
      this.setState({
        background2: "light",
        background3: "light",
        background1: "light",
        background4: "primary",
        markedAnswer: 1,
        isCorrect: 1,
      });

      this.props.answer[this.props.indx] = 0;
    }
  };

  changeBackground2 = () => {
    if (this.state.background2 == "primary") {
      this.setState({
        background2: "light",
        markedAnswer: -1,
      });
      this.props.answer[this.props.indx] = -1;
    } else {
      this.setState({
        background4: "light",
        background3: "light",
        background1: "light",
        background2: "primary",
        markedAnswer: 1,
        isCorrect: 1,
      });

      this.props.answer[this.props.indx] = 0;
    }
  };

  changeBackground3 = async () => {
    if (this.state.background3 == "primary") {
      this.setState({
        background3: "light",
        markedAnswer: -1,
      });
      this.props.answer[this.props.indx] = -1;
    } else {
      this.setState({
        background2: "light",
        background4: "light",
        background1: "light",
        background3: "primary",
        markedAnswer: 1,
        isCorrect: 1,
      });

      this.props.answer[this.props.indx] = 0;
    }
  };
  render() {
    let {
      indx,
      question,
      correct_answer,
      incorrect_answers1,
      incorrect_answers2,
      incorrect_answers3,
    } = this.props;

    return (
      <>
        <div className="my-5">
          <div className="container quizInnerContainer">
            <div className="row bg-light my-3 py-4 questionContainer">
              <div className="col">
                {indx + 1}. {question}
              </div>
            </div>
            <div className="row justify-content-center  mt-4 mb-3">
              <div
                className={` col mx-3 answerContainerBackground-${this.state.background1} py-2 answerContainer`}
                onClick={this.changeBackground1}
              >
                {correct_answer}
              </div>
              <div
                className={` col mx-3 answerContainerBackground-${this.state.background2} py-2 answerContainer`}
                onClick={this.changeBackground2}
              >
                {incorrect_answers1}
              </div>
            </div>

            <div className="row justify-content-center  my-3 ">
              <div
                className={` col mx-3 answerContainerBackground-${this.state.background3} py-2 answerContainer`}
                onClick={this.changeBackground3}
              >
                {incorrect_answers2}
              </div>
              <div
                className={` col mx-3 answerContainerBackground-${this.state.background4} py-2 answerContainer`}
                onClick={this.changeBackground4}
              >
                {incorrect_answers3}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Quiz;
