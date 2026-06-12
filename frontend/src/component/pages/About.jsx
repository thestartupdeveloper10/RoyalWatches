import Footer from "../Footer";
import NavBar from "../NavBar";

export default function About() {
  return (
    <div className="md:py-10 py-6 mt-10">
        <NavBar/>
        <section className="py-12 bg-gray-100 dark:bg-gray-800 dark:text-gray-200">
    <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h1 className=" text-xl md:text-4xl font-bold text-center mb-8">About Royal Watches</h1>
        <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
                <img src="https://cdn.pixabay.com/photo/2019/06/24/00/57/watch-4294991_960_720.jpg" alt="About Royal Watches" className="w-full h-auto rounded-lg shadow-lg"/>
            </div>
            <div className="lg:w-1/2 flex flex-col justify-center">
                <p className="mb-4 text-lg leading-relaxed">
                    Welcome to Royal Watches, your premier destination for luxury timepieces. At Royal Watches, we are dedicated to providing our customers with the finest selection of watches that combine timeless elegance and modern sophistication. Our curated collection features exquisite craftsmanship from renowned brands around the world.
                </p>
                <p className="mb-4 text-lg leading-relaxed">
                    Our journey began with a passion for horology and a commitment to offering unparalleled customer service. We believe that a watch is more than just a timekeeping device; it is a reflection of one’s personal style and a symbol of life&apos;s  precious moments. Whether you are seeking a classic design or a contemporary masterpiece, our diverse range of watches caters to all tastes and occasions.
                </p>
                <p className="mb-4 text-lg leading-relaxed">
                    At Royal Watches, we take pride in our expert team who are dedicated to assisting you in finding the perfect watch. Our knowledgeable staff is always available to provide guidance and share their expertise, ensuring a seamless shopping experience. We are committed to offering not only the best products but also an exceptional level of service to every customer.
                </p>
                <p className="text-lg leading-relaxed">
                    Thank you for choosing Royal Watches. We invite you to explore our collection and discover the perfect timepiece that complements your unique style. Experience the elegance, precision, and luxury that define Royal Watches.
                </p>
            </div>
        </div>
    </div>
</section>
<section className="py-12 bg-white dark:bg-gray-700 dark:text-gray-200">
    <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 mb-4 dark:text-violet-600">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                </svg>
                <h3 className="text-2xl font-semibold mb-2">Quality</h3>
                <p className="leading-relaxed">
                    We offer only the highest quality watches, ensuring each piece meets our exacting standards for precision and craftsmanship.
                </p>
            </div>
            <div className="flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 mb-4 dark:text-violet-600">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                </svg>
                <h3 className="text-2xl font-semibold mb-2">Elegance</h3>
                <p className="leading-relaxed">
                    Our collection features designs that combine timeless elegance with contemporary style, perfect for any occasion.
                </p>
            </div>
            <div className="flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 mb-4 dark:text-violet-600">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                </svg>
                <h3 className="text-2xl font-semibold mb-2">Customer Service</h3>
                <p className="leading-relaxed">
                    We are dedicated to providing exceptional customer service, ensuring a seamless and enjoyable shopping experience.
                </p>
            </div>
        </div>
    </div>
</section>
<section className="py-12 bg-gray-100 dark:bg-gray-800 dark:text-gray-200">
    <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Journey</h2>
        <p className="text-lg leading-relaxed mb-6">
            From humble beginnings to becoming a trusted name in luxury watches, our journey has been fueled by a passion for horology and a commitment to excellence. We have grown from a small boutique to an internationally recognized brand, always staying true to our values and dedication to quality.
        </p>
        <p className="text-lg leading-relaxed">
            As we continue to expand our horizons, we remain committed to offering the finest timepieces and providing our customers with an unparalleled shopping experience. Join us as we celebrate the art of watchmaking and the timeless beauty of our collections.
        </p>
    </div>
</section>
    <Footer/>
    </div>
  )
}
