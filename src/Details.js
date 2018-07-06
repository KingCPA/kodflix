import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import tvShow from './GalleryInfo';
import Cover from './Cover';

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: {},
    }
  }

  componentDidMount() {
    var show = tvShow.find(show => {
      return show.id === this.props.match.params.name;
    });
    this.setState({ show: show });
  }


  render() {
    let show = this.state.show;
    if(!show.id) {
      return <div>Loading...</div>;
    }
    return (
      <div className='Details'>
        <h2>{show.title}</h2>
        <Cover key={show.id} id={show.id} image={show.image} title={show.title} />
        <Link to="/"><button>Home</button></Link>
      </div>
    );
  }
}

export default Details;