import React from "react";
import "./friendList.css";

class friendList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listArr: [
        { imgUrl: "assets/wangye.jpg", name: "我是假数据" },
        { imgUrl: "assets/wangye.jpg", name: "哈哈哈" },
        { imgUrl: "assets/wangye.jpg", name: "测试" },
        { imgUrl: "assets/wangye.jpg", name: "我的名字真的有这么长吗" },
        { imgUrl: "assets/wangye.jpg", name: "！@#！#" },
        { imgUrl: "assets/wangye.jpg", name: "我是假数据" },
        { imgUrl: "assets/wangye.jpg", name: "哈哈哈" },
        { imgUrl: "assets/wangye.jpg", name: "测试" },
        { imgUrl: "assets/wangye.jpg", name: "我的名字真的有这么长吗" },
        { imgUrl: "assets/wangye.jpg", name: "！@#！#" },
        { imgUrl: "assets/wangye.jpg", name: "我是假数据" },
        { imgUrl: "assets/wangye.jpg", name: "哈哈哈" },
        { imgUrl: "assets/wangye.jpg", name: "测试" },
        { imgUrl: "assets/wangye.jpg", name: "我的名字真的有这么长吗" },
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
            <span>搜索</span>
            <span>添加</span>
          </div>
        </div>
        <div className="list">
          <div className="scroll-box">
            {this.state.listArr.map((item, key) => {
              return (
                <div className="row" key={key}>
                  <img src={item.imgUrl} alt="" />
                  <span className="name">{item.name}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default friendList;
