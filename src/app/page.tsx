"use client"
import Image from "next/image";
import Nav from "@/components/Nav"
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
// import Autoheight from "embla-carousel-auto-height"

import { AlbumArtwork } from "@/components/album-artworks"
import { PhotoArtwork } from "@/components/photo-artworks";
import { listenNowAlbums, madeForYouAlbums } from "@/data/albums"
import { MainPage } from "@/data/PhotoSlides";

export default function Home() {

  return (
    <main className="p-12">
    <Carousel
    opts={{
    align: "start",
    loop: true,
  }}
  plugins={[
    Autoplay({
      delay: 6000,
    }),
  ]}
  className="px-4 py-4"
  >
      <CarouselContent className="relative embla__slide py-5">
      {MainPage.map((x) => (
        <CarouselItem className="relative w-full place-self-center" key={x.photosrc}>
                              <PhotoArtwork
                                key={x.name}
                                Photo={x}
                              />
                              </CarouselItem>
                            ))} 
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
      <section className="py-24 flex flex-col gap-8 items-center text-center">
        <h1 className="text-4xl font-bold">shadcn: awesome</h1>
        <p className="text-2xl text-muted-foreground">There are handpicked themes that you can copy and paste into your apps</p>
      </section>
      <div className="flex gap-6 items-center justify-center">
        <Button>learn more</Button>
        <Button>enroll now</Button>
      </div>
    </main>
  );
}
