import React from 'react';
import Image from 'next/image';

const ContentTitle = ({ title, img }) => {
  return (
    <div className="my-12 flex flex-col items-center">
      <p className="text-white font-bebas text-5xl">{title}</p>
      <Image src={img} height={70} width={70} alt={'icon'} />
    </div>
  );
};

export default ContentTitle;
