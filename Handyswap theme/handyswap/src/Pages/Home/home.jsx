import React from 'react';
import Hero from './components/hero'; 
import Features from './components/features'; 
import Refurbished from './components/refurbished';
import Mission from './components/mission'; 
import './home.css';

const Home = () => {
  return (
    <div className="home-page-wrapper">
      <Hero />
      <Features />
      <Refurbished />
      <Mission />
    </div>
  );
};

export default Home;