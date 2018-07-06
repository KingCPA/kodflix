import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import tvShow from './GalleryInfo';
import Cover from './Cover';

class Details extends Component {
  constructor() {
    super()

    this.state = {
      show: {},
      redirect: false
    }
  }

  componentDidMount() {
    var show = tvShow.find(show => {
      return show.id === this.props.match.params.name;
    });
    if(!show) {
     this.setState({redirect: true});
    } else {
      this.setState({ show: show });
    }
  }



  render() {
    let show = this.state.show;
    if(this.state.redirect === true) {
      return <Redirect to='/not-found' />
    }
    if(!show.id) {
      return <div>Loading...</div>
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