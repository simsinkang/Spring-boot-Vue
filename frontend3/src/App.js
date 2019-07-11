import React, {Component} from 'react';
import {Switch, Route, Link, Redirect} from 'react-router-dom'
import User from './containers/User'
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <ul>
          <li><Link to='/user/apple'>APPLE</Link></li>
          <li><Link to='/user/google'>GOOGLE</Link></li>
          <li><Link to='/user/microsoft'>MICROSOFT</Link></li>
        </ul>
        <Switch>
    <Route exact path='/' render={()=>(<Redirect to="/user/apple"/>)}/>
          <Route path='/user/:id' render={({match})=>(<User user={match.params.id}/>)}/>
        </Switch>
      </div>
    );
  }
}

export default App;
