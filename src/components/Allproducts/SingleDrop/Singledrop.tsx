
import * as React from "react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownSingle() {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <span className="bg-transparent text-black font-serif cursor-pointer"><span className="font-light font-sans text-sm">Sort by</span> Featured</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel className="text-black font-sans flex flex-col">
            <span>Panel Position</span>
            <span>Featured</span>
            <span>Price</span>
            <span>Rating</span>
            <span>Date</span>
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
