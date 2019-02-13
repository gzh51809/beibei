import React from "react";
import "../../style/userCart.less";
import { connect } from 'react-redux';
import cartAction from '../../actions/cartAction';
class UserCart extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.props = props;
    //     this.state = {
    //         goodslist: [],
    //         // a: false
    //     }
    // }

    // 数量加1==
    // addQty(currentId) {
    //       this.props.dispatch(cartAction.addQty(id))
    //     console.log('add', currentId)
    // }

    // 删除商品==
    // delGoods(id) {
    //     this.props.dispatch(cartAction.remove(id))
    //     // this.props.dispatch({
    //     //     type: 'delGoods'
    //     // })
    // }

    // 数量减1==
    // reduceQty(currentId) {
    //     this.props.dispatch({
    //         type: 'reduceQty',
    //         payload: currentId
    //         //emmmm  payload: {id: 111,title: 'hhhh'}
    //     })
    //     console.log('reduceQty', currentId)
    // }
    // componentWillMount() {
    //     this.setState({
    //         goodslist: this.props.cart.goodslist
    //     })
    //     console.log(this.props, 999999)
    // }
    render() {
        // console.log(this.props);
        let { remove, addQty, reduceQty, goodslist, clear, delGoods } = this.props;
        console.log(goodslist, 999999999999999999)
        return (
            <div className="userCart">
                <div>
                    {

                        goodslist.length ?
                            (
                                <div>
                                    <ul>
                                        {
                                            goodslist.map((item, index) => {
                                                return (
                                                    <li key={index}>
                                                        <img src={item.imgurl} alt="" />
                                                        <div>
                                                            <p>{item.title}</p>
                                                            <span className="price">价格:{item.price}</span>
                                                            <div className="qty">
                                                                <span onClick={(() => { addQty(item.id) })}>+</span>
                                                                <span>{item.qty}</span>
                                                                <span onClick={(() => { reduceQty(item.id) })}>-</span>
                                                            </div>
                                                        </div>
                                                        <div className="delGoods" onClick={(() => { delGoods(item.id) })}>x</div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                    <div className="clear">
                                        <span onClick={(()=>{clear()})}>清空购物车</span>
                                    </div>
                                </div>
                            ): <div className="text">您还没有添加商品噢！</div>
                            
                    }
                    {/* <div className="clear">
                        <span>清空购物车</span>
                    </div> */}
                </div>
            </div>
        );
    }
}
let mapStateToProps = (state) => {
    // console.log('mapStateToProps:', state)
    return {
        ...state,
        goodslist: state.cart.goodslist
        // 把goodslist属性映射到App的props中
        // goodslist:state.cart.goodslist,
        // price:state.goods.price
    }
}

// 把this.state的方法映射到this.props中
const mapDispatchToProps = dispatch => {
    return {
        delGoods(id) {
            dispatch(cartAction.remove(id))
        },
        addQty(id) {
            dispatch(cartAction.addQty(id))
        },
        reduceQty(id) {
            dispatch(cartAction.reduceQty(id))
        },
        clear() {
            dispatch(cartAction.clear())
        },

    }
}
UserCart = connect(mapStateToProps, mapDispatchToProps)(UserCart)
export default UserCart