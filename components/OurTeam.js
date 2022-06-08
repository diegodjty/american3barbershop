import React from 'react';
import ContentTitle from './ContentTitle';
import TeamMembers from './TeamMembers';

const OurTeam = () => {
  return (
    <div className="w-[80%] m-auto flex flex-col items-center" id="ourteam">
      <ContentTitle title={'OUR TEAM'} img={'/img/team.svg'} />
      <TeamMembers />
    </div>
  );
};

export default OurTeam;
