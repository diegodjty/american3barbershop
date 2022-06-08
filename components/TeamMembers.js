import React from 'react';
import TeamMember from './TeamMember';

const TeamMembers = () => {
  return (
    <div className="md:grid md:grid-cols-2 space-x-1">
      <TeamMember
        img={'/img/barbers/1.jpeg'}
        name={'Eduardo'}
        number={'6318091212'}
        instagram={'https://www.instagram.com/barberodelafamil'}
      />
      <TeamMember
        img={'/img/barbers/2.jpeg'}
        name={'-----------'}
        number={''}
        instagram={''}
      />
      <TeamMember
        img={'/img/barbers/3.jpeg'}
        name={'--------------'}
        number={''}
        instagram={''}
      />
      {/* <TeamMember
        img={'/img/team1.png'}
        name={'MIGUEL'}
        number={'6311111111'}
        instagram={'https://www.instagram.com/'}
      /> */}
    </div>
  );
};

export default TeamMembers;
