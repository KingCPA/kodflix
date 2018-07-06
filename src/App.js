import React, { Component } from 'react';
import './App.css';
import Gallery from './Gallery';
import Details from './Details';
import BadUrl from './NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';




class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route exact={true} path="/" component={Gallery} />
              <Route path="/not-found" component={BadUrl} />
              <Route path="/:name" component={Details} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
