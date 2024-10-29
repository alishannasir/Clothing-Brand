import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Brands } from "@/lib/db"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

export function BrandsCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="w-600 h-400 px-40 rounded-lg"
    >
      <CarouselContent>
        {Brands.map((brand) => (
          <CarouselItem key={brand.id} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-2">
                    <Image
                        className="w-full h-full object-cover"
                        width={600}
                        height={400}
                        src={brand.url}
                        alt={brand.title}
                    />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
