import React from 'react';
import { Link } from 'react-router-dom';

const Cover = (props) => {

  return (
    <Link className='image-cover-row-item' to={props.id}>
      <img src={require(`./common/images/${props.id}.jpg`)} alt='props.title' />
      <div className="overlay">{props.title}</div>
    </Link>

  )
}

export default Cover;
