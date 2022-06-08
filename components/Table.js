import React from 'react';
import Haircut from './Haircut';

const Table = () => {
  return (
    <div className="border-2 border-mainYellow w-[90%] font-bebas text-white text-2xl px-[5%] py-5 text-center max-w-md min-w-max">
      <Haircut haircut={'Regular Haircut'} dots={20} price={'20'} />
      <Haircut haircut={'Shape Up'} dots={35} price={'10'} />
      <Haircut haircut={'Shaved'} dots={38} price={'15'} />
      <Haircut haircut={'Head Shaved'} dots={29} price={'20'} />
      <Haircut haircut={'Kids - under 6'} dots={27} price={'20'} />
      <Haircut haircut={'Fade high or low'} dots={21} price={'25'} />
      <Haircut haircut={'Tape up'} dots={38} price={'25'} />
      <Haircut haircut={'Flat top'} dots={36} price={'25'} />
      <Haircut haircut={'Cleaser'} dots={37} price={'20'} />
      <Haircut haircut={'With The Grain'} dots={25} price={'25'} />
      <Haircut haircut={'Senior citizen 65 & over'} dots={9} price={'18'} />
      <Haircut haircut={'hair cut & shaved'} dots={20} price={'35'} />
      <Haircut haircut={'Shape up & shaved'} dots={20} price={'20'} />
    </div>
  );
};

export default Table;
