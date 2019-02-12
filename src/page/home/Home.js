import React from 'react';
import '../../style/home.less';
import axios from 'axios';
import { Link } from "react-router-dom"

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      // 加载状态
      isLoadData: true,
      display: 'none',
      page: 1,
      saleGoods1: '',
      saleGoods: [],
      newList: [],
      goodsList: [],
      selectedTab: 'redTab',
      homeTab: [{
        title: '今日特卖',
        selectedColor: 'redTab',
        type: ''
      }, {
        title: '童装',
        selectedColor: 'blueTab',
        type: 'dress'
      }, {
        title: '母婴',
        selectedColor: 'greenTab',
        type: 'babythings'
      }, {
        title: '居家',
        selectedColor: 'yellowTab',
        type: 'house'
      }, {
        title: '美食',
        selectedColor: 'blackTab',
        type: 'food'
      }, {
        title: '女装',
        selectedColor: 'pinkTab',
        type: 'women_dress'
      }, {
        title: '鞋包',
        selectedColor: 'whiteTab',
        type: 'shoes_bag'
      }, {
        title: '美妆',
        selectedColor: 'orangeTab',
        type: 'beauty'
      }, {
        title: '进口',
        selectedColor: 'purpleTab',
        type: 'oversea'
      }]
    }
  }
  // 监听滚动触底==
  watchScroll() {
    var totalHeight = window.innerHeight * 1 + window.pageYOffset * 1;
    var trueHeight = document.documentElement.scrollHeight - 100;
    if (totalHeight >= trueHeight) {
      // console.log('触底了', this.state.newList);
      this.getList();
      if (this.state.page === 5) {
        return false;
        // this.state.newList = this.state.newList;
      }
    }
    // console.log(window.innerHeight, '浏览器窗口');
    // console.log(window.pageYOffset, '卷区');
    // console.log(totalHeight, 111111, trueHeight);
    // console.log(document.documentElement.scrollHeight,'全部');
  }
  // toTop返回顶部==
  toTop(){
    if(window.scrollY >= 390){
      this.setState({
          display: 'block'
      })
    }
    else{
        this.setState({
            display: 'none'
        })
    } 
  }
  goDetails(id,a){
    console.log(id,a,this.props)
    this.props.history.push({
      pathname: '/cart/',
      query: {
        id: id
      }
    })
  }
  goTop(){
    window.scrollTo(0,0);
  }
  // 触底获取数据==
  getList() {
    if(!this.state.isLoadData){
      return false;
  }

    axios.get(`/martshow/v1/7702-${this.state.page}-all-0-1-0-12.html?client_info=undefined&h5_uid=undefined`)
      // https://dsapi.beibei.com/martshow/v1/7702-3-all-0-1-0-15.html?client_info=undefined&h5_uid=undefined
      .then((res) => {
        // console.log(res);
        var data = res.data.martshows;
        if (this.state.page <= 5) {
          this.setState({
            newList: this.state.newList.concat(data),
            page: this.state.page + 1
          })
        } 
        // else {
          // this.setState({
          //   goodsList: this.state.goodsList.concat(data),
          //   page: this.state.page + 1
          // })
          // console.log(this.state.page);
          // console.log(res.data.martshows);
        // }

        //加载状态 
        this.setState({
          isLoadData: false
      })

      })
      .catch((err) => {
        console.log(err);
      })
  }
  componentWillMount() {
    window.addEventListener('scroll',this.toTop.bind(this))
    window.addEventListener('scroll', this.watchScroll.bind(this))
    axios.get('/ads/h5.html?ad_id=7_28_246_9_236&app=sbeibei&user_tag=2147483646&id=&client_info=%7B%22platform%22%3A%22ios%22%7D')
      .then((res) => {
        var data = res.data.promotion_pro_shortcuts;
        var imgs = [];
        for (var i = 0; i < data.length; i++) {
          if (i === 0) {
            this.setState({
              saleGoods1: data[i].img
            })
          } else {
            imgs.push(data[i]);
          }
        }
        this.setState({
          saleGoods: imgs
        })
        // console.log(res.data.promotion_pro_shortcuts)
      })
      .catch((err) => {
        console.log(err);
      })

    this.getList();
  }
  render() {
    return (
      <div className="home">
        <div className="saleGoods">
          <div className="floatLeft">
            <img src={this.state.saleGoods1} alt="" />
          </div>
          <div className="floatRight">
            {
              this.state.saleGoods.map((item, index) => {
                return (
                  <img key={index} src={item.img} alt={item.desc} />
                )
              })
            }
          </div>
        </div>
        <div className="tabCon">
          <div>
            {
              this.state.homeTab.map((item, index) => {
                return (
                  <Link
                  // to={{path: '/classify/',state: {id: this.state.page,name: this.state.homeTab.title}}}
                    to={`/classify/${item.title}/${item.type}/${index}`}
                    key={index}
                    className={this.state.selectedTab === item.selectedColor ? 'active' : ''}
                    // selected={this.state.selectedTab === item.selectedColor}
                    onClick={() => {
                      this.setState({
                        selectedTab: item.selectedColor,
                      });
                    }}
                  >
                    {item.title}
                  </Link>
                )
              })
            }
          </div>
        </div>
        <div className="iconfont icon-sousuo"></div>
        <div className="updateNew">每天9点准时上新</div>
        <div className="newList">
          {
            this.state.newList.map((item, index) => {
              return (
                // <li key={index} onClick={(()=>{this.goDetails(item.type_home_item_single.iid)})}>
                //  <Link to={{pathname: '/cart',state:{id: item.type_home_item_single.iid}}}>
                <Link key={index} to={`/details/${item.type_home_item_single.iid}`}>
                  <img src={item.type_home_item_single.img} alt=""/>
                  <div>
                    <p>{item.type_home_item_single.title}</p>
                    <p>{item.type_home_item_single.promotion_desc}</p>
                    <span></span>
                    <span className="fontColor">{item.type_home_item_single.beiji_cms_prefix}￥{item.type_home_item_single.beiji_cms_desc}</span>
                    <span className="buyIntant">{item.type_home_item_single.ext}</span>
                  </div>
                  </Link> 
                // </li>
              )
            })
          }
        </div>
        {/*数据不定时更改xxx 
        <ul className="goodsList">
          {
            this.state.goodsList.map((item, index) => {
              return (
                <li key={index}>
                  <img src={item.type_home_item_single.square_img} alt="" />
                  <p>{item.type_home_item_single.title}</p>
                  <div>
                    <span></span><span className="fontColor">{item.type_home_item_single.beiji_cms_prefix}{item.type_home_item_single.beiji_cms_desc}</span>
                  </div>
                </li>
              )
            })
          }
        </ul> */}

        <div className="toTop" style={{display: this.state.display}} onClick={()=>{this.goTop()}}>toTop</div>
      </div>
    );
  }
}

export default Footer

// return (
//   <li key={index}>
//     <img src={item.type_home_item_single.square_img} alt="" />
//     <p>{item.type_home_item_single.title}</p>
//     <div>
//       <span></span><span className="fontColor">{item.type_home_item_single.beiji_cms_prefix}{item.type_home_item_single.beiji_cms_desc}</span>
//     </div>
//   </li>
// )



// return (
//   <li key={index}>
//     {
//       item.type_home_item_double.items.map((i,idx)=>{
//         return <div>  
//           <img src={i.img} alt="" />
//           <p>{i.title}</p>
//           <div>
//             <span></span><span className="fontColor">{i.beiji_cms_prefix}{i.beiji_cms_desc}</span>
//           </div>  
//         </div>  
//       })        
//     }
//   </li>
// )