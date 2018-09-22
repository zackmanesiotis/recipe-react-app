import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import "./App.css";
import Dashboard from './components/Dashboard/Dashboard';
import ThankYou from './components/ThankYou/ThankYou';
import {Redirect} from "react-router";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route name="dashboard" exact path="/dashboard" component={Dashboard} />
            <Route name="thankyou" exact path="/thank-you" component={ThankYou} />
            <Route render={() => <Redirect to={'/dashboard'} />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
