import ScrollCarousel from "@/components/scrollcarousel";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="p-12 max-w-7xl ">
      <div className={"mx-auto h-96"}>
        <section className="py-24 flex flex-col gap-8 items-center text-center">
          <h1 className="text-4xl font-bold">Welcome to KUCMC</h1>
          <p className="text-2xl text-muted-foreground">
            Join us for workshops, talks, and chats with fellow math
            enthusiasts. We&apos;re all about sharing knowledge and making
            connections.
          </p>
        </section>
        <div className="flex gap-6 items-center justify-center">
          <Button>learn more</Button>
          <Button>enroll now</Button>
        </div>
      </div>
      <div>
        <ScrollCarousel />
      </div>
    </div>
  );
}
