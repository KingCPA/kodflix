import React, { Component } from 'react';
import Cover from './Cover.js';
import blackMirror from './covers/blackMirror.jpg';
import breakingBad from './covers/breakingBad.jpg';
import deathNote from './covers/deathNote.jpg';
import gameOfTHrones from './covers/gameofthrones.jpg';
import theWalkingDead from './covers/thewalkingdead.jpg';
import theWire from './covers/thewire.jpg';

class Gallery extends Component {
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='image-cover-row'>
                        <Cover title="Black Mirror" image={blackMirror} id="Black-Mirror"/>
                        <Cover title="Breaking Bad" image={breakingBad} id="Breaking-Bad" />
                        <Cover title="Death Note" image={deathNote} id="Death-Note"/>
                        <Cover title="Game of Thrones" image={gameOfTHrones} id="Game-of-thrones" />
                        <Cover title="The Walking Dead" image={theWalkingDead} id="The-walking-dead" />
                        <Cover title="The Wire" image={theWire} id="The-wire"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Gallery;