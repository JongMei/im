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
        <Link className="on" to="/list">
          通讯录
        </Link>
        <Link to="/login">我的</Link>
      </div>
    );
  }
}

export default BottomNav;
