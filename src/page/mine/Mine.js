import React from "react";
import "../../style/mine.less"
class Mheader extends React.Component{
  constructor(props){
    super(props);
    this.props=props;
  }
  
  render(){
    return (
          <div className="mine">
            <div>
              <input type="text" placeholder="请输入手机号码/邮箱"/>
              <input type="text" placeholder="请输入6-16位密码"/>
              <input type="text" placeholder="请输入4位验证码"/>
            </div>
            <button>立即登录</button>
            <div className="login">
              <span>新人注册</span>
              <span>手机号快速注册</span>
              <span className="forget">忘记密码</span>
            </div>
          </div>
      );
  }
}


export default Mheader