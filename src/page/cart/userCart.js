import React from "react";
import "../../style/userCart.less";
import { connect } from 'react-redux';
class UserCart extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            goodslist: this.props.goodslist,
            a: false
        }
    }
    // 数量加1==
    addQty(currentId) {
        this.props.dispatch({
            type: 'addQty',
            payload: currentId
        })
        console.log('add', currentId)
    }
    // 删除商品==
    delGoods() {
        this.props.dispatch({
            type: 'delGoods'
        })
        console.log(this.props)
    }
    // 数量减1==
    reduceQty(currentId) {
        this.props.dispatch({
            type: 'reduceQty',
            payload: currentId
            //emmmm  payload: {id: 111,title: 'hhhh'}
        })
        console.log('reduceQty',currentId)
    }
    //   componentWillMount(){
    //       this.setState({
    //           goodslist: this.props.goodslist
    //       })
    //       console.log(this.props.goodslist,999999)
    //   }
    render() {
        return (
            <div className="userCart">
                <div>
                    {

                        this.state.goodslist ?
                            <ul>
                                <li>
                                    <img src={this.state.goodslist.img} alt="" />
                                    <div>
                                        <p>{this.state.goodslist.title}</p>
                                        <span className="price">价格:{this.state.goodslist.price}</span>
                                        <div className="qty">
                                            <span onClick={this.addQty.bind(this, this.state.goodslist.id)}>+</span>
                                            <span>{this.state.goodslist.qty}</span>
                                            <span onClick={this.reduceQty.bind(this,this.state.goodslist.id)}>-</span>
                                        </div>
                                    </div>
                                    <div className="delGoods" onClick={(() => { this.delGoods() })}>x</div>
                                </li>
                            </ul>
                        : <div>您还没有添加商品噢！</div>
                    }
                </div>
            </div>
        );
    }
}
let mapStateToProps = (state) => {
    //   console.log('mapStateToProps:', state)
    return {
        ...state,
        goodslist: state.goodslist
        // 把goodslist属性映射到App的props中
        // goodslist:state.cart.goodslist,
        // price:state.goods.price
    }
}

UserCart = connect(mapStateToProps)(UserCart)
export default UserCart