import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello, this will be the details page for each Movie & TV show :)",
    }
  }

  componentDidMount(){
    setTimeout(() => this.setState({message:'Coming soon! :)'}) , 3000);
  }

  render() {
    return (
      <div className='Details'>
      <h2>{this.state.message}</h2>
        <Link to="/"><button>Home</button></Link>
      </div>
    );
  }
}

export default Details;