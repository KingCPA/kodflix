import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Details extends Component {
    render() {
        return(
              <div className='Details'>
                <p>Hello, this will be the details page for each Movie & TV show :)</p>
                <Link to="/"><button>Home</button></Link>
              </div>              
        );
      }
    }

export default Details;