import React, { Component } from 'react';
import Cover from './Cover.js';


class Gallery extends Component {
    constructor() {
        super();
        this.state = {
            TvShow: []
        }
    }

    componentDidMount() {
        fetch('/rest/shows')
            .then(response => response.json())
            .then(shows => this.setState({ TvShow: shows }))
    }


    render() {
        let shows = this.state.TvShow
        if (!shows) {
            return <div>Loading...</div>
        }
        return (
            <div className='container'>
                {
                    shows.map(show => <Cover key={show.id} id={show.id} image={show.image} title={show.title} />
                    )}
            </div>
        );
    }
}

export default Gallery;