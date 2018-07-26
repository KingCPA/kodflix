import React, { Component } from 'react';
import './App.css';
import Gallery from './Gallery';
import Details from './Details';
import BadUrl from './NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';


class App extends Component {
  constructor({ history, location }) {
    super();
    ReactGA.initialize('UA-122882132-1')
    this.trackViewPage(location)
    history.listen((location) => this.trackViewPage(location))
  }

  trackViewPage(location) {
    var host = window.location.hostname;
    if(host !== "localhost") {
    ReactGA.pageview(location.pathname + location.search + location.hash);
    }
  };

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
        <div>
          <ReactGA pageviews="" pathname="" search="" hash="" />
        </div>
      </div>
    );
  }
} 

export default App;
