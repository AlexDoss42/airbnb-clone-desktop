import { Card } from '@material-ui/core';
import React from 'react';
import Banner from '../components/Banner';
import './Home.css';

function Home() {
  return (
    <div className='home'>
        <Banner />
        <div className='home__section'>
            <Card />
            <Card />
            <Card />
        </div>
        <div className='home__section'>
            <Card />
            <Card />
            <Card />
        </div>
    </div>
  )
}

export default Home;
