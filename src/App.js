import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
// 引入withRouter获取history进行tab跳转
import { withRouter } from 'react-router-dom';
// antd插件
import { TabBar } from 'antd-mobile';
// less
import './style/app.less'


import Home from './page/home/Home.js';
import Mine from './page/mine/Mine.js';
import Sale from './page/sale/Sale.js';
import Activity from './page/activity/Activity.js';
import Cart from './page/cart/Cart.js';
import Details from './page/details/Details.js'
import Classify from './page/classify/Classify.js';


// import Classify from './pages/classify/classify.jsx';
// import News from './pages/news/news.jsx';
// import User from './pages/user/user.jsx'; 
// import Detail from './pages/Details/details.jsx';
// import GoodsList from './pages/goodslist/goodslist.jsx';
// import Detailsimg from './pages/Details/detailsImg.jsx';
// import Evaluate from './pages/Details/evaluate.jsx';




// axios
import axios from 'axios'
// loading=
import { Toast } from 'antd-mobile';
// ===请求拦截
axios.interceptors.request.use(config => {
  Toast.loading('Loading...', 30, () => {
    console.log('Load complete !!!');
  });
return config
}, error => {
  Toast.hide();
return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(data => {
// 响应成功关闭loading
Toast.hide();
return data
}, error => {
  Toast.hide();
return Promise.reject(error)
})



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: false,
      tabCon: [{
        title: '今日特卖',
        selectedColor: 'redTab',
        path: '/home',
        icon: 'iconfont icon-temai',
      }, {
        title: '9.9',
        selectedColor: 'blueTab',
        path: '/sale',
        icon: 'iconfont icon-temai1'
      }, {
        title: '赚红包',
        selectedColor: 'greenTab',
        path: '/activity',
        icon: 'iconfont icon-hongbao'

      }, {
        title: '购物车',
        selectedColor: 'yellowTab',
        path: '/cart',
        icon: 'iconfont icon-gouwuche'

      }, {
        title: '我的',
        selectedColor: 'blackTab',
        path: '/mine',
        icon: 'iconfont icon-My'

      }]
    };
  }

  // shouldComponentUpdate(prevPorps,nextState){

  // }

  render() {
    return (
      <div className="App">
        {/* <Redirect exact from='/' to='/home/' /> */}
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/sale" component={Sale} />
          <Route path="/activity" component={Activity} />
          <Route path="/cart" component={Cart} />
          <Route path="/mine" component={Mine} />
          <Route path="/details/:id" component={Details} />
          <Route path="/classify/:name/:type/:idx" component={Classify} />




          {/* <Route path="/my/" component={User} /> */}
          {/* <Route path = '/details/:id' component = {Detail} /> */}
          {/* <Route path = '/details/:index/:id' component = {Detail} /> */}
          {/* <Route path="/detailsimg/:id" component={Detailsimg} /> */}
          {/* <Route path="/evaluate/:id" component={Evaluate} /> */}
          {/* <Route path="/goodslist/:id" component={GoodsList} /> */}
          {/* <Redirect to="/home/"/> */}
          <Redirect from="/" to="/home"/>
        </Switch>


        {/* <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 667 }}> */}
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >

          {
            (() => {
              return this.state.tabCon.map((item, index) => {
                return (

                  <TabBar.Item
                    title={item.title}
                    key={index}
                    className={item.icon}
                    icon={<div style={{
                      // width: '22px',
                      // height: '22px',
                      // background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
                    }}
                    />
                    }
                    selectedIcon={<div style={{
                      // width: '22px',
                      // height: '22px',
                      // background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
                    }}
                    />
                    }
                    selected={this.state.selectedTab === item.selectedColor}
                    onPress={() => {
                      this.setState({
                        selectedTab: item.selectedColor,
                      });
                      this.props.history.push({ pathname: item.path })
                    }}
                    data-seed="logId"
                  >
                  </TabBar.Item>

                )
              })
            })()
          }
        </TabBar>
      </div>
    );
  }
}
App = withRouter(App)
export default App;

// // ReactDOM.render(<TabBarExample />, mountNode);

// export default Home;