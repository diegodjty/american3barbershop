import React from 'react';
import Image from 'next/image';

const WorkExample = ({ img }) => {
  return (
    <div className="  my-12">
      <Image
        src={img}
        height={260}
        width={260}
        alt={'work Example'}
        className="rounded-md "
      />
    </div>
  );
};

export default WorkExample;
