import { 
    Card, 
    CardContent, 
    CardDescription, 
    CardTitle 
} from '@/components/ui/card';
import Footer from '../Footer';
import NavBar from '../NavBar';


const Instructions = () => {
    return ( 
        <div>
            <NavBar/>
        <div className='mt-20 bg-[#f9f6ee] px-10 py-10'>
            <div className='flex flex-col items-center justify-center mb-16'>
                <h1 className='text-center text-4xl font-bold'>How Royal Watches Works</h1>
                <p className='text-center text-lg'>We’ve streamlined the process of finding and purchasing your dream watch. Here’s how you can get started with Royal Watches in just a few simple steps.</p>
            </div>
            <div className="overall grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4">
                <Card className="flex flex-col justify-start shadow-lg">
                    <CardContent>
                        <img src='https://cdn.pixabay.com/photo/2013/01/05/14/18/watches-73936_960_720.jpg' className='rounded-md my-4' alt="Browse Collection" />
                        <div className='flex items-center gap-5 mt-6'>
                            <CardTitle className="rounded-full p-4 h-14 w-14 bg-slate-100 flex items-center justify-center"><h1>1</h1></CardTitle>
                            <CardDescription className="text-xl">Browse Our Collection</CardDescription>
                        </div>
                        <p className='mt-4 text-wrap'>Explore our curated selection of luxury timepieces. Filter by brand, style, and features to find the perfect watch that suits your taste and needs.</p>
                    </CardContent>
                </Card>
                <Card className="flex flex-col justify-between shadow-lg">
                    <CardContent>
                        <img src='https://cdn.pixabay.com/photo/2017/03/03/04/31/clock-2113254_960_720.jpg' className='rounded-md my-4' alt="Choose Your Watch" />
                        <div className='flex items-center gap-5 mt-6'>
                            <CardTitle className="rounded-full h-14 w-14 bg-slate-100 flex items-center justify-center"><h1>2</h1></CardTitle>
                            <CardDescription className="text-xl">Choose Your Watch</CardDescription>
                        </div>
                        <p className='mt-4'>Once you&apos;ve  found a watch you love, select your preferred options and add it to your cart. Our luxury watches come with detailed descriptions to help you make an informed decision.</p>
                    </CardContent>
                </Card>
                <Card className="flex flex-col justify-between shadow-lg">
                    <CardContent>
                        <img src='https://cdn.pixabay.com/photo/2019/05/16/20/15/online-4208112_960_720.jpg' className='rounded-md my-4' alt="Place Your Order" />
                        <div className='flex items-center gap-5 mt-6'>
                            <CardTitle className="rounded-full h-14 w-14 bg-slate-100 flex items-center justify-center"><h1>3</h1></CardTitle>
                            <CardDescription className="text-xl">Place Your Order</CardDescription>
                        </div>
                        <p className='mt-4'>Complete your purchase with our secure checkout process. We offer multiple payment options to ensure a smooth transaction.</p>
                    </CardContent>
                </Card>
                <Card className="flex flex-col justify-between shadow-lg">
                    <CardContent>
                        <img src='https://cdn.pixabay.com/photo/2022/01/28/12/17/delivery-6974508_960_720.jpg' className='rounded-md my-4' alt="Receive Your Watch" />
                        <div className='flex items-center gap-5 mt-6'>
                            <CardTitle className="rounded-full h-14 w-14 bg-slate-100 flex items-center justify-center"><h1>4</h1></CardTitle>
                            <CardDescription className="text-xl">Receive Your Watch</CardDescription>
                        </div>
                        <p className='mt-4 text-wrap'>Your watch will be delivered to your doorstep, securely packaged and ready to be worn. Enjoy the luxury of owning a high-quality timepiece from Royal Watches.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
        <Footer/>
        </div>
    );
}

export default Instructions;
