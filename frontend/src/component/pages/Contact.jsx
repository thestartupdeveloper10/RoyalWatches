import { useState } from "react";
import Footer from "../Footer";
import NavBar from "../NavBar";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("All fields are required.");
      return;
    }
    // TODO: wire to backend contact endpoint
    setSubmitted(true);
  };

  return (
    <div>
      <NavBar />
      <section className="py-6 dark:bg-gray-100 dark:text-gray-900 md:mt-20 mt-8">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="py-6 md:py-0 md:px-6">
            <h1 className="text-4xl font-bold text-start">Get in touch</h1>
            <p className="pt-2 pb-4 text-start">Fill in the form to start a conversation</p>
            <div className="space-y-4">
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Box, 9999 Nairobi</span>
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>2547123355</span>
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>support@royalwatches.com</span>
              </p>
            </div>
          </div>

          {submitted ? (
            <div className="flex flex-col items-center justify-center py-10 px-6 gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <h2 className="text-xl font-semibold">Message sent!</h2>
              <p className="text-gray-600 text-center">We&apos;ll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col py-6 bg-[#e1ddd2] px-3 md:py-10 space-y-6 rounded-md md:px-6"
            >
              <label className="block">
                <span className="mb-1 font-bold">Full name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Leroy Jenkins"
                  className="block mt-2 w-full h-9 px-2 shadow-sm focus:ring focus:ring-opacity-75 dark:bg-gray-100"
                  required
                />
              </label>
              <label className="block">
                <span className="mb-1 font-bold">Email address</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="leroy@jenkins.com"
                  className="block mt-2 w-full h-9 px-2 shadow-sm focus:ring focus:ring-opacity-75 dark:bg-gray-100"
                  required
                />
              </label>
              <label className="block">
                <span className="mb-1 font-bold">Message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="3"
                  className="block w-full mt-2 px-2 focus:ring focus:ring-opacity-75 dark:bg-gray-100"
                  required
                />
              </label>
              {error && <p className="text-red-600 text-sm">{error}</p>}
              <button
                type="submit"
                className="bg-[#bfbbaf] self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 hover:bg-black hover:text-white transition"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
