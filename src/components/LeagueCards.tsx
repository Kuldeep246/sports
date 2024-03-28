"use client"
import React, { useState } from 'react';
import { League } from '../interfaces';

interface LeagueCardsProps {
  league: League;
}


const LeagueCards: React.FC<LeagueCardsProps> = ({ league }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className='h-[511px] 2xl:w-[245px] xl:w-[234px] lg:w-[280px] md:w-[237px] sm:w-[270px] w-[300px] shadow-xl dark:shadow-none bg-[#FFFFFF] dark:bg-[#3B3E47] cursor-pointer transition-transform duration-200 transform-gpu hover:shadow-2xl  '
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transform: isHovered ? 'translateY(-8px)  ' : 'translateY(0)' }}>
      <div className='p-2 overflow-hidden object-scale-down h-[385px]'>
        <img src={league.image} alt={league.title} className="w-full h-full object-cover" />
      </div>
      
      <div className="mt-1 p-2">
        <h2 className="font-inter font-medium text-lg leading-[20.57px]">{league.title}</h2>
        <div className='flex bg-[#F7F7F8] dark:bg-[#292B32] justify-between p-2 mt-4'>
          <span className='text-sm mr-1 '><span className='text-[#525965] dark:text-[#DFDFDF] text-xs '>Total Events</span><p className='text-base font-medium'>{league.eventCounts} Events</p></span>
          <span className='text-sm ml-1 '><span className='text-[#525965] dark:text-[#DFDFDF]'>Sport</span><p className='text-base font-medium'> {league.sportsName}</p></span>
        </div>
      </div>
    </div>

  );
};

export default LeagueCards;
