import React, { Component } from 'react';
import blackMirror from './covers/blackMirror.jpg';
import breakingBad from './covers/breakingBad.jpg';
import deathNote from './covers/deathNote.jpg';
import gameOfTHrones from './covers/gameofthrones.jpg';
import theWalkingDead from './covers/thewalkingdead.jpg';
import theWire from './covers/thewire.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className='image-cover-row'>
          <div className='image-cover-row-item'>
            <img src={blackMirror}  alt='' />
          </div>
          <div className='image-cover-row-item'>
            <img src={breakingBad}  alt='' />
          </div>
          <div className='image-cover-row-item'>
            <img src={deathNote} alt='' />
          </div>
        </div>

        <div className='image-cover-row'>
          <div className='image-cover-row-item'>
            <img src={gameOfTHrones}  alt='' />
          </div>
          <div className='image-cover-row-item'>
            <img src={theWalkingDead}  alt='' />
            </div>
          <div className='image-cover-row-item'>
            <img src={theWire} alt='' />
          </div>
          </div>
      </div>
    );
  }
}

export default App;
