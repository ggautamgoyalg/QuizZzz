import React, { Component } from "react";
import Quiz from "./Quiz";
import Submitted from "./Submitted";
import PrintScore from "./PrintScore";
import Footer from "./Footer";
import LoadingSpinner from "./LoadingSpinner";

var i = -1;
var attempted = 0;
var TotalScore = 0;
var answer = [];

export class Mainpage extends Component {
  constructor() {
    super();
    this.state = {
      questions: [],
      loading: true,
      display: 0,
    };
  }

  async componentDidMount() {
    let url = "https://opentdb.com/api.php?amount=10&&type=multiple";
    let data = await fetch(url);
    let abc = await data.json();

    this.setState({
      questions: abc.results,
      loading: false,
    });
  }

  btnClicked = () => {
    let k = 0;
    attempted = 0;
    TotalScore = 0;
    for (k = 0; k < 10; k++) {
      if (answer[k] === 1) TotalScore++;
      if (answer[k] === 0 || answer[k] === 1) attempted++;
    }
    if (attempted === 10) {
      this.setState({
        display: 1,
      });
    } else {

      alert("attempt all the questions ");
    }
   
  };

  render() {
    return (
      <>
     
      {this.state.loading === true && <LoadingSpinner />}

        <div className="d-flex justify-content-center py-3 my-4 h1" style={{color:"burlywood"}}>
          Welcome to Quiz Zeela
        </div>
      
        <div className="text-black">{(i = -1)}</div>
        <div className="row" style={{margin:"2px"}}>
          {this.state.questions.map((element, index) => {
            i++;

            return (
              <div key={index}>
                <Quiz
                  indx={i}
                  question={element.question}
                  correct_answer={element.correct_answer}
                  incorrect_answers1={element.incorrect_answers[0]}
                  incorrect_answers2={element.incorrect_answers[1]}
                  incorrect_answers3={element.incorrect_answers[2]}
                  answer={answer}
                  />
              </div>
            );
          })}
        </div>

        <div>
          <div className="d-flex justify-content-center">
            <button
              onClick={this.btnClicked}
              disabled={this.state.attempted < 10}
              >
              Submit
            </button>
          </div>

          {this.state.display === 1 && <PrintScore score={TotalScore} />}

          <div className="text-black">{(i = 0)}</div>
          {this.state.display === 1 &&
            this.state.questions.map((element, index) => {
              i++;
              
              return (
                <div key={index}>
                  <Submitted indx={i} answer={element.correct_answer} />
                </div>
              );
            })}
        </div>

        <Footer />
        
      </>
    );
  }
}

export default Mainpage;
