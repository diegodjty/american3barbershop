import React from 'react';

const Haircut = ({ haircut, dots, price }) => {
  return (
    <div className="flex justify-between">
      <span>{haircut} </span>
      <span>{'.'.repeat(dots)}</span>
      <span>
        <span className="text-[#52FF00]"> $</span>
        {price}
      </span>
    </div>
  );
};

export default Haircut;
