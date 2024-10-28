"use client"
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { notifications } from "@/lib/db"
import { fontRoboto } from "@/app/font"



export function Notification() {
  return (
    <Carousel className="w-full h-18" opts={{ loop: true }} >
        <CarouselContent className="border-none">
            {notifications.map((item, index) => (
            <CarouselItem key={index}>
                <Card className="border-none">
                    <CardContent className="flex  items-center justify-center p-2">
                    <span className={`text-lg font-light ${fontRoboto.className}`}>{item.message}</span>
                    </CardContent>
                </Card>
            </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
     </Carousel>
  )
}
