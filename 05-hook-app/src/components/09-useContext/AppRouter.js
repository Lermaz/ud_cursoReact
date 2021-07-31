import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { NavBar } from './NavBar';
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <div className="container">
          <Switch>
            <Route path="/about" component={ AboutScreen } />
            <Route path="/login" component={ LoginScreen } />
            <Route path="/" component={ HomeScreen } />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </Router>
  )
}
