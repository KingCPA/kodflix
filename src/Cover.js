import React, { Component } from 'react';

class Cover extends React.Component {
  render() {
    return(
          <div className='image-cover-row-item'>
            <img src={this.props.image}  alt='' />
            <div class="overlay">{this.props.title}</div>
          </div>
    );
  }
}

export default Cover;
