import React from 'react';
import ContentTitle from './ContentTitle';
import Table from './Table';

const PriceTable = () => {
  return (
    <div
      className="w-[90%] m-auto flex flex-col items-center mb-24"
      id="pricetable"
    >
      <ContentTitle title={'PRICE TABLE'} img={'/img/money.svg'} />
      <Table />
    </div>
  );
};

export default PriceTable;
