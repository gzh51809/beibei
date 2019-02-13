import React from "react";
import '../../style/sale.less';
import axios from 'axios';
<<<<<<< HEAD
// import { Link } from "react-router-dom"
=======
import { Link } from "react-router-dom"
>>>>>>> 663d66cbe7d87f35f59b7d300fcaa504f53220b0

class Mheader extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      tabs: [],
      goodsList: [],
      activeIdx: 0,
      type: 'all',
      page: 1,
      isLoadData: true
    }
  }
  // 监听函数（判断scroll无限滚动）==
  watchScroll() {
    var totalHeight = window.innerHeight * 1 + window.pageYOffset * 1;
    var trueHeight = document.body.scrollHeight - 100;
    if (totalHeight >= trueHeight) {
      // console.log('触底了', this.state.newList);
      this.getData();
      // if (this.state.page == 5) {
      // return false;
      //   // this.state.newList = this.state.newList;
      // }
    }
    // console.log(totalHeight, trueHeight)

  }
  // tab点击事件==
  getType(type, index) {
    // 当前页面滚动为0，重新监听滚动事件
    window.scrollTo(0,0);
    this.setState({
      page: 1,
      goodsList: [],
      type: type,
      activeIdx: index
    }, () => {
      this.getData()
    })
    // this.getData()
  }
  // 封装请求数据函数==
  getData() {
    // 加载状态-
    if(!this.state.isLoadData){
      return false;
    }
<<<<<<< HEAD
    if(this.state.page===8){
=======
    if(this.state.page==8){
>>>>>>> 663d66cbe7d87f35f59b7d300fcaa504f53220b0
      return false;
    }
    axios.get(`/martgoods/low_price/discover/${this.state.page}-30-.html?cat=${this.state.type}&h5_uid=null`)
      .then((res) => {
        // console.log(res);
        var list = res.data.lists;
        var tabs = res.data.tabs
        this.setState({
          tabs: tabs,
          goodsList: this.state.goodsList.concat(list),
          page: this.state.page + 1,
          isLoadData: true
        }) 
      })
      .catch((err) => {
        console.log(err);
      })
      this.setState({
        isLoadData: false
      })
  }
  goDetails(goods,id,eventId){
    this.props.history.push({pathname: '/details',query: {goods: goods,id: id,eventId: eventId}})
    sessionStorage.setItem('goods', JSON.stringify(goods));
  }
  componentWillMount() {
    window.addEventListener('scroll', this.watchScroll.bind(this))
    this.getData()
  }

  render() {
    return (
      <div className="sale">
        <div className="tabCon">
          <ul>
            {/* <li></li> */}
            {
              this.state.tabs.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={this.state.activeIdx === index ? 'active' : ''}
                    onClick={() => {
                      // this.setState({
                      //   selectedIdx: item.idx,
                      // });
                      this.getType(item.cat, index);
                    }}
                  >
                    <img src={item.icon_url} alt="" className="icon" />
                    <p>{item.desc}</p>

                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className="goodsList">
          {
            this.state.goodsList.map((item, index) => {
              return (
                // <Link
                  // to={`/details/${item.iid}/${item.event_id}`}
                <li
                  onClick={(()=>{this.goDetails(item,item.iid,item.event_id)})} 
                  key={index}>
                  <img src={item.img} alt="" />
                  <p>{item.title}</p>
                  <span></span><span className="fontColor">{item.beiji_cms_prefix}{item.beiji_cms_desc}</span>
                {/* // </Link> */}
                </li>
              )
            })
          }
        </div>
      </div>

    );
  }
}


export default Mheader