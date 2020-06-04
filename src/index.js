import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.roundFun();
  }

  render() {
    return (
      <div id="menu">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
        </ul>
      </div>
    );
  }

  roundFun = (nums = 8) => {
    let radius = 1;
    let avd = 360 / nums;
    let ahd = (avd * Math.PI) / 180;
    for (let index = 0; index < nums; index++) {
      const left = Math.sin(ahd * index) * radius;
      const top = Math.cos(ahd * index) * radius;
      console.log(left, "----", top);
    }
  };
}

ReactDOM.render(<App />, document.getElementById("root"));
