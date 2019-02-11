import React from "react";
import '../../style/details.less';
// import axios from 'axios'
import { connect, ReactReduxContext } from 'react-redux';


class Details extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      goods: {},
      qty: 1
    }
  }
  // static contextType = ReactReduxContext;
  // 数量增加==
  addQty() {
    this.setState({
      qty: this.state.qty + 1
    })
  }
  // 数量减少==
  reduceQty() {
    if (this.state.qty <= 1) {
      return false;
    }
    this.setState({
      qty: this.state.qty - 1
    })
  }
  // 首页==
  goHome(){
    this.props.history.push({pathname: '/home'})
  }
  // 购物车页面==
  goCart(){
    this.props.history.push({pathname: '/userCart'});
  }
  // 添加到购物车==
  addCart(goods) {
    console.log(goods)
    goods = {
      id: goods.iid,
      title: goods.desc,
      price: goods.beiji_cms_desc,
      img: goods.img,
      qty: this.state.qty
    }
    this.props.dispatch({
      type: 'addCart',
      payload: goods
    })
    // setTimeout(() => {
    //   console.log(this.props.goodslist, '1111111111111')
    // }, 500)
  }
  componentWillMount() {
    // console.log(this.props)
    this.props.dispatch({
      type: 'toggleNav',
      payload: true
    })

    // setTimeout(() => {
    //   console.log(this.props.isShowNav, '1111111111111')
    // }, 5000)

    var getGoods = JSON.parse(sessionStorage.getItem('goods'));
    // console.log(getGoods);
    this.setState({
      goods: getGoods
    }, (() => {
      console.log(this.state.goods)
    }))

    // axios.get(`/mroute/mroute.html?method=beibei.module.pintuan.recom.list.get&scene_id=app_item_detail_buy_recom&iid=${this.state.goods.iid}&event_id=${this.state.goods.event_id}&uid=0`)
    // .then((res)=>{
    //   console.log(res.data.recom_items);
    // })
    // .catch((err)=>{
    //   console.log(err);
    // })
  }
  componentWillUnmount() {
    this.props.dispatch({
      type: 'toggleNav',
      payload: false
    })
  }
  render() {
    let { title, iid, event_id, img, beiji_cms_prefix, beiji_cms_desc, sub_desc } = this.state.goods;
    return (
      <div className="details">
        <div>
          <img src={img} alt="" />
          <p>{title}</p>
          {
            sub_desc.map((item, index) => {
              return <span key={index} className="text">{item}</span>
            })
          }
          <div><span></span><span className="fontColor">{beiji_cms_prefix}{beiji_cms_desc}</span></div>
        </div>
        <div className="box"></div>
        <div className="buyQty">
          <div className="floatLeft">购买数量</div>
          <div className="floatRight">
            <span onClick={(() => { this.reduceQty() })}>-</span>
            <span>{this.state.qty}</span>
            <span onClick={(() => { this.addQty() })}>+</span>
          </div>
        </div>
        <div className="buy">
          <div className="homeBtn" onClick={(()=>{this.goHome()})}>首页</div><div className="cartBtn" onClick={this.goCart.bind(this)}>购物车</div><div className="addCart" onClick={(()=>{this.addCart(this.state.goods)})}>加入购物车</div><div className="buyNow">立即购买</div>

        </div>

      </div>

    );
  }
}


// 1(全局)dispatch默认映射到this.props,把state映射到this.props，便于全局中使用
let mapStateToProps = (state) => {
  // console.log('mapStateToProps:', state)
  return {
    ...state
    // 把goodslist属性映射到App的props中
    // goodslist:state.cart.goodslist,
    // price:state.goods.price
  }
}


// 2（局部）在当前使用dispatch
// let mapDispatchToProps = (dispatch)=>{
//   // console.log(dispatch,'dis')
//     return {
//         addcart:()=>{
//             dispatch({
//                 type:'toggleNav',
//                 payload:1111
//             })
//             // console.log(111111111,this.props)
//         }
//     }
// }
// Details = connect(mapStateToProps,mapDispatchToProps)(Details);


Details = connect(mapStateToProps)(Details);


export default Details;

