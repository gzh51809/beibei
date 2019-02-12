export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const UPDATA_QTY = 'UPDATA_QTY';
export const ADD_QTY = 'ADD_QTY';
export const REDUCE_QTY = 'REDUCE_QTY';


// export function showNav(bloo){
//     return {
//         type:TOGGLE_NAV,
//         payload:bloo 
//     }
// }

export function add(goods){
    return {
        type:ADD_TO_CART,
        payload:goods 
    }
}

export function remove(id){
    return {
        type:REMOVE_FROM_CART,
        payload:{id}
    }
}

export function clear(){
    return {
        type:CLEAR_CART
    }
}

export const changeQty = (id,qty)=>({
    type:UPDATA_QTY,
    payload:{id,qty}
});

export function addQty(id){
    return {
        type:ADD_QTY,
        payload:id 
    }
}

export function reduceQty(id){
    return {
        type:REDUCE_QTY,
        payload:id 
    }
}
export default {
    reduceQty,
    addQty,
    add,
    remove,
    clear,
    changeQty
}