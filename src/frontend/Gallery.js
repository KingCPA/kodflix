import React, { Component } from 'react';
import Cover from './Cover.js';
import tvShow from './GalleryInfo';

class Gallery extends Component {
    render() {
        return (
            <div className='container'>
                {
                    tvShow.map(show => <Cover key={show.id} id={show.id} image={show.image} title={show.title} />
                    )}
            </div>
        );
    }
}

export default Gallery;