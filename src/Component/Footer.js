import React, { Component } from "react";
import "../styles/footer.css"
export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className="bg-dark text-center text-white mt-4 footerCss">
          <div className="text-center p-3">© 2022 Copyright : Gautam</div>
        </footer>
      </>
    );
  }
}
