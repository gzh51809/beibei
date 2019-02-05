import React, { Component } from 'react';
class ToTop extends Component{
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            display: 'none'
        }
    }    
    watchScroll(){
        if(window.scrollY >= 390){
            this.setState({
                display: 'block'
            })
        }
        else{
            this.setState({
                display: 'none'
            })
        } 
    }
    componentWillMount(){
        window.addEventListener('scroll',this.watchScroll)
    }
    render(){
        return (
            <div className="toTop" style={{display: this.state.display}}>
                <div>toTop</div>
            </div>
        )
    }
}
export default ToTop;