"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Featured() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 1000,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {[1, 2, 3, 4, 5].map((num) => (
          <CarouselItem key={num} className="basis-full">
            <div className="h-64 flex items-center justify-center bg-gray-200 rounded">
              <h1>{num}</h1>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
      <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
    </Carousel>
  );
}
