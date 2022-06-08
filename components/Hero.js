import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className=" flex flex-col  items-center h-auto flex-1">
      <div className="mt-52">
        <Image src={'/img/pole.svg'} height={70} width={70} alt="barber pole" />
        <p className="font-caveat text-mainYellow text-2xl">The Best</p>
      </div>
      <div className="mt-10 text-center text-6xl font-bebas text-white flex flex-col items-center">
        <p>BARBERS</p>
        <p>IN TOWN</p>
        <span className="h-1 w-20 mt-4 bg-mainYellow block"></span>
      </div>
      <div className=" flex flex-col items-center mt-auto mb-7 ">
        <Link href={'#ourwork'} passHref>
          <a>
            <Image
              src={'/img/ArrowDown.svg'}
              height={50}
              width={50}
              alt="go Down Arrow"
            />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
