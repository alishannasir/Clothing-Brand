import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { photosWinter, photosSpring } from "@/lib/db";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay"
import { Button } from "@/components/ui/button";

export function CollectionWinter() {
  return (
    <Carousel 
    className="w-full h-full relative"
    plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        {photosWinter.map((photo) => (
          <CarouselItem key={photo.id} className="relative">
            <Image
              className="w-full h-auto object-cover"
              width={600}
              height={400}
              src={photo.url}
              alt={photo.title}
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center">
               <h1 className="text-white text-4xl font-bold text-center font-serif tracking-tight">{photo.title}</h1>
               <p className="text-white text-sm text-center font-sans tracking-tight font-light">{photo.description}</p>
               <Button className="mt-4 ">View</Button>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export function CollectionSpring() {
    return (
      <Carousel 
      className="w-full h-full relative"
      plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {photosSpring.map((photo) => (
            <CarouselItem key={photo.id} className="relative">
              <Image
                className="w-full h-full object-cover"
                width={800}
                height={800}
                src={photo.url}
                alt={photo.title}
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center">
                 <h1 className="text-white text-4xl font-bold text-center font-serif tracking-tight">{photo.title}</h1>
                 <p className="text-white text-sm text-center font-sans tracking-tight font-light">{photo.description}</p>
                 <Button className="mt-4 ">View</Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    );
  }
  