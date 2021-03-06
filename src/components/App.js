import React, { Component } from 'react';
import '../stylesheets/App.css';
import Home from './Home';
import Login from './Login';

import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Navigation />
          <Main />
        </div>
      </Router>
    );
  }
}

const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/">Home</NavLink></li>
      {
        localStorage.getItem("jwt") ?
          <li className="nav-item"><NavLink exact className="nav-link" to="/logout">Log Out</NavLink></li>
        :
          <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/login">Log In</NavLink></li>
      }
    </ul>
  </nav>
);
const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />

  </Switch>
);

export default App;