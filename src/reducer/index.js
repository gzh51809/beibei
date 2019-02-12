import { combineReducers } from "redux";

// 引入reducer
import cartReducer from './cart-reducer';
import goodsReducer from './goods-reducer';
import navReducer from './showNav-reducer';

// 把多个reducer组合成一个reducer

const rootReducer = combineReducers({
    cart: cartReducer,
    goods: goodsReducer,
    showNav: navReducer
});

export default rootReducer;