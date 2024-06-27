const Banner = () => {
    return ( 
        <div>

            <div className=" hidden md:grid md:grid-cols-3 gap-8 w-full bg-gradient-to-r from-neutral-300 to-stone-400 py-5 px-2 rounded-lg">
                <div className="flex flex-col gap-1 justify-start py-3 md:py-0 w-full md:border-r-4 md:border-b-0 border-b-4">
                    <h1 className="font-extrabold text-start text-md uppercase">
                        Free express delivery
                    </h1>
                    <p className="font-extrabold text-start  text-md uppercase text-gray-500">
                        7 days a week including sunday
                    </p>
                </div>
                <div className="flex flex-col gap-1 justify-start  py-3 md:py-0 w-full md:border-r-4 md:border-b-0 border-b-4">
                    <h1 className="font-extrabold text-md  capitalize">
                        Free Clicks & Collect Service
                    </h1>
                    <p className="font-extrabold text-md capitalize  text-gray-500">
                        From Over 100 Showrooms Nationwide
                    </p>
                </div>
                <div className="flex flex-col gap-1 justify-start w-full">
                    <h1 className="font-extrabold text-md capitalize">
                        Up to 3 years interest free credit
                    </h1>
                    <p className="font-extrabold text-md capitalize text-gray-500">
                       0% APR.%0 Deposit. Status & Minimum Spend
                    </p>
                </div>
            </div>

        </div>
     );
}
 
export default Banner;