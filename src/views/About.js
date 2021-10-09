import React from 'react';
import MeasureExample from '../components/CheckMeasure';
import VirtualiseList from '../components/VirtualiseList';

const About = () => {
  return (
    <div className="container">
      <h1>About</h1>
      <VirtualiseList />
      <MeasureExample/>
    </div>
  );
}

export default About;
