const Banner = () => {
    return ( 
        <div>

            <div className="  md:grid md:grid-cols-3 mb-8 md:mb-0 gap-8 w-full bg-[#e2e2ba] py-5 px-2 rounded-lg">
                <div className="flex flex-col gap-1 justify-center py-3 md:py-0 w-full md:border-r-4 md:border-b-0 border-b-4">
                    <h1 className="font-extrabold text-center text-md uppercase">
                        Free express delivery
                    </h1>
                    <p className="font-extrabold text-center text-sm md:text-md uppercase text-gray-500">
                        7 days a week including sunday
                    </p>
                </div>
                <div className="flex flex-col gap-1 justify-start  py-3 md:py-0 w-full md:border-r-4 md:border-b-0 border-b-4">
                    <h1 className="font-extrabold text-md  capitalize">
                        Free Clicks & Collect Service
                    </h1>
                    <p className="font-extrabold text-sm md:text-md capitalize  text-gray-500">
                        From Over 100 Showrooms Nationwide
                    </p>
                </div>
                <div className="flex flex-col gap-1 justify-start w-full">
                    <h1 className="font-extrabold text-md capitalize">
                        Up to 3 years interest free credit
                    </h1>
                    <p className="font-extrabold text-sm md:text-md capitalize text-gray-500">
                       Deposit. Status & Minimum Spend
                    </p>
                </div>
            </div>

        </div>
     );
}
 
export default Banner;