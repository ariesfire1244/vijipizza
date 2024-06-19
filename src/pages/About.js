import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg';
import '../styles/About.css';

function About() {
  return (
    <div className='about'>
      <div className='aboutTop'
      style={{backgroundImage : `url(${ MultiplePizzas})`}} >
      </div>
      <div className='aboutBottom'>
        <h1>About Us</h1>
        <p>
        Welcome to Viji's Pizza Shop, where every slice tells a story of passion and flavor. Established with love in 2005, Viji's is a family-owned pizzeria dedicated to bringing you the best of Italian cuisine. Our secret lies in fresh, locally-sourced ingredients and recipes handed down through generations. From crispy thin crusts to hearty deep-dish delights, each pizza is crafted with care and served with a smile. Join us for a taste of tradition and a slice of community. Experience why Viji's Pizza Shop is where quality meets satisfaction, one delicious pie at a time.
        </p>
      </div>
      
    </div>
  )
}

export default About
