import { Notification } from "@/components/Notification/Notification";
import { fontRoboto } from "./font";
import { VideosCarousel } from "@/components/VideosCarousel/VideosCarousel";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className={`items-center justify-items-center px-20 h-5 fixed  ${fontRoboto.className} bg-gray-500`}>
        <Notification />
      </div>
       <div className="flex justify-center items-center pt-20">
       <VideosCarousel />
       </div>
    </div>
  );
}
