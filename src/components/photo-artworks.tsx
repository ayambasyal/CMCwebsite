import Image from "next/image"
import { cn } from "@/lib/utils"
import { PhotoSlide } from '../data/PhotoSlides';

interface PhotoArtworkProps extends React.HTMLAttributes<HTMLDivElement> {
  Photo: PhotoSlide
  aspectRatio?: "portrait" | "landscape"
}

export function PhotoArtwork({
  Photo,
  aspectRatio = "portrait",
  className,
  ...props
}: PhotoArtworkProps) {
  return (
    <div className={cn("", className)} {...props}>
          <div className="relative h-72 overflow-hidden rounded-md">
            <Image
              src={Photo.photosrc}
              alt={Photo.name}
              fill
              priority
            className={
                    "object-cover transition-all hover:scale-105"}
            />
          </div> 
    </div>
  )
}