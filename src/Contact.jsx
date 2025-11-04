import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-green-50 py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-green-900 mb-10 text-center">
          Contact Us
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-6 text-center sm:text-left">
            <p className="text-green-700 text-base sm:text-lg">
              Have questions or need assistance? We're here to help! Reach out
              via the form or through the contact details below.
            </p>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-green-800 mb-1">
                Our Address
              </h3>
              <p className="text-green-700 text-sm sm:text-base">
                123 Fresh Market St.<br />Springfield, USA
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-green-800 mb-1">
                Phone
              </h3>
              <p className="text-green-700 text-sm sm:text-base">
                +1 (555) 123-4567
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-green-800 mb-1">
                Email
              </h3>
              <p className="text-green-700 text-sm sm:text-base">
                support@freshmarketgrocers.com
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 sm:p-8 rounded-lg shadow-md"
          >
            {submitted && (
              <div className="mb-6 p-4 bg-green-100 text-green-800 rounded text-center sm:text-left">
                ✅ Thank you for contacting us! We’ll get back to you soon.
              </div>
            )}

            <div className="mb-5">
              <label
                htmlFor="name"
                className="block text-green-800 font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-green-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-600 text-sm sm:text-base"
                placeholder="Your full name"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="email"
                className="block text-green-800 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-green-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-600 text-sm sm:text-base"
                placeholder="you@example.com"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="message"
                className="block text-green-800 font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full border border-green-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-600 text-sm sm:text-base"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg w-full transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
