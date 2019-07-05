import React, {Component} from 'react';
import '../assets/css/App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Hello from '../components/Hello.jsx';
import MyNavbar from '../components/MyNavbar.jsx';

class App extends Component{
  constructor(props){
    super()
  }
  render(){
    return (
      <div className='wrapper'>
        <MyNavbar/>
      </div>
    )
  }
}

export default App;
