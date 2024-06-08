const Banner = () => {
    return ( 
        <div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                <div className="flex flex-col gap-1 justify-start items-center w-full">
                    <h1 className="font-extrabold text-start text-md uppercase">
                        Free express delivery
                    </h1>
                    <p className="font-extrabold text-start  text-md uppercase text-gray-500">
                        7 days a week including sunday
                    </p>
                </div>
                <div className="flex flex-col gap-1 justify-evenly items-center w-full">
                    <h1 className="font-extrabold text-md  capitalize">
                        Free Clicks & Collect Service
                    </h1>
                    <p className="font-extrabold text-md capitalize  text-gray-500">
                        From Over 100 Showrooms Nationwide
                    </p>
                </div>
                <div className="flex flex-col gap-1 justify-evenly items-center w-full">
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