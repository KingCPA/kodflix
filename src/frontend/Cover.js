import React from 'react';
import { Link } from 'react-router-dom';

const Cover = (props) => {
  console.log(props.title)
    return (
      <Link className='image-cover-row-item' to={props.id}>
        <img src={props.image} alt='' />
        <div className="overlay">{props.title}</div>
      </Link>

    )
}

export default Cover;
