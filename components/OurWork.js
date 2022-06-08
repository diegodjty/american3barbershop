import React from 'react';
import ContentTitle from './ContentTitle';
import WorkExamples from './WorkExamples';
import Link from 'next/link';

const OurWork = () => {
  return (
    <div className="w-[80%] m-auto flex flex-col items-center" id="ourwork">
      <ContentTitle title={'OUR WORK'} img={'/img/razor.svg'} />
      <WorkExamples />
      <button className="w-[80%] border-2 border-mainYellow text-mainYellow font-bebas text-3xl py-3 text-center mb-12 max-w-md">
        <Link href="/ourWork">
          <a href="">LOAD MORE...</a>
        </Link>
      </button>
    </div>
  );
};

export default OurWork;
