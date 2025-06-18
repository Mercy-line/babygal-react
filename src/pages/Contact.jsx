import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact= ()=> {
  return (
    <section>
      <Header />
      <section className=" m-16 px-16 py-2 text-gray-800">
        <h2 className="text-2xl font-serif font-bold mb-8">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left*/}
          <div>
            <h3 className="text-xl font-semibold font-serif mb-4">Get in Touch</h3>
            <p className="mb-6 font-serif">
              We'd love to hear from you. Please fill out the form below or use
              our contact information.
            </p>
            <p className="mb-2 font-serif">
              <strong>Address:</strong> 123 NGO Street, Nairobi, Kenya
            </p>
            <p className="mb-2 font-serif">
              <strong>Phone:</strong> +254 123 456 789
            </p>
            <p className='font-serif'>
              <strong>Email:</strong> info@babygal.org
            </p>
          </div>

          {/* Right */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-pink-300 rounded-md focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-pink-300 rounded-md focus:outline-none"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 border border-pink-300 rounded-md focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </section>
  );
};

export default Contact;