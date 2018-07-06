import React from 'react';
import { Link } from 'react-router-dom';

class Cover extends React.Component {
  render() {
    return (

      <Link className='image-cover-row-item' to={this.props.id}>
        <img src={this.props.image} alt='' />
        <div className="overlay">{this.props.title}</div>
      </Link>

    );
  }
}

export default Cover;
