import React from 'react';
import Link from 'next/link';

const Navigation = ({ setIsOpen }) => {
  return (
    <div className="absolute bg-black h-[100%] w-[100%] z-60">
      <nav className=" text-white font-bebas text-3xl w-[50%] m-auto text-center mt-14 flex flex-col space-y-12">
        <Link href={'#ourwork'} passHref>
          <a
            className={'border-b-2 border-mainYellow pb-6 '}
            onClick={() => setIsOpen(false)}
          >
            OUR WORK
          </a>
        </Link>
        <Link href={'#ourteam'} passHref>
          <a
            className={'border-b-2 border-mainYellow pb-6'}
            onClick={() => setIsOpen(false)}
          >
            OUR TEAM
          </a>
        </Link>
        <Link href={'#pricetable'} passHref>
          <a
            className={'border-b-2 border-mainYellow pb-6 '}
            onClick={() => setIsOpen(false)}
          >
            PRICE TABLE
          </a>
        </Link>
        <Link href={'#contact'} passHref>
          <a onClick={() => setIsOpen(false)}>CONTACT US</a>
        </Link>
      </nav>
    </div>
  );
};

export default Navigation;
