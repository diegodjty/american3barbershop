import React from 'react';
import MobileHeader from '../components/mobile/MobileHeader';
import WorkExample from '../components/WorkExample';
import Link from 'next/link';

const ourWork = () => {
  return (
    <div>
      <MobileHeader />
      <div className="w-[80%] m-auto flex flex-col items-center">
        <Link href={'/'} passHref>
          <a className="font-bebas text-3xl text-mainYellow underline">
            Go BAck
          </a>
        </Link>
        <div className="md:grid md:grid-cols-2 space-x-1">
          <WorkExample img={'/img/ourWork/2 (1).jpeg'} />
          <WorkExample img={'/img/ourWork/2 (2).jpeg'} />
          <WorkExample img={'/img/ourWork/2 (3).jpeg'} />
          <WorkExample img={'/img/ourWork/2 (4).jpeg'} />
          <WorkExample img={'/img/ourWork/2 (5).jpeg'} />
          <WorkExample img={'/img/ourWork/2 (6).jpeg'} />
          <WorkExample img={'/img/ourWork/2 (7).jpeg'} />
          <WorkExample img={'/img/ourWork/2 (8).jpeg'} />
          <WorkExample img={'/img/ourWork/2 (9).jpeg'} />
          <WorkExample img={'/img/ourWork/2 (10).jpeg'} />
          <WorkExample img={'/img/ourWork/2 (11).jpeg'} />
          <WorkExample img={'/img/ourWork/2 (12).jpeg'} />
        </div>
      </div>
    </div>
  );
};

export default ourWork;
