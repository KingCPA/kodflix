import React, { Component } from 'react';
import './App.css';
import Gallery from './Gallery';
import Details from './Details';
import { BrowserRouter as Router, Route,} from 'react-router-dom';




class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Gallery} />
            <Route path="/details" component={Details} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
