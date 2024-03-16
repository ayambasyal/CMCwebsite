import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { simpleBlogCard } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import React from "react";

async function getData() {
  const query = `*[_type == 'blog'] | order(_createdAt desc) {
    title,
    smallDescription,
    "currentSlug":slug.current,  
    titleImage
  }`;
  const data = await client.fetch(query);
  return data;
}

export default async function Discover() {
  const data: simpleBlogCard[] = await getData();
  const cardStyle =
    "rounded-t-lg justify-items-stretch w-full h-40 object-cover";
  return (
    <div className=" max-w-7xl mx-auto px-4 py-4">
      <h1 className="text-2xl font-sans px-5">Discover</h1>
      <Separator />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 px-4 py-4">
        {data.map((post, idx) => (
          <Card key={idx} className="">
            <Image
              className={`${cardStyle}`}
              src={urlFor(post.titleImage).url()}
              alt={post.title}
              width={400}
              height={400}
            />
            console.log(`${idx}`)
            <CardContent className="p-6">
              <h2 className="text-lg font-sans">{post.title}</h2>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
