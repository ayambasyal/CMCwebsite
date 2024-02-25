export interface PhotoSlide {
    name: string
    description:string
    photosrc:string
  }
  
  export const MainPage: PhotoSlide[] = [
    {
      name: "slide1",
      description: "Ethan Byte",
      photosrc:
        "/slide1.png",
    },
    {
      name: "Slide2",
      description: "Nina Netcode",
      photosrc:
        "/slide2.png",
    },
    {
      name: "Slide 3",
      description: "Lena Logic",
      photosrc:
      "/slide3.png",
    },
    
  ]
  
  export const dummy: PhotoSlide[] = [
    {
      name: "Thinking Components",
      description: "Lena Logic",
      photosrc:
        "https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80",
    },
    {
      name: "Functional Fury",
      description: "Beth Binary",
      photosrc:
        "https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80",
    },
    {
      name: "React Rendezvous",
      description: "Ethan Byte",
      photosrc:
        "https://images.unsplash.com/photo-1614113489855-66422ad300a4?w=300&dpr=2&q=80",
    },
    {
      name: "Stateful Symphony",
      description: "Beth Binary",
      photosrc:
        "https://images.unsplash.com/photo-1446185250204-f94591f7d702?w=300&dpr=2&q=80",
    },
    {
      name: "Async Awakenings",
      description: "Nina Netcode",
      photosrc:
        "https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80",
    },
    {
      name: "The Art of Reusability",
      description: "Lena Logic",
      photosrc:
        "https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80",
    },
  ]