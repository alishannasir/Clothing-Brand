import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import { SliderDemo } from "./Slider/Slider"
  
  export function Dropdown() {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-sans font-bold">Price</AccordionTrigger>
          <AccordionContent>
            <SliderDemo />
            <div className="flex flex-row items-center justify-between pt-3 gap-2">
                <div className="w-1/2 h-10 border border-gray-300 rounded-md p-2">0</div>
                  <span>to</span>
                <div className="w-1/2 h-10 border border-gray-300 rounded-md p-2">10000</div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
        <AccordionTrigger className="font-sans font-bold">Product Type</AccordionTrigger>
        <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
        <AccordionTrigger className="font-sans font-bold">Size</AccordionTrigger>
        <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  
