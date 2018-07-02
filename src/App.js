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

      <div className='container'>
        <div className='image-cover-row'>
          <div className='image-cover-row-item'>
            <img src={blackMirror}  alt='' />
            <div class="overlay">Black Mirror</div>
          </div>
          <div className='image-cover-row-item'>
            <img src={breakingBad}  alt='' />
            <div class="overlay">Breaking Bad</div>
          </div>
          <div className='image-cover-row-item'>
            <img src={deathNote} alt='' />
            <div class="overlay">Death Note</div>
          </div>
        </div>
        </div>
        <div className='container'>
        <div className='image-cover-row'>
          <div className='image-cover-row-item'>
            <img src={gameOfTHrones}  alt='' />
            <div class="overlay">Game Of Thrones</div>
          </div>
          <div className='image-cover-row-item'>
            <img src={theWalkingDead}  alt='' />
            <div class="overlay">The Walking Dead</div>
            </div>
          <div className='image-cover-row-item'>
            <img src={theWire} alt='' />
            <div class="overlay">The Wire</div>
          </div>
          </div>
          </div>
      </div>
    );
  }
}

export default App;
