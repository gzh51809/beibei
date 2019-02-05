
// import React, { Component } from 'react';
// import { TabBar } from 'antd-mobile';
// import {withRouter} from 'react-router-dom';
// import '../style/footer.less';
// class Footer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedTab: 'redTab',
//       hidden: false,
//       fullScreen: false,
//     };
//   }

//   renderContent(pageText) {
//     return (
//       <div></div>
//     );
//   }
//   goMine(a){
//         this.setState({
//             selectedTab: 'yellowTab',
//         });
//         // hashHistory.push('/mine')
//         this.props.history.push({pathname: '/mine'})
//       console.log(a,this.props);
//       console.log(6666);
//   }

//   render() {
//     return (
//       <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 667 }}>
//         <TabBar
//           unselectedTintColor="#949494"
//           tintColor="#33A3F4"
//           barTintColor="white"
//           hidden={this.state.hidden}
//         >
//           <TabBar.Item
//             title="今日特卖"
//             key="Life"
//             icon={<div style={{
//               width: '22px',
//               height: '22px',
//               background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
//             />
//             }
//             selectedIcon={<div style={{
//               width: '22px',
//               height: '22px',
//               background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
//             />
//             }
//             selected={this.state.selectedTab === 'blueTab'}
//             badge={1}
//             onPress={() => {
//               this.setState({
//                 selectedTab: 'blueTab',
//               });
//             }}
//             data-seed="logId"
//           >
//             {this.renderContent('Life')}
//           </TabBar.Item>
//           <TabBar.Item
//             icon={
//               <div style={{
//                 width: '22px',
//                 height: '22px',
//                 background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
//               />
//             }
//             selectedIcon={
//               <div style={{
//                 width: '22px',
//                 height: '22px',
//                 background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
//               />
//             }
//             title="9.9"
//             key="Koubei"
//             badge={'new'}
//             selected={this.state.selectedTab === 'redTab'}
//             onPress={() => {
//               this.setState({
//                 selectedTab: 'redTab',
//               });
//             }}
//             data-seed="logId1"
//           >
//             {this.renderContent('Koubei')}
//           </TabBar.Item>
//           <TabBar.Item
//             icon={
//               <div style={{
//                 width: '22px',
//                 height: '22px',
//                 background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
//               />
//             }
//             selectedIcon={
//               <div style={{
//                 width: '22px',
//                 height: '22px',
//                 background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
//               />
//             }
//             title="赚红包"
//             key="Friend"
//             dot
//             selected={this.state.selectedTab === 'greenTab'}
//             onPress={() => {
//               this.setState({
//                 selectedTab: 'greenTab',
//               });
//             }}
//           >
//             {this.renderContent('Friend')}
//           </TabBar.Item>
//           <TabBar.Item
//             icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
//             selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
//             title="购物车"
//             key="cart"
//             selected={this.state.selectedTab === 'red'}
//             onPress={() => {
//               this.setState({
//                 selectedTab: 'red',
//               });
//             }}
//           >
//             {this.renderContent('cart')}
//           </TabBar.Item>
//            <TabBar.Item
//             // onClick={()=>{this.goMine()}}
//             icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
//             selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
//             title="我的"
//             key="my"
//             selected={this.state.selectedTab === 'yellowTab'}
//             onPress={() => {
//                 this.goMine()
//             //   this.setState({
//             //     selectedTab: 'yellowTab',
//             //   });
//             }}
//           >
//             {this.renderContent('My')}
//           </TabBar.Item>
//         </TabBar>


        
//       </div>
//     );
//   }
// }

// // ReactDOM.render(<TabBarExample />, mountNode);
// Footer = withRouter(Footer);
// export default Footer;

import React from 'react';

import { NavLink} from "react-router-dom";
import  '../style/footer.less';

// import { Link } from "react-router-dom";

class Footer extends React.Component{
  constructor(props){
    super(props);
    this.props=props;
  }
  render(){
    return (
        <footer className="footer">
         <div className="footnav clearfix">
          <ul>
            <li> 
              <NavLink activeClassName="sele" to="/home/">
                {/* <i className="home"> */}
                {/* </i> */}
                <p>今日特卖</p>
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="sele" to="/sale/">
                {/* <i className="categroy"></i> */}
                <p>9.9</p>
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="sele" to="/hongbao/">
                {/* <i className="search"></i> */}
                <p>赚红包</p>
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="sele" to="/cart/">
                {/* <i className="cart"></i> */}
                <p>购物车</p>
              </NavLink>
            </li>
           <li>
              <NavLink activeClassName="sele" to="/mine/">
                {/* <i className="member"></i> */}
                <p>我的</p>
              </NavLink>
            </li>
          </ul>
         </div>
        </footer>
      );
  }
}

export default Footer

  
  
