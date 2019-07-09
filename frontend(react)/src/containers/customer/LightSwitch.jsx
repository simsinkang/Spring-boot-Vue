import React, {Component} from 'react'

class LightSwitch extends Component{
    constructor(){
        super()
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            power : false
        }
    }
    handleClick() {
        this.setState({
            power : !this.state.power
        })
    }

    render(){
        return(
            <div>
                SWITCH {this.state.power? 'ON' : 'OFF'}<br/>
                <button onClick={this.handleClick}>Button</button>
            </div>
        );
    }
}

export default LightSwitch;