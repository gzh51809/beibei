let defaultState = {
    isShowNav: false
}
let reducer = function(state=defaultState,action){
    switch(action.type){
        // 导航栏显示状态
        case 'TOGGLE_NAV':
            return {
                // ...state,
                isShowNav:action.payload
            }

        default:
            return state;
    }
}

export default reducer;