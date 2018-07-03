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
                        <Cover title="Black Mirror" image={blackMirror} />
                        <Cover title="Breaking Bad" image={breakingBad} />
                        <Cover title="Death Note" image={deathNote} />
                    </div>
                </div>
                <div className='container'>
                    <div className='image-cover-row'>
                        <Cover title="Game of Thrones" image={gameOfTHrones} />
                        <Cover title="The Walking Dead" image={theWalkingDead} />
                        <Cover title="The Wire" image={theWire} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Gallery;