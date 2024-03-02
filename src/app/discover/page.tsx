import { Card, CardContent } from '@/components/ui/card'
import { simpleBlogCard } from '@/lib/interface'
import { client, urlFor } from '@/lib/sanity'
import Image from 'next/image'
import React from 'react'


async function getData(){
  const query =  `*[_type == 'blog'] | order(_createdAt desc) {
    title,
    smallDescription,
    "currentSlug":slug.current,  
    titleImage
  }`
  const data = await client.fetch(query)
  return data
}

export default async function Discover() {
  const data:simpleBlogCard[] = await getData()
  // console.log(data)
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 mt-5 px-5 py-5 gap-5 mr-10 ml-10' >
      {
        data.map((post,idx)=> (
          <Card key = {idx} className=''>
            <Image
            className='rounded-t-lg justify-items-stretch' 
            src={urlFor(post.titleImage).url()} 
            alt={post.title} 
            width={400} 
            height={400} 
            />
            <CardContent className='p-6 mt-5'>
              <h3>post.title</h3>
            </CardContent>
          </Card>
        )
        )
      }
      
    </div>
  )
}
