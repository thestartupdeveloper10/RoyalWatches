const Faq = () => {
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                <p className="mt-4 mb-8 dark:text-gray-600">
                    Here are some of the most commonly asked questions about our luxury watches. If you have more questions, feel free to reach out to us!
                </p>
                <div className="space-y-4">
                    {/* Existing FAQ entries */}
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                            How do I choose the right size for a luxury watch?
                        </summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                            Choosing the right watch size depends on your wrist size and personal preference. Measure your wrist circumference and compare it with the watch case diameter. Generally, a watch with a case diameter of 38-42mm fits well on a smaller wrist, while 44mm or larger is ideal for a larger wrist.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                            How often should I service my luxury watch?
                        </summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                            It’s recommended to service your luxury watch every 3-5 years to maintain its performance and longevity. Regular servicing includes checking the movement, cleaning, and replacing worn-out parts. However, refer to the manufacturer’s guidelines for specific recommendations.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                            Can I wear my luxury watch while swimming?
                        </summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                            Many luxury watches are designed to be water-resistant, but the level of water resistance varies. Check the watch’s water resistance rating before swimming. For example, a watch with a rating of 50 meters or more is generally suitable for swimming, but not diving.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                            How do I maintain the condition of my luxury watch?
                        </summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                            To maintain your luxury watch, avoid exposure to extreme temperatures and magnetic fields. Clean it regularly with a soft cloth, and ensure it’s kept away from chemicals and perfumes. Store your watch in a dry, safe place when not in use, and have it serviced periodically.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                            What is the difference between quartz and mechanical watches?
                        </summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                            Quartz watches are powered by a battery and are known for their accuracy and low maintenance. Mechanical watches, either manual or automatic, are powered by a winding mechanism and are valued for their craftsmanship and tradition. Mechanical watches often require more maintenance but are highly prized by collectors.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                            Can I trade in my old watch for a new one?
                        </summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                            Yes, many retailers offer trade-in programs where you can exchange your old watch for a new one. The trade-in value depends on the brand, model, condition, and market demand for your old watch. Check with your retailer for specific trade-in policies and offers.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                            How can I verify the authenticity of a luxury watch?
                        </summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                            To verify the authenticity of a luxury watch, check for signs such as the weight, logo, serial numbers, and craftsmanship. Buying from authorized dealers or reputable sources helps ensure authenticity. It’s also wise to have the watch inspected by a professional if you have any doubts.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                            What is the warranty on your watches?
                        </summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                            Our luxury watches typically come with a manufacturer’s warranty ranging from 2 to 5 years, depending on the brand and model. The warranty covers defects in materials and workmanship. Please refer to the warranty documentation provided with your watch for detailed terms and conditions.
                        </p>
                    </details>
                    
                    {/* Additional FAQ entries */}
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                            How should I store my luxury watch when not in use?
                        </summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                            When not in use, store your luxury watch in a dry, cool place away from direct sunlight. Use a watch box or case to protect it from dust and accidental damage. For automatic watches, consider using a watch winder to keep it running smoothly.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                            How do I adjust the time and date on my watch?
                        </summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                            To adjust the time and date on your watch, pull out the crown and turn it clockwise or counterclockwise. The exact method can vary depending on the watch model, so refer to the user manual for specific instructions. Be cautious when setting the date to avoid damaging the movement.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                            What should I do if my watch stops working?
                        </summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                            If your watch stops working, check if it needs a new battery (for quartz watches) or if it requires winding (for mechanical watches). If the issue persists, it may need servicing by a professional watchmaker to diagnose and fix the problem.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                            Are all our luxury watches waterproof?
                        </summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                            Not all luxury watches are waterproof, but many are water-resistant to varying degrees. Always check the watch’s specifications for its water resistance rating before exposing it to water. Watches labeled as “waterproof” can withstand exposure to water up to a certain depth and duration.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                            How can I tell if a watch is an automatic?
                        </summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                            You can tell if a watch is automatic by looking for the words “Automatic” or “Self-winding” on the dial. Automatic watches often have a transparent case back that shows the movement and rotor. Additionally, an automatic watch will continue to run as long as it is worn regularly.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                            What is the difference between a chronograph and a regular watch?
                        </summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                            A chronograph is a watch that includes a stopwatch function in addition to the regular timekeeping. It usually has additional dials or subdials to measure seconds, minutes, and hours. A regular watch typically only shows the time and sometimes the date.
                        </p>
                    </details>
                </div>
            </div>
        </section>
    );
}

export default Faq;
