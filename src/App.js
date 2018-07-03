import React, { Component } from 'react';
import blackMirror from './covers/blackMirror.jpg';
import breakingBad from './covers/breakingBad.jpg';
import deathNote from './covers/deathNote.jpg';
import gameOfTHrones from './covers/gameofthrones.jpg';
import theWalkingDead from './covers/thewalkingdead.jpg';
import theWire from './covers/thewire.jpg';
import './App.css';
import Cover from './Cover.js';

class App extends Component {
  render() {
    return (
      <div className="App">

      <div className='container'>
        <div className='image-cover-row'>
          <Cover title="Black Mirror" image={blackMirror} />
          <Cover title="Breaking Bad" image={breakingBad}/>
          <Cover title="Death Note" image={deathNote}/>
        </div>
        </div>
        <div className='container'>
        <div className='image-cover-row'>
        <Cover title="Game of Thrones" image={gameOfTHrones} />
        <Cover title="The Walking Dead" image={theWalkingDead}/>
        <Cover title="The Wire" image={theWire}/>
      </div>
      </div>
      </div>
    );
  }
}

export default App;
