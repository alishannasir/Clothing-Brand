"use client"
// import { Notification } from "@/components/(home)/Notification/Notification";
import { fontRoboto } from "@/app/font";
import { VideosCarousel } from "@/components/(home)/VideosCarousel/VideosCarousel";
import { Navbar } from "@/components/(home)/Navbar/Navbar";
import Icons from "@/components/(home)/Navbar/Icons";
import { CollectionSpring, CollectionWinter } from "./Collection/Collection";
import { CardsImages } from "./Cards/Cards";
import { BrandsCarousel } from "./Brands/Brands";
import Motto from "./Motto/Motto";
import { AllCollectionCarousel } from "./All-Collection/AllCollection";
import AdsCarousel from "./AdsCarousel/AdsCarousel";
export default function Home() {
  return (
    <div className={`w-full h-full flex flex-col relative ${fontRoboto.className}`}>
        <div className="sticky top-0 z-50  ">
        {/* <div className={` flex items-center justify-center w-full `}>
            <Notification />
        </div> */}
        <div className="flex flex-row justify-between items-center px-20 h-20 bg-transparent backdrop-blur-md transition-colors duration-300  text-black scrolled:bg-white scrolled:text-white">
            <Navbar />
            <Icons />
        </div>
        </div>
        <div className="flex justify-center items-center">
            <VideosCarousel />
        </div>
        <div className="flex justify-center items-center">
            <CollectionWinter />
        </div>
        <div className="flex flex-col justify-center items-center py-10">
            <h1 className="text-4xl font-bold font-serif tracking-tight text-center my-10">Trending</h1>
            <CardsImages />
        </div>
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold font-serif tracking-tight text-center my-10">Brands</h1>
            <BrandsCarousel />
        </div>
        <div className="flex justify-center items-center py-10">
            <CollectionSpring />
        </div>
        <div className="flex justify-center items-center py-10">
            <Motto />
        </div>
        <div className="flex justify-center items-center py-10 w-full">
            <AllCollectionCarousel />
        </div>
        <div className="flex flex-col justify-center items-center py-10 w-full">
            <h1 className="text-4xl font-bold font-serif tracking-tight text-center my-10">Must to Conquer</h1>
            <AdsCarousel />
        </div>
    </div>
  );
}




