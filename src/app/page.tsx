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
import Autoheight from "embla-carousel-auto-height"

export default function Home() {
  const sld = ["/public/slide1.png","/public/slide2.png","/public/slide3.png"]
  const slid = sld.map((s)=><Image src="s" alt="alt" width={20} height={20} key={s}/>)
  return (
    <main className="p-12">
    <Carousel
    opts={{
    align: "start",
    loop: true,
    // slides: slid
  }}
  plugins={[
    Autoplay({
      delay: 4000,
    }),
    Autoheight()
  ]}>
      <CarouselContent className="h-24 w-full">
        <CarouselItem className="h-24 text-center justify-items-center">
          <Image src="/public/vercel.svg" alt="alternatie" width={15} height={15} />
          <p>hello</p>
          <p>this is me</p>
        </CarouselItem>
        <CarouselItem className="h-24 text-center justify-items-center">2</CarouselItem>
        <CarouselItem className="h-24 text-center justify-items-center">3</CarouselItem>
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
