"use client"
import { useState } from "react";


const AdCard = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className='h-[511px] xl:w-[237px] lg:w-[280px] md:w-[237px] sm:w-[270px] w-[300px]  shadow-xl p-2 dark:shadow-none bg-[#FFFFFF] dark:bg-[#3B3E47] relative cursor-pointer transition-transform duration-200 transform-gpu hover:shadow-2xl '
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ transform: isHovered ? 'translateY(-8px)  ' : 'translateY(0)' }}>
            <div className="border-[#006555] border-[0.2px] h-[491px] ">
                <div className="bg-black text-white absolute text-sm top-0 right-0 mr-2 mt-2 px-3 py-1flex justify-center z-10">Ad</div>
                <div className='object-scale-up '>
                    <img src="https://s3-alpha-sig.figma.com/img/c724/731e/f71497e0e3af85c77fa47046bb1f23cb?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ME0JQVe21xR~EAZyQR30C2LsuJ9ZbHratF26Okpyzn6CDQ49MaxPfOMkUuQzMlc7wQSknwCfpHpz3MIf3JIe5KIyiyXqFoaye6lhdaJHbDBgNUPlHetDFDUVxZdvxvknVBjIqY9sjq77hsEy-6swkT2ewezmlCjWL2~nFHS-k7W18G-nm7U3hHc6s3q0jSQVeyl7CwNmOYdCMT0VNtQ3Z3WyLB2XKttniutJ2l-uyDkJNK6NCC5nYn001RxfZBQj0V5~FSPipdzNNQFRhCv5qBaLEEh6fHymXmgmZKpoO~1Lm-7OsgU8uvEdE6iuqKE2aszdCGNX230k-JRO1KZ2NQ__" className="h-full " />
                </div>
                <div className="mt-6 flex flex-col items-center mx-auto">
                    <h2 className="font-inter font-medium text-lg leading-[20.57px]">Advertisement title</h2>
                    <div className='text-[#525965] dark:text-[#DFDFDF] text-xs px-5 mt-2'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default AdCard