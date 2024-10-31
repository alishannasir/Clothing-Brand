import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"

export function SearchSidebar({isOpen, onClose}: {isOpen: boolean, onClose: () => void}) {
 
  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent className="w-full items-center justify-start">  
            <div className="w-full flex flex-row items-center justify-start">
              <h1>Search</h1>
              <div className=" w-full flex flex-col items-center justify-start">
                <DrawerHeader className="flex flex-col gap-2">
                  <DrawerTitle className="flex flex-row gap-2">
                    <h1>Search</h1>
                    <h1>Products</h1>
                    <h1>Sell</h1>
                  </DrawerTitle>
                  <DrawerDescription className="flex flex-row gap-2">
                    <h1>Goods</h1>
                    <h1>Nice</h1>
                    <h1>Sell</h1>
                  </DrawerDescription>
                </DrawerHeader>
              </div>
              <div className="flex flex-row justify-end pr-10">
                  <DrawerClose asChild>
                      <Button variant="outline">Cancel</Button>
                  </DrawerClose>
              </div>
            </div>
      </DrawerContent>
    </Drawer>
  )
}
