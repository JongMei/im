import React from "react";
import { withRouter } from "react-router-dom";
import "./friendList.css";

class friendList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listArr: [
        { imgUrl: "assets/wangye.jpg", name: "我是假数据" },
        { imgUrl: "assets/wangye.jpg", name: "哈哈哈" },
        { imgUrl: "assets/wangye.jpg", name: "测试" },
        {
          imgUrl: "assets/wangye.jpg",
          name: "我的名字真的有这么长吗我的名字真的有这么长吗",
        },
        { imgUrl: "assets/wangye.jpg", name: "！@#！#" },
        { imgUrl: "assets/wangye.jpg", name: "我是假数据" },
        { imgUrl: "assets/wangye.jpg", name: "哈哈哈" },
        { imgUrl: "assets/wangye.jpg", name: "测试" },
      ],
      showSearch: false,
    };
  }

  addFriends = () => {
    this.setState({
      showSearch: true,
    });
  };

  closeSearch = () => {
    this.setState({
      showSearch: false,
    });
  };

  toChatting = (key) => {
    this.props.history.push({pathname: '/chatting', query: {fromId: 0, toId: key}})
  }

  render() {
    return (
      <div>
        <div className="header">
          <span>通讯录</span>
          <div className="header-right">
            <span>
              <img src="assets/icon/search-icon.png" alt="" />
            </span>
            <span onClick={this.addFriends}>
              <img src="assets/icon/add-icon.png" alt="" />
            </span>
          </div>
        </div>
        <div className="list">
          <div className="scroll-box">
            {this.state.listArr.map((item, key) => {
              return (
                <a onClick={this.toChatting.bind(this, key)} className="row" key={key}>
                  <img src={item.imgUrl} alt="" />
                  <span className="name">{item.name}</span>
                </a>
              );
            })}
          </div>
        </div>
        {this.state.showSearch ? (
          <div className="search">
            <div className="mask"></div>
            <div className="input-wrap">
              <input />
              <div className="btn" onClick={this.closeSearch}>
                取消
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default withRouter(friendList);
