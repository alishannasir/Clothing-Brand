import React from 'react'
import { Carousel,  CarouselItem, CarouselContent } from '@/components/ui/carousel'
import { Ads } from '@/lib/db'
import Autoplay from 'embla-carousel-autoplay'

function AdsCarousel() {
  return (
    <div className="w-[80%] h-[80%] rounded-lg flex flex-row justify-center items-center">
      <Carousel
      opts={{
        align: "center",
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="w-full h-full"
      >
       <CarouselContent>
       {Ads.map((ad) => (
          <CarouselItem key={ad.id} className="md:basis-1/3 lg:basis-1/4 w-full h-auto object-cover rounded-lg">
            <video
              className="w-full h-auto object-cover rounded-lg"
              autoPlay
              preload="auto"
              width="100%"
              height="auto"
            >
              <source src={ad.url} type="video/mp4" />
            </video>
          </CarouselItem>
        ))}
       </CarouselContent>
      </Carousel>
    </div>
  )
}

export default AdsCarousel
