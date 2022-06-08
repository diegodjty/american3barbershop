import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TeamMember = ({ img, name, number, instagram }) => {
  return (
    <div className="mb-10">
      <div className="z-10 relative border-2 border-mainYellow">
        <Image src={img} height={340} width={250} alt="team member" />
      </div>
      <div className="bg-mainYellow w-[80%] m-auto flex flex-col items-center py-2 -mt-10 z-20 relative border-white border-2 ">
        <p className="text-white font-bebas text-3xl">{name}</p>
        <div className="flex w-[35%] justify-between mt-1 cursor-pointer">
          <Link href={`tel:${number}`} passHref>
            <Image
              height={25}
              width={25}
              src={'/img/whitePhone.svg'}
              alt="team member phone number"
            />
          </Link>
          <Link href={instagram} passHref>
            <Image
              height={25}
              width={25}
              src={'/img/iglogo.svg'}
              alt="team member instagram"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
