import React, { Component } from 'react';
import '../../style/details.less';
import { Drawer, List, NavBar, Icon } from 'antd-mobile';
import {connect} from 'react-redux';


class Details extends React.Component {
  state = {
    open: false,
  }
    // handleRemove(id){
    //     this.props.dispatch({
    //         type:'REMOVE_FROM_CART',
    //         payload:{id}
    //     })
    // }

  onOpenChange = (...args) => {
      console.log(11111111)
    console.log(args);
    this.setState({ open: !this.state.open });
  }
  render() {
    // fix in codepen
    const sidebar = (<List>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,].map((i, index) => {
        if (index === 0) {
          return (<List.Item key={index}
            thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
            multipleLine
          >Category</List.Item>);
        }
        return (<List.Item key={index}
          thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
        >Category{index}</List.Item>);
      })}
    </List>);

    return (<div>
      <NavBar icon={<Icon type="ellipsis" />} onLeftClick={this.onOpenChange}>Basic</NavBar>
      <Drawer
        // className="my-drawer"
        style={{ minHeight: document.documentElement.clientHeight }}
        // enableDragHandle
        contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
        sidebar={sidebar}
        open={this.state.open}
        
        onOpenChange={this.onOpenChange}
        position='right'
      >
        Click upper-left corner
      </Drawer>
    </div>);
  }
}


// export default connect((state)=>{
// 	return state						
// 	return {						
// 		handleRemove(src){
// 			console.log(src)
// 			dispatch({
// 				type:"toggleGallery",
// 				isShowGallery:{
// 					bool: !this.props.isShowGallery.bool,
//         			src
// 				}
// 			})
// 		}
// 	}
// })(Details)

// const mapStateToProps = state=>{
//     return {
//         goodslist:state.cart.goodslist
//     }
// }
// const mapDispatchToProps = dispatch=>{
//     return {
//         remove(id){
//             dispatch({
//                 type:"toggleGallery",
//                 isShowGallery:{
//                     bool: !this.props.isShowGallery.bool,
//                     src
//                 }
//             })
//         },
//         // changeQty(id,qty){
//         //     dispatch(cartAction.changeQty(id,qty))
//         // },
//         // clear(){
//         //     dispatch(cartAction.clear())
//         // }
//     }
// }

let mapStateToProps = (state)=>{
    console.log('mapStateToProps:',state)
    return {
        // 把goodslist属性映射到App的props中
        // goodslist:state.cart.goodslist,
        // price:state.goods.price
    }
}

let mapDispatchToProps = (dispatch)=>{
    return {
        addcart:(goods)=>{
            dispatch({
                type:'ADD_TO_CART',
                payload:goods
            })
        }
    }
}
Details = connect(mapStateToProps,mapDispatchToProps)(Details);

export default Details;