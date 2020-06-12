import React from "react";
import { Link } from "react-router-dom";
import "./BottomNav.css";


class BottomNav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="bottomNav">
        <Link className="on" to="/">
          通讯录
        </Link>
        <Link to="/login">我的{this.props.testData}</Link>
      </div>
    );
  }
}

export default BottomNav;
