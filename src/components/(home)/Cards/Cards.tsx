import * as React from "react"

import Image from "next/image"
import {
  Card,

} from "@/components/ui/card"
import { Cards } from "@/lib/db"
import { Button } from "@/components/ui/button"
export function CardsImages() {
  return (
    <>
   <div className="flex flex-wrap justify-center items-center gap-2">
  {Cards.map((card) => (
    <Card key={card.id} className="w-[350px] h-[550px] flex flex-col hover:scale-95 transition-all duration-300">
        <Image
          src={card.url}
          alt={card.title}
          className="object-cover w-full h-full rounded-t-md"
          width={450}
          height={550}
        />
      <Button className="w-full bg-transparent text-black rounded-none border-grey-700 border-2 hover:bg-transparent hover:text-white hover:bg-slate-300 font-mono">Add to cart</Button>
    </Card>
  ))}
</div>

    </>
  )
}
