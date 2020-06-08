import React from "react";
import { Link } from "react-router-dom";
import "./friendList.css";
import BottomNav from "../../components/BottomNav/BottomNav"

class friendList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listArr: [
        { imgUrl: "assets/wangye.jpg", name: "我是假数据" },
        { imgUrl: "assets/wangye.jpg", name: "哈哈哈" },
        { imgUrl: "assets/wangye.jpg", name: "测试" },
        { imgUrl: "assets/wangye.jpg", name: "我的名字真的有这么长吗我的名字真的有这么长吗" },
        { imgUrl: "assets/wangye.jpg", name: "！@#！#" },
        { imgUrl: "assets/wangye.jpg", name: "我是假数据" },
        { imgUrl: "assets/wangye.jpg", name: "哈哈哈" },
        { imgUrl: "assets/wangye.jpg", name: "测试" },
        { imgUrl: "assets/wangye.jpg", name: "我的名字真的有这么长吗我的名字真的有这么长吗" },
        { imgUrl: "assets/wangye.jpg", name: "！@#！#" },
        { imgUrl: "assets/wangye.jpg", name: "我是假数据" },
        { imgUrl: "assets/wangye.jpg", name: "哈哈哈" },
        { imgUrl: "assets/wangye.jpg", name: "测试" },
        { imgUrl: "assets/wangye.jpg", name: "我的名字真的有这么长吗我的名字真的有这么长吗" },
        { imgUrl: "assets/wangye.jpg", name: "！@#！#" },
      ],
    };
  }

  render() {
    return (
      <div>
        <div className="header">
          <span>通讯录</span>
          <div className="header-right">
            <a href="#!"><img src="assets/icon/search-icon.png" /></a>
            <a href="#!"><img src="assets/icon/add-icon.png" /></a>
          </div>
        </div>
        <div className="list">
          <div className="scroll-box">
            {this.state.listArr.map((item, key) => {
              return (
                <Link to="/" className="row" key={key}>
                  <img src={item.imgUrl} alt="" />
                  <span className="name">{item.name}</span>
                </Link>
              )
            })}
          </div>
        </div>
        <BottomNav/>
      </div>
    );
  }
}

export default friendList;
