import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from './Navigation';

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" bg-black  sticky top-0 z-40 ">
      <div className="flex justify-around items-center max-w-7xl  m-auto ">
        {!isOpen ? (
          <div className="cursor-pointer" onClick={() => setIsOpen(true)}>
            <Image
              src={'/img/BurgerMenu.svg'}
              alt="menu"
              height={40}
              width={40}
            />
          </div>
        ) : (
          <div
            className="h-[40px] w-[40px] cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src={'/img/closeMenu.svg'}
              alt="menu"
              height={40}
              width={40}
            />
          </div>
        )}
        {isOpen}
        <Link href="/" passHref>
          <Image
            src={'/img/logo.png'}
            className="cursor-pointer"
            alt="logo"
            height={125}
            width={125}
          />
        </Link>
        <a href="tel:6312132088">
          <Image
            src={'/img/yellowPhone.svg'}
            alt="phone"
            height={30}
            width={30}
          />
        </a>
      </div>
      {isOpen && (
        <div className="h-[100%] w-full fixed overflow-y-auto z-50">
          <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      )}
    </nav>
  );
};

export default MobileHeader;
