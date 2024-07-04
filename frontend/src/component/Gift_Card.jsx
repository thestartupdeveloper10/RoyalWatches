import { Button } from "@/components/ui/button";
import another from '../assets/imgs/another.jpg';

const Gift_Card = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full md:mt-20 mt-8 rounded-lg bg-[#f7f8f2]">
                <div>
                    <img src={another} alt="Gift Card Promotion" className="rounded-lg md:rounded-l-lg h-full object-cover" />
                </div>
                <div className="flex flex-col items-center justify-center lg:px-12 px-4 py-4 lg:py-0">
                    <div className="flex flex-col gap-2 mb-3">
                        <h1 className="font-bold uppercase md:text-md lg:text-lg text-gray-800">
                            Receive a Free Gift Card Worth Up to $350 When You Purchase Selected Watches
                        </h1>
                        <p className="uppercase md:font-medium font-normal text-sm md:text-md lg:text-base text-gray-600">
                            Take advantage of our exclusive offer! Purchase any of our selected luxury watches and receive a gift card valued up to $350. Use it towards your next purchase or as a perfect gift for someone special. Terms and conditions apply.
                        </p>
                    </div>
                    <Button className="w-full">
                        Find Out More
                    </Button> 
                </div>
            </div>
        </div>
    );
}

export default Gift_Card;
