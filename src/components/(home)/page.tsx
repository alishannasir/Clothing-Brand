"use client"
// import { Notification } from "@/components/(home)/Notification/Notification";
import { fontRoboto } from "@/app/font";
import { VideosCarousel } from "@/components/(home)/VideosCarousel/VideosCarousel";
import { Navbar } from "@/components/(home)/Navbar/Navbar";
import Icons from "@/components/(home)/Navbar/Icons";

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
    </div>
  );
}




