import {
    Carousel,
    CarouselContent,
    CarouselItem,
  } from "@/components/ui/carousel";

export default function SimilarProduct_Skeleton() {
  return (
    <div>
     <Carousel>
            <CarouselContent>
                <CarouselItem  className="md:basis-1/2 py-4 lg:basis-1/3 -mx-2 md:-mx-4">
                            <div className="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-80">
                <div className="h-48 rounded-t bg-gray-300"></div>
                <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-50">
                    <div className="md:w-full w-1/2 h-6 rounded bg-gray-300"></div>
                    <div className="md:w-full w-1/2 h-6 rounded bg-gray-300"></div>
                    
                </div>
            </div>
                            
                </CarouselItem>
                <CarouselItem  className="md:basis-1/2 py-4 lg:basis-1/3 -mx-2 md:-mx-4">
                            <div className="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-80">
                <div className="h-48 rounded-t bg-gray-300"></div>
                <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-50">
                    <div className="md:w-full w-1/2 h-6 rounded bg-gray-300"></div>
                    <div className="md:w-full w-1/2 h-6 rounded bg-gray-300"></div>
                    
                </div>
            </div>
                            
                </CarouselItem>
                <CarouselItem  className="md:basis-1/2 py-4 lg:basis-1/3 -mx-2 md:-mx-4">
                            <div className="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-80">
                <div className="h-48 rounded-t bg-gray-300"></div>
                <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-50">
                    <div className="md:w-full w-1/2 h-6 rounded bg-gray-300"></div>
                    <div className="md:w-full w-1/2 h-6 rounded bg-gray-300"></div>
                   
                </div>
            </div>
                            
                </CarouselItem>
            </CarouselContent>
          </Carousel>
    </div>
  )
}
