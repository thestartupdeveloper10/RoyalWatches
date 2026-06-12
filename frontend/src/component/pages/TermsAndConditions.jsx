import Footer from "../Footer";
import NavBar from "../NavBar";

const TermsAndConditions = () => {
  const year = new Date().getFullYear();
  return (
    <div className="md:py-10 py-6 mt-10">
      <NavBar/>
    <div className="container mx-auto px-4 py-8 bg-[#f9f6ee]">
      <h1 className="text-2xl md:text-4xl font-bold mb-6">Terms & Conditions</h1>
      <p className="text-lg mb-4">Effective Date: {year}</p>

      <section className="mb-8 shadow-lg py-4 px-4 rounded-md bg-white">
        <h2 className="md:text-2xl text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By accessing or using our website (www.royalwatches.com), you agree to comply with and be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our website.
        </p>
      </section>

      <section className="mb-8 shadow-lg py-4 px-4 rounded-md bg-white">
        <h2 className="md:text-2xl text-xl font-semibold mb-4">2. Changes to Terms</h2>
        <p className="mb-4">
          Royal Watches reserves the right to modify or replace these Terms & Conditions at any time. We will notify you of any changes by posting the updated terms on this page. It is your responsibility to review these Terms periodically for any changes.
        </p>
      </section>

      <section className="mb-8 shadow-lg py-4 px-4 rounded-md bg-white">
        <h2 className="md:text-2xl text-xl font-semibold mb-4">3. Use of the Website</h2>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Eligibility:</strong> You must be at least 18 years old to use our website.</li>
          <li><strong>Account Responsibility:</strong> You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</li>
          <li><strong>Prohibited Activities:</strong> You agree not to engage in any unlawful activities or activities that could damage, disable, overburden, or impair the website.</li>
        </ul>
      </section>

      <section className="mb-8 shadow-lg py-4 px-4 rounded-md bg-white">
        <h2 className="md:text-2xl text-xl font-semibold mb-4">4. Products and Pricing</h2>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Product Information:</strong> We strive to provide accurate information about our products. However, we do not warrant that product descriptions or other content are accurate, complete, reliable, or error-free.</li>
          <li><strong>Pricing:</strong> Prices are subject to change without notice. We are not liable for any discrepancies or errors in pricing information.</li>
        </ul>
      </section>

      <section className="mb-8 shadow-lg py-4 px-4 rounded-md bg-white">
        <h2 className="md:text-2xl text-xl font-semibold mb-4">5. Orders and Payments</h2>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Order Acceptance:</strong> Orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order.</li>
          <li><strong>Payment:</strong> All payments must be made through the payment methods specified on our website. You are responsible for providing accurate payment information.</li>
        </ul>
      </section>

      <section className="mb-8 shadow-lg py-4 px-4 rounded-md bg-white">
        <h2 className="md:text-2xl text-xl font-semibold mb-4">6. Shipping and Delivery</h2>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Shipping:</strong> We offer various shipping options. Shipping times and costs are subject to change based on the delivery location and method.</li>
          <li><strong>Delivery:</strong> Delivery dates are estimates and not guaranteed. We are not responsible for delays caused by third parties or unforeseen events.</li>
        </ul>
      </section>

      <section className="mb-8 shadow-lg py-4 px-4 rounded-md bg-white">
        <h2 className="md:text-2xl text-xl font-semibold mb-4">7. Returns and Refunds</h2>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Returns:</strong> We accept returns in accordance with our Return Policy. Please refer to our Return Policy for detailed information on how to return products.</li>
          <li><strong>Refunds:</strong> Refunds will be processed according to our Refund Policy. Please review our Refund Policy for more information.</li>
        </ul>
      </section>

      <section className="mb-8 shadow-lg py-4 px-4 rounded-md bg-white">
        <h2 className="md:text-2xl text-xl font-semibold mb-4">8. Intellectual Property</h2>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Ownership:</strong> All content on our website, including text, images, logos, and trademarks, is the property of Royal Watches or its licensors and is protected by intellectual property laws.</li>
          <li><strong>Use Restrictions:</strong> You may not reproduce, distribute, modify, or create derivative works of any content on our website without prior written permission.</li>
        </ul>
      </section>

      <section className="mb-8 shadow-lg py-4 px-4 rounded-md bg-white">
        <h2 className="md:text-2xl text-xl font-semibold mb-4">9. Limitation of Liability</h2>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Disclaimer:</strong> Our website and products are provided “as is” without warranties of any kind. We do not guarantee that our website will be uninterrupted or error-free.</li>
          <li><strong>Liability:</strong> To the fullest extent permitted by law, Royal Watches is not liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of our website or products.</li>
        </ul>
      </section>

      <section className="mb-8 shadow-lg py-4 px-4 rounded-md bg-white">
        <h2 className="md:text-2xl text-xl font-semibold mb-4">10. Indemnification</h2>
        <p className="mb-4">
          You agree to indemnify and hold harmless Royal Watches, its affiliates, and their respective officers, directors, employees, and agents from any claims, liabilities, damages, losses, or expenses arising out of your use of our website or violation of these Terms & Conditions.
        </p>
      </section>

      <section className="mb-8 shadow-lg py-4 px-4 rounded-md bg-white">
        <h2 className="md:text-2xl text-xl font-semibold mb-4">11. Governing Law</h2>
        <p className="mb-4">
          These Terms & Conditions are governed by and construed in accordance with the laws of [Insert Jurisdiction]. Any disputes arising under or in connection with these Terms will be subject to the exclusive jurisdiction of the courts located in [Insert Jurisdiction].
        </p>
      </section>

      <section className="mb-8 shadow-lg py-4 px-4 rounded-md bg-white">
        <h2 className="md:text-2xl text-xl font-semibold mb-4">12. Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns about these Terms & Conditions, please contact us at:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Email:</strong> [support@royalwatches.com]</li>
          <li><strong>Phone:</strong> [2547123455]</li>
          <li><strong>Address:</strong> [Nairobi]</li>
        </ul>
      </section>
    </div>
    <Footer/>
    </div>
  );
};

export default TermsAndConditions;
