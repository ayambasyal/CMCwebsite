import React from "react";
import { Separator } from "./ui/separator";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { listenNowAlbums } from "@/data/albums";
import { AlbumArtwork } from "./album-artwork";

import { client, urlFor } from "../lib/sanity";
import { simpleBlogCard } from "@/lib/interface";
import { Card } from "./ui/card";
import Image from "next/image";
import { CardContent } from "@/components/ui/card";

async function getData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc){
    title,
    smallDescription,
    "currentSlug":slug.current,
    titleImage,
}`;

  const data = await client.fetch(query);
  return data;
}

export default async function ScrollCarousel() {
  const data: simpleBlogCard[] = await getData();
  return (
    <div>
      <div className="flex items-center justify-between mt-24">
        <div className="space-y-0">
          <h2 className="text-2xl font-semibold tracking-tight">Glimpses</h2>
          <p className="text-sm text-muted-foreground"> Educational</p>
        </div>
      </div>
      <Separator className="my-4" />
      <div>
        <ScrollArea className="flex">
          <div className="flex space-x-4 pb-4">
            {data.map((post, idx) => (
              <Card key={idx} className="w-96">
                <Image
                  src={urlFor(post.titleImage).url()}
                  alt="alt"
                  width={400}
                  height={400}
                  className="rounded-t-lg object-cover h-40"
                />
                <CardContent>
                  <h2 className="pt-2 font-bold">{post.title}</h2>
                  <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-400">
                    {post.smallDescription}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
}
