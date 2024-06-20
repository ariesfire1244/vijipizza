import React from 'react';
import {Link} from 'react-router-dom';
import BannerImage from '../assets/pizza.jpeg';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home'
    style={{backgroundImage : `url(${BannerImage})`}}>
      <div className='headerContainer'>
        <h1>Viji's pizza house</h1>
        <p>Pizza that fits any taste</p>
        <Link to='/menu'>
        <button>Order now!</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
