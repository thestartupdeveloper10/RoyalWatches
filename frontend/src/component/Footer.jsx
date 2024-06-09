const Footer = () => {
    return ( 
        <div>
            <div className="mt-10 grid lg:grid-cols-3 grid-cols-1 gap-5 md:gap-0 md:grid-cols-2 text-white bg-black px-3 py-5">

                <div className="flex flex-col justify-center items-center w-full">
                    <h1>infor@Royalwatches.com</h1>
                </div>
                <div className="flex flex-col justify-center items-center w-full gap-1 font-bold">
                    <h1>Instagram</h1>
                    <h1>Snapchat</h1>
                    <h1>Twitter</h1>
                </div>
                <div className="flex flex-col justify-center items-center w-full">
                    <h1 className="font-extrabold uppercase">all rights reserved</h1>
                </div>

            </div>
        </div>
     );
}
 
export default Footer;