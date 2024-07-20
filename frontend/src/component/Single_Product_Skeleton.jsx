import { Skeleton } from "@/components/ui/skeleton";
export default function Single_Product_Skeleton() {
  return (
    <div>
          <div className="grid py-5 pr-4 grid-cols-2 bg-[#f7f8f2] hover:shadow-lg transition duration-300 hover:scale-105 pb-6 md:pb-0">
      <div className="flex flex-col justify-between px-6 pt-6">
        <div className="flex flex-col justify-start md:gap-2 gap-1">
        <Skeleton className="w-[70%] bg-slate-200 mb-2  h-5"/>
        <Skeleton className="w-[20%] bg-slate-200 h-5"/>
        </div>
        <div className='flex flex-col'>
        <Skeleton className="w-[30%] mb-4 bg-slate-200 h-5"/>
        </div>
      </div>
      
        <div className='h-full w-full flex flex-col justify-center items-center'>
        <svg
                className="w-full h-50 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
                >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
        </div>
      
    </div>
    </div>
  )
}
