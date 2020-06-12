import React from "react";
import {Link} from 'react-router-dom';
import io from "socket.io-client";
import "./talk.css";

const Socket = io("http://localhost:3001");
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number, index) => (
    <li key={index}>{number}</li>
  ));
  return <ul>{listItems}</ul>;
}

class Talk extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      context: [],
    };
    this.ioFun();
  }

  ioCommit = () => {
    Socket.emit("sendMsg", this.state.inputValue);
  };

  ioFun() {
    Socket.on("receiveMsg", (msg) => {
      console.log(msg);
      this.setState({
        inputValue: "",
        context: [...this.state.context, msg],
      });
      console.log(this.state.context);
    });
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <div className="box">
        <NumberList id="messages" numbers={this.state.context} />
        <div className="form">
          <input
            autoComplete="off"
            id="m"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
          <button onClick={this.ioCommit}>Send</button>
        </div>
      </div>
    );
  }
}

export default Talk;
