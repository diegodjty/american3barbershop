import React from 'react';
import WorkExample from './WorkExample';

const WorkExamples = () => {
  return (
    <div className="md:grid md:grid-cols-2 space-x-1">
      <WorkExample img={'/img/example1.png'} />
      <WorkExample img={'/img/example2.png'} />
      <WorkExample img={'/img/example3.png'} />
      <WorkExample img={'/img/ourWork/1.jpg'} />
    </div>
  );
};

export default WorkExamples;
