import React from "react";
import '../../style/activity.less';


class Mheader extends React.Component{
  constructor(props){
    super(props);
    this.props=props;
  }
  
  render(){
    return (
          <div className="activity">
            <div>
                <div className="box">
                <div>赚钱攻略></div>
                </div>
                <div className="text">
                  <div>你还没有登录，请先登录哦~</div>
                  <button>立即登录</button>
                </div>
            </div>
          
          </div>
        
      );
  }
}


export default Mheader