import React, { Component } from 'react';
import '../../style/classify.less';
import axios from 'axios';
class Classify extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            display: 'none',
            isLoadData: true,
            // isRunning : false,
            type: 'house',
            page: 1,
            goodsList: [],
            selectedIdx: 0,
            homeTab: [
                {
                    title: '童装',
                    selectedColor: 'blueTab',
                    type: 'dress',
                    idx: 1
                }, {
                    title: '母婴',
                    selectedColor: 'greenTab',
                    type: 'babythings',
                    idx: 2
                }, {
                    title: '居家',
                    selectedColor: 'yellowTab',
                    type: 'house',
                    idx: 3
                }, {
                    title: '美食',
                    selectedColor: 'blackTab',
                    type: 'food',
                    idx: 4
                }, {
                    title: '女装',
                    selectedColor: 'pinkTab',
                    type: 'women_dress',
                    idx: 5
                }, {
                    title: '鞋包',
                    selectedColor: 'whiteTab',
                    type: 'shoes_bag',
                    idx: 6
                }, {
                    title: '美妆',
                    selectedColor: 'orangeTab',
                    type: 'beauty',
                    idx: 7
                }, {
                    title: '进口',
                    selectedColor: 'purpleTab',
                    type: 'oversea',
                    idx: 8
                }]

        }
    }
    //点击返回顶部==
    goTop() {
        window.scrollTo(0, 0);
    }
    // 监听函数（返回顶部）==
    toTop() {
        if (window.scrollY >= 390) {
            this.setState({
                display: 'block'
            })
        }
        else {
            this.setState({
                display: 'none'
            })
        }
    }
    // 监听函数（判断scroll无限滚动）==
    watchScroll() {
        var totalHeight = window.innerHeight * 1 + window.pageYOffset * 1;
        var trueHeight = document.body.scrollHeight - 100;
        if (totalHeight >= trueHeight) {
            console.log('触底了', this.state.newList);
            this.getData();
            // if (this.state.page == 5) {
            // return false;
            //   this.state.newList = this.state.newList;
            // }
        }
        // console.log(totalHeight, trueHeight)

    }
    // navbar点击渲染事件==
    getType(type, idx) {
        // 当前页面滚动为0，重新监听滚动事件
        window.scrollTo(0, 0);
        console.log(type, idx, 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        this.setState({
            page: 1,
            goodsList: [],
            type: type,
            // selectedIdx: idx,
        }, () => {
            // console.log(this.state.selectedIdx)
            this.getData();
        })

    }
    // 获取数据==
    getData() {
        // console.log(this.props.match.params.type)
        // =========================================================================
        if (this.props.match.params.type) {
            var currentType = this.props.match.params.type;
            // var currentId = this.props.match.params.idx;
            // console.log(5555555)
            this.setState({
                // goodsList: [],
                // selectedIdx: currentId,
                type: currentType
            }
            // ,()=>{console.log(this.state.type,currentType,'yyyyyyyyyyyyyyyyyy')}

            // , () => {
            //     axios.get(`/martshow/home/channel/7702-${this.state.page}-${this.state.type}-1000.html?client_info=undefined&h5_uid=undefined`)
            //         .then((res) => {
            //             console.log(222)
            //             // console.log(222)
            //             // console.log(res.data.martshows);
            //             var data = res.data.martshows;
            //             var goodsData = [];
            //             for (var i = 0; i < data.length; i++) {
            //                 if (i >= 2) {
            //                     goodsData.push(data[i]);
            //                 }
            //             }
            //             // goodsList
            //             this.setState({
            //                 goodsList: this.state.goodsList.concat(goodsData),
            //                 page: this.state.page + 1,
            //                 isLoadData: true
            //             })
            //             console.log(this.state.page, 'page')
            //             console.log(goodsData);
            //             // console.log(this.state.type, 8888);
            //         })
            //         .catch((err) => {
            //             console.log(err);
            //         })
            //     this.setState({
            //         isLoadData: false
            //     })
            // }
        )
            // console.log(111, currentType)
        }
        if (this.state.page === 8) {
            console.log(111)
            return false;
        }

        // 加载状态
        if (!this.state.isLoadData) {
            return false;
        }

        // console.log(this.state.page,'aaaaaaaaaaaaa')
        // console.log(this)
        // console.log(currentType, this.state.type,111)
        axios.get(`/martshow/home/channel/7702-${this.state.page}-${this.state.type}-1000.html?client_info=undefined&h5_uid=undefined`)
            .then((res) => {
                // console.log(222)
                // console.log(res.data.martshows);
                var data = res.data.martshows;
                var goodsData = [];
                for (var i = 0; i < data.length; i++) {
                    if (i >= 2) {
                        goodsData.push(data[i]);
                    }
                }
                // goodsList
                this.setState({
                    goodsList: this.state.goodsList.concat(goodsData),
                    page: this.state.page + 1,
                    isLoadData: true
                })
                // console.log(this.state.page, 'page')
                // console.log(goodsData);
                // console.log(this.state.type, 8888);
            })
            .catch((err) => {
                console.log(err);
            })
        this.setState({
            isLoadData: false
        })
    }
    // 返回首页==
    goHome() {
        // console.log(this.props)
        this.props.history.push({ pathname: '/home' })
    }

    componentWillMount(){
        var currentId = this.props.match.params.idx;
        this.setState({
            selectedIdx: currentId,
            // type: currentType
        },()=>{
            console.log(currentId)
        })
    }
    
    componentDidMount() {
        // 返回顶部监听scroll==
        window.addEventListener('scroll', this.toTop.bind(this))
        //监听scroll，无限滚动加载==
        window.addEventListener('scroll', this.watchScroll.bind(this))
        // var currentType = this.props.match.params.type;
        // var currentId = this.props.match.params.idx;
        // this.setState({
        //     selectedIdx: currentId,
        //     // type: currentType
        // })
        // console.log(currentType,this.state.type)

        // 初始渲染数据== 
        this.getData();
    }
    render() {
        return (
            <div className="classify" >
                <div className="tabCon">
                    <ul>
                        <li onClick={(() => { this.goHome() })}>今日特卖</li>
                        {
                            this.state.homeTab.map((item, index) => {
                                return (
                                    <li
                                        key={index}
                                        className={this.state.selectedIdx == item.idx ? 'active' : ''}
                                        onClick={() => {
                                            this.setState({
                                                selectedIdx: item.idx,
                                            });
                                            this.getType(item.type, item.idx);
                                            // console.log(item.idx,this.state.selectedIdx)
                                        }}
                                    >
                                        {item.title}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="iconfont icon-sousuo"></div>
                <div className="background"></div>
                <div className="text">今年必买，早晚9点特卖</div>
                <ul className="goodsList">
                    {
                        this.state.goodsList.map((item, index) => {
                            return (
                                <li key={index}>
                                    {
                                        item.type_home_item_double.items.map((i, idx) => {
                                            // console.log(idx);
                                            if (idx === 0) {
                                                // console.log(111)
                                                return (
                                                    <div key={index}>
                                                        <img src={i.img} alt=""/>
                                                        <p>{i.title}</p>
                                                        <span></span>
                                                        <span className="fontColor">{i.beiji_cms_prefix}{i.beiji_cms_desc}</span>
                                                    </div>
                                                )
                                            }
                                        })
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
                <div>
                    <div className="toTop" style={{ display: this.state.display }} onClick={() => { this.goTop() }}>toTop</div>
                </div>
            </div>
        )
    }
}
export default Classify;



