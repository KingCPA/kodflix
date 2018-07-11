import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
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

    fetch('/rest/shows')
      .then(response => response.json())
      .then(shows => {
        console.log(shows);
    
        const name = this.props.match.params.name;
        const show = shows.find((show) => show.id === name);

        if (!show) {
          this.setState({ redirect: true });
        } else {
          this.setState({ show: show });
        }
      });
  }



  render() {
    let show = this.state.show;
    if (this.state.redirect === true) {
      return <Redirect to='/not-found' />
    }
    if (!show.id) {
      return <div>Loading...</div>
    }

    return (
      <div className='Details'>
        <h2>{show.title}</h2>
        <div className='change'>
          <p className='synopsis'>{show.synopsis}</p>
          <Cover key={show.id} id={show.id} image={show.image} title={show.title} />
        </div>
        <Link to="/"><button>Home</button></Link>
      </div>
    );
  }
}

export default Details;