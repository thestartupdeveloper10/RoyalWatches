import { Skeleton } from "@/components/ui/skeleton";

export default function MenProduct_Skeleton() {
  return (
    <div>
        <div className="relative md:h-[450px] bg-[#f9f6ee]">
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-10"></div>
            <svg
                className="w-full h-50 text-[#f9f6ee] dark:text-[#f9f6ee] rounded-none"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
                >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
            <Skeleton className="absolute h-14 w-2/3 md:bottom-6 bottom-5 z-10 translate-x-[-50%] left-[50%] text-black md:px-8 md:py-4 px-6 py-[10px] text-center"></Skeleton>
           
        </div>
    </div>
  )
}
