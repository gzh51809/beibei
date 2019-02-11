import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

import { HashRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './font/iconfont.css'

import '../node_modules/antd-mobile/dist/antd-mobile.css'

const store = createStore((state = {
    isShowNav: false,
    goodslist: [],
    isShowGallery: {
        bool: false,
        src: ""
    },

}, action) => {
    switch (action.type) {
        case 'toggleNav':
            return {
                // ...state,
                isShowNav: action.payload
            }
        case 'toggleGallery':
            return {

                ...state,
                isShowGallery: action.payload
            }
        case 'addCart':
            // action{type:'xx',palyload:{id,name,qty,price}}
            return {
                ...state,
                // goodslist: [...state.goodslist,action.payload]
                goodslist: action.payload
            }
        case 'addQty':
            return {
                ...state,
                // goodslist: state.goodslist.map((item)=>{
                //     if(item.iid == action.payload.iid){
                //         item.qty = item.qty-1
                //     }
                //     return item;
                // })
                goodslist: 9
            }
        case 'addQty':
            return {
                ...state,
                // goodslist: state.goodslist.map((item)=>{
                //     if(item.iid == action.payload.iid){
                //         item.qty = item.qty+1
                //     }
                //     return item;
                // })
                goodslist: 0
            }
        case 'delGoods':
            return {
                ...state,
                goodslist: []
            }
        default:
            return state
    }
})



ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
