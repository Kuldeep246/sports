"use client"
import React, { useState } from 'react';
import { Card, CardContent } from "./ui/card";
import { Games } from '@/interfaces';

interface GamesCardProps {
    games: Games;
}

const GamesCard: React.FC<GamesCardProps> = ({ games }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className=' shadow-lg h-[624px]  w-[256px] relative overflow-hidden dark:shadow-none m-3  cursor-pointer transition-transform duration-200 transform-gpu hover:shadow-2xl '
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ transform: isHovered ? 'translateY(-8px)  ' : 'translateY(0)' }}>
            <div className='border-[#A9ACB2] py-4 px-4   dark:bg-[#3B3E47]'>
                <div className='  object-scale-down h-[402px]'>
                    <img src={games.image} alt={games.title} className="h-full" />
                </div>
            </div>
            <div className="w-full dark:bg-[#3B3E47]">
                <div className="w-full  h-1 bg-transparent  border-dashed border-gray-300" ></div>
            </div>
            <div className='border-[#A9ACB2]  dark:bg-[#3B3E47]'>
                <div className="pt-9 pb-2  mx-auto px-2 ">
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


        </div>
    );
};

export default GamesCard;
