import React from "react";
import '../../style/cart.less';


class Mheader extends React.Component{
  constructor(props){
    super(props);
    this.props=props;
  }
  componentWillMount(){
    console.log(this.props)
  }
  render(){
    return (
          <div className="cart">
            {/* <img src="../../images/timg.jpg" alt=""/> */}
            <div className="iconfont icon-gouwuche"></div>
            <p>您还没有登录，请先登录哦</p>
            <button>登录贝贝</button>
            <div>大家还买了</div>
          </div>
        
      );
  }
}


export default Mheader