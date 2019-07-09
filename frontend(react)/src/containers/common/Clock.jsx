import React, {Component} from 'react'
import ClockDisplay from '../../components/ClockDisplay'
import ClockDigital from '../../components/ClockDigital'

class Clock extends Component{
    constructor(props){
        super(props)
        this.state = {}
        this.launchClock()
    }

    render(){
        return(
            <div>
                <ClockDisplay time={this.state.currentTime}/>
                <ClockDigital time={this.state.currentTime}/>
            </div>
        );
    }

    launchClock(){
        setInterval(()=>{
            this.setState({currentTime : new Date().toLocaleString('en')})
        }, 1000)
    }
}

export default Clock