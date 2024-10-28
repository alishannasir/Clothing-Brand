import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { videos } from "@/lib/db";

export function VideosCarousel() {
  return (
    <Carousel className="w-full h-full relative">
      <CarouselContent>
        {videos.map((video) => (
          <CarouselItem key={video.id} className="relative">
            {/* Video Element */}
            <video
              className="w-full h-auto object-cover"
              autoPlay
              muted
              loop
              width="100%"
              height="auto"
            >
              <source src={video.url} type="video/mp4" />
            </video>

            {/* Noise Overlay */}
            <div
              className="absolute inset-0 opacity-20 pointer-events-none mix-blend-multiply"
              style={{
                backgroundImage: `url("https://example.com/path-to-noise-texture.png")`, // Use an actual noise image or pattern
                backgroundSize: "cover",
              }}
            ></div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
