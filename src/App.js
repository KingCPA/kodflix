import React, { Component } from 'react';
import Logo from './oceans13.JPG';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={Logo} className="image-cover" alt="logo" />
          <h1 className="App-title">Welcome to Aarons Kodflix</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
