import Footer from "../Footer";
import NavBar from "../NavBar";

const DeliveryDetails = () => {
  return (
    <div className="md:py-10 py-6 mt-10">
        <NavBar/>
        <h1 className=" text-2xl lg:text-4xl font-bold mb-6">Delivery Details</h1>
      <p className="text-lg mb-4">Here’s everything you need to know about our delivery process, including shipping options, delivery times, and costs.</p>
    <div className="container mx-auto px-4 py-8 grid md:grid-cols-2 grid-cols-1 gap-5 bg-[#f9f6ee]">
      

      <section className=" shadow-lg py-4 px-4 rounded-md bg-white">
        <h2 className="text-2xl font-semibold mb-4">1. Shipping Options</h2>
        <p className="mb-4">
          We offer a variety of shipping options to meet your needs. Please choose the option that best suits your delivery requirements at checkout.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Standard Shipping:</strong> Delivered within 5-7 business days.</li>
          <li><strong>Expedited Shipping:</strong> Delivered within 2-3 business days.</li>
          <li><strong>Overnight Shipping:</strong> Delivered the next business day.</li>
        </ul>
      </section>

      <section className=" shadow-lg py-4 px-4 rounded-md bg-white">
        <h2 className="text-2xl font-semibold mb-4">2. Delivery Times</h2>
        <p className="mb-4">
          Delivery times vary based on your location and the shipping option selected. Orders placed before 3 PM local time will be processed the same day. Orders placed after 3 PM will be processed the next business day.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Standard Shipping:</strong> Typically takes 5-7 business days.</li>
          <li><strong>Expedited Shipping:</strong> Typically takes 2-3 business days.</li>
          <li><strong>Overnight Shipping:</strong> Delivered the next business day if ordered before the cutoff time.</li>
        </ul>
      </section>

      <section className=" shadow-lg py-4 px-4 rounded-md bg-white">
        <h2 className="text-2xl font-semibold mb-4">3. Shipping Costs</h2>
        <p className="mb-4">
          Shipping costs are calculated based on the weight of your order, the shipping option selected, and the delivery location. You will see the shipping cost at checkout before you finalize your order.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Standard Shipping:</strong>Free on orders over $20,000</li>
          <li><strong>Expedited Shipping:</strong> $100</li>
          <li><strong>Overnight Shipping:</strong> $150</li>
        </ul>
      </section>

      <section className=" shadow-lg py-4 px-4 rounded-md bg-white">
        <h2 className="text-2xl font-semibold mb-4">4. International Shipping</h2>
        <p className="mb-4">
          We offer international shipping to select countries. International orders may be subject to customs duties, taxes, and additional shipping fees. Delivery times for international orders vary based on the destination.
        </p>
      </section>

      <section className=" shadow-lg py-4 px-4 rounded-md bg-white">
        <h2 className="text-2xl font-semibold mb-4">5. Order Tracking</h2>
        <p className="mb-4">
          Once your order has shipped, you will receive a confirmation email with a tracking number. Use this tracking number to monitor the status of your delivery on the carrier’s website.
        </p>
      </section>

      <section className=" shadow-lg py-4 px-4 rounded-md bg-white">
        <h2 className="text-2xl font-semibold mb-4">6. Delivery Issues</h2>
        <p className="mb-4">
          If you encounter any issues with your delivery, such as a delayed or missing package, please contact our customer support team. We will work with you to resolve any issues as quickly as possible.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Email:</strong> support@royalwatches.com</li>
          <li><strong>Phone:</strong> 25471244545</li>
          <li><strong>Address:</strong> Box 9000, Nairobi</li>
        </ul>
      </section>

      <section className=" shadow-lg py-4 px-4 rounded-md bg-white">
        <h2 className="text-2xl font-semibold mb-4">7. Returns and Exchanges</h2>
        <p className="mb-4">
          If you need to return or exchange an item, please refer to our Return Policy. Ensure the item is in its original condition and packaging before initiating a return or exchange.
        </p>
      </section>
    </div>

    <Footer/>
    </div>
  );
};

export default DeliveryDetails;
