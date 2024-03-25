"use client"
import { ThemeToggle } from "@/components/ThemeToggle";
import LeagueCards from "@/components/LeagueCards";
import LeagueData from "@/db/LeagueData";
import { League } from "@/interfaces";
import AdCard from "@/components/AdCard";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import GamesCard from "@/components/GamesCard";
import GamesData from "@/db/GamesData";
import { useRef } from "react";



export default function Home() {
  const tickets = useRef(null);

  const handleScroll = () => {
    tickets.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className=" ">

      <div>
        <div className="flex sm:mt-14 mt-10  items-center justify-center">
          <div className="lg:w-5/6 sm:w-11/12  flex flex-col">
            <div className="flex justify-between w-full">
              <div className="font-inter font-semibold  text-lg">
                <span className="text-2xl  font-bold ">Sports</span>
                <div className="mt-1 border-b-2 border-blue-500 w-20"></div>
              </div>
              <div>
                <ThemeToggle />
              </div>
            </div>
            <div className="xl:grid-rows-1 md:grid-rows-2 ">
              <div className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-6 gap-[14px]">
                {LeagueData.map((LeagueData: League) => (
                  <LeagueCards key={LeagueData.id} league={LeagueData} />
                ))}
                <AdCard />
              </div>
            </div>
          </div>
        </div>
        <div className="flex  mt-10 justify-center">
          <Button className="bg-[#2C9CF0] hover:bg-[#267fc5] rounded-sm h-12 w-32 px-4 py-2"
            onClick={handleScroll}>See More</Button>
        </div>
      </div>
      <div ref={tickets} className="mx-auto flex flex-col justify-center   items-center w-5/6 mt-10 mb-20 bg-gradient-to-br from-lightBlue to-lightPurple " >
        <div className="w-full dark:bg-gradient-to-b from-darkBlue to-darkPurple">
          <div className="flex flex-col justify-center mt-10 items-center mx-auto  w-5/6">
            <div className=" text-5xl font-bold leading-10  text-center">Collection Spotlight</div>
            <div className="text-sm mt-6 relative w-5/6 font-normal text-center">Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</div>
          </div>
          <div className="my-8 mx-auto flex justify-center items-center xl:w-5/6 w-11/12">
            <Carousel className=" xl:w-[850px] md:w-[560px] flex justify-center items-center w-5/6">
              <CarouselContent className="flex  mx-auto ">
                {GamesData.map((game) => (
                  <CarouselItem key={game.id} className="p-1  md:basis-1/2 xl:basis-1/3">
                    <GamesCard key={game.id} games={game} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />

            </Carousel>
          </div>


        </div>
      </div>

    </div>
  );
}
