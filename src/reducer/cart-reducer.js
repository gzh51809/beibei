/*
    购物车Reducer
        * 指定修改规则
*/

import {
    CLEAR_CART,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    UPDATA_QTY,
    ADD_QTY,
    REDUCE_QTY
} from '../actions/cartAction' 

// state默认值
let defaultState = {
    isShowNav: false, 
    goodslist:[],
    step:0
}

let reducer = function(state=defaultState,action){
    let {type,payload} = action;
    switch(type){
        // 删除购物车商品
        case REMOVE_FROM_CART:
            // action{type:'xx',palyload:{id}}
            return {...state,goodslist:state.goodslist.filter(item=>item.id!=payload.id)}
        
        //添加商品到购物车
        case ADD_TO_CART:
            // action{type:'xx',palyload:{id,name,qty,price}}
            return {
                ...state,
                goodslist:[...state.goodslist,payload]
            }

        //更新商品数量
        case UPDATA_QTY:
            // action{type:'xxx',payload:{id,qty}}
            return {
                ...state,
                goodslist:state.goodslist.map(item=>{
                    if(item.id == payload.id){
                        item.qty = payload.qty
                    }
                    return item;
                })
            }
        //清空购物车
        case CLEAR_CART:
            // action{type:'xxx'}
            return {
                ...state,
                goodslist:[]
            } 
        //增加数量
        case ADD_QTY:
        // action{type:'xx',palyload:{id}}
        // return {...state,goodslist:state.goodslist.map(item=>item.id==payload)} 
        return {...state,goodslist:state.goodslist.map((item)=>{
            if(item.id==payload){
                item.qty = item.qty+1
            }
            return item;
        })} 

          //增加数量
          case REDUCE_QTY:
          // action{type:'xx',palyload:{id}}
          // return {...state,goodslist:state.goodslist.map(item=>item.id==payload)} 
          return {...state,goodslist:state.goodslist.map((item)=>{
              if(item.id==payload){
                if(item.qty<=1){
                    item.qty = item.qty;
                }else{
                    item.qty = item.qty-1
                }
                  
              }
              return item;
          })} 

        default:
            return state;
    }
}

export default reducer;
