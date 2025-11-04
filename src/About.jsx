import React from "react";

const About = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-900 mb-4">
            About Fresh Market Grocers
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-green-700 max-w-3xl mx-auto">
            Your trusted partner for fresh, quality groceries delivered right to
            your doorstep
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 md:mb-16">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-green-800 mb-4 sm:mb-6">
              Our Mission
            </h2>
            <p className="text-green-700 mb-3 sm:mb-4 leading-relaxed text-base sm:text-lg">
              At Fresh Market Grocers, we believe everyone deserves access to
              fresh, high-quality groceries without compromising on convenience.
            </p>
            <p className="text-green-700 leading-relaxed text-base sm:text-lg">
              We're committed to sustainable practices, supporting local
              agriculture, and reducing food waste while providing exceptional
              service to our customers.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://placeholder-image-service.onrender.com/image/400x300?prompt=Farmers+harvesting+fresh+produce&id=about-farmers-1"
              alt="Local farmers harvesting fresh vegetables"
              className="rounded-lg object-cover w-full h-40 sm:h-48 md:h-56"
            />
            <img
              src="https://placeholder-image-service.onrender.com/image/400x300?prompt=Sustainable+farming+practices&id=about-sustainable-2"
              alt="Sustainable farming practices"
              className="rounded-lg object-cover w-full h-40 sm:h-48 md:h-56"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-green-800 text-center mb-8 sm:mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: "🌱",
                title: "Quality First",
                text: "We hand-pick every product to ensure only the freshest items reach your kitchen.",
              },
              {
                icon: "🏠",
                title: "Support Local",
                text: "We partner with local farmers to strengthen our community and reduce carbon footprint.",
              },
              {
                icon: "🚚",
                title: "Convenience",
                text: "Easy ordering, fast delivery, and exceptional customer service.",
              },
            ].map(({ icon, title, text }, i) => (
              <div
                key={i}
                className="text-center p-6 bg-green-50 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-xl sm:text-2xl">{icon}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-green-800 mb-2 sm:mb-3">
                  {title}
                </h3>
                <p className="text-green-700 text-sm sm:text-base">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-green-800 text-center mb-8 sm:mb-12">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                img: "https://placeholder-image-service.onrender.com/image/120x120?prompt=Professional+headshot+of+grocery+store+founder&id=team-founder-1",
                name: "Sarah Johnson",
                role: "Founder & CEO",
                desc: "With 15 years in the food industry, Sarah connects communities with fresh produce.",
              },
              {
                img: "https://placeholder-image-service.onrender.com/image/120x120?prompt=Professional+headshot+of+grocery+store+head+of+operations&id=team-ops-2",
                name: "Michael Chen",
                role: "Head of Operations",
                desc: "Michael ensures our supply chain runs smoothly and deliveries are always on time.",
              },
            ].map(({ img, name, role, desc }, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 p-6 bg-green-50 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <img
                  src={img}
                  alt={name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover"
                />
                <div className="text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-green-800">
                    {name}
                  </h3>
                  <p className="text-green-600 mb-1 sm:mb-2 text-sm sm:text-base">
                    {role}
                  </p>
                  <p className="text-green-700 text-sm sm:text-base">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-green-100 rounded-2xl p-6 sm:p-8 text-center mb-12 sm:mb-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {[
              { num: "500+", label: "Local Farmers" },
              { num: "10K+", label: "Happy Customers" },
              { num: "50K+", label: "Products Delivered" },
              { num: "24/7", label: "Customer Support" },
            ].map(({ num, label }, i) => (
              <div key={i}>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-900 mb-1 sm:mb-2">
                  {num}
                </div>
                <div className="text-green-700 text-sm sm:text-base">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
