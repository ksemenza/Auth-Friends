import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import friend from './utils/friends.jpg'
import {  Switch, Route, Link } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute'
import FriendList from './components/FriendList'


function App() {
  return (
    <div className="App">
      <header className="App-header">
    <h1>Friends Forever</h1>

    <nav>
      <Link className='login-link' to='/login'>Login</Link>
      <Link className='friend-link' to='/friends'>Friends</Link>
    </nav>
        </header>
        <Switch>
          <PrivateRoute path='/friends' component={FriendList}/>
          <Route path='/login' component={Login}/>
          <Route component={Login}/>
        </Switch>


    </div>
  );
}

export default App;
