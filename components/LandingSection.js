import React from 'react';
import Hero from './Hero';

const LandingSection = () => {
  return (
    <div className="bg-black relative">
      <div className="bg-main flex flex-col">
        <Hero />
      </div>
    </div>
  );
};

export default LandingSection;
