import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

import { AllCollection } from "@/lib/db"
export function AllCollectionCarousel() {
  return (
   <div className="flex flex-col justify-center items-center w-full">
       {AllCollection.map((collection) => (
         <Carousel
         key={collection.id}
         opts={{
            align: "center",
          }}
          plugins={[
            Autoplay({
              delay: collection.delay,
            }),
          ]}
          className="w-full h-400 px-40 rounded-lg"
          >
             <h1 className="text-4xl font-bold font-serif tracking-tight text-center my-10">{collection.CollectionName}</h1>
           <CarouselContent>
             {collection.Collections.map((item) => (
               <CarouselItem key={item.id} className="md:basis-1/3 lg:basis-1/4 flex flex-col justify-center items-center">
                 <Image src={item.url} alt={item.title} width={500} height={500} className="w-full h-full object-cover rounded-lg" />
                 <h1 className="text-2xl font-bold font-serif tracking-tight text-center">{item.title}</h1>
                 <p className="text-sm font-serif tracking-tight text-center ">{item.description}</p>
                 <p className="text-sm font-serif tracking-tight text-center ">{item.price}</p>
               </CarouselItem>
             ))}
           </CarouselContent>
         </Carousel>
       ))}
   </div>
  )
}



   