import { Skeleton } from "@/components/ui/skeleton";
export default function Product_Skeleton() {
  return (
    <div>
        <div className="py-10 mt-10">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 h-full mb-4 sm:mb-0">
          <svg
                className="w-full h-60 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
                >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
          </div>
          <div className="md:w-1/2 bg-[#e2e2ba] rounded-md px-5 py-5">
          <Skeleton className="w-full mb-2 h-5"/>
              <Skeleton className="w-[70%] mb-2  h-5"/>
              <Skeleton className="w-[20%] h-5"/>
            <div className="mt-6 flex flex-col md:flex-row">
              <div className="mb-4 md:mb-0 md:mr-8">
               
                <div className="mt-2 flex">
                <Skeleton className="w-[30%] h-5"/>
                </div>
              </div>
              <div className="md:ml-8">
               
                <div className="mt-2 flex flex-wrap">
                <Skeleton className="w-[30%] h-5"/>
                </div>
              </div>
            </div>
            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center mr-4">
              <Skeleton className="w-[30%] h-5"/>
              </div>
              <Skeleton className="w-[30%] h-5"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
