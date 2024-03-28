"use client"
import React, { useState } from 'react';
import { Games } from '@/interfaces';

interface GamesCardProps {
    games: Games;
}

const GamesCard: React.FC<GamesCardProps> = ({ games }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className=' border-[#A9ACB2]  h-[625px] w-[257px] bg-white  dark:bg-[#3B3E47] hover:scale-[1.02]   relative overflow-hidden dark:shadow-none m-3  cursor-pointer transition-transform duration-200 transform-gpu shadow-sm hover:shadow-md '
            >

            <div className=' mx-auto mt-4 mb-3 w-[226px] shadow-lg  object-scale-down h-[402px]'>
                <img src={games.image} alt={games.title} className="h-full" />
            </div>

            <div className='px-[23px] text-[#A9ACB2]'>- - - - - - - - - - - - - - - - - - 
            </div>
            <div className="pt-3 pb-2  mx-auto px-2 ">
                <h2 className="text-center  text-xl font-medium leading-7 font-poppins">{games.title}</h2>
                <div className='flex  justify-center '>
                    <div>
                        <div className='p-2 text-center font-normal leading-5 font-poppins text-sm mr-1 '>
                            <span >{games.date} | </span>
                            <span >{games.day} | </span>
                            <span >{games.time} </span>
                        </div>
                        <div className="text-center text-[#525965] dark:text-[#DFDFDF] text-sm font-normal leading-[20.58px] font-inter">
                            {games.location}
                        </div>
                    </div>

                </div>
                <div className='bg-black text-white text-xs text-center font-medium mt-2 mb-1 py-2 px-6'>
                    {games.collection}
                </div>
            </div>
        </div>
    );
};

export default GamesCard;
