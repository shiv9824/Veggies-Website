import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Organic Apples",
    price: 3.99,
    image:
      "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Fresh Carrots",
    price: 2.49,
    image:
      "https://5.imimg.com/data5/DH/BS/UG/SELLER-52971039/fresh-carrot-5-kg.jpg",
  },
  {
    id: 3,
    name: "Bananas",
    price: 1.29,
    image:
      "https://www.orgpick.com/cdn/shop/products/banana-powder_large_f0d6750f-b412-4815-b1e1-7779bf18c354.jpg?v=1612510545",
  },
  {
    id: 4,
    name: "Fresh Broccoli",
    price: 2.99,
    image:
      "https://www.freshaisle.com/cdn/shop/files/fresh-broccoli-exotic-vegetables-873.jpg?v=1739195252",
  },
  {
    id: 5,
    name: "Strawberries",
    price: 4.99,
    image:
      "https://c02.purpledshub.com/uploads/sites/41/2023/09/GettyImages_154514873.jpg?w=1029&webp=1",
  },
  {
    id: 6,
    name: "Fresh Spinach",
    price: 3.49,
    image:
      "https://m.media-amazon.com/images/I/71tdN2taTCL._UF1000,1000_QL80_.jpg",
  },
];

const Home = () => {
  return (
    <section className="bg-green-50 min-h-screen py-12 px-4 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-900 mb-4 leading-tight">
            Fresh Groceries Delivered To Your Doorstep
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-green-700 max-w-3xl mx-auto">
            Discover the freshest fruits, vegetables, and everyday essentials
            with our easy-to-use online grocery store. Quality and convenience
            at your fingertips.
          </p>
        </header>

        {/* Content with images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text content */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-green-800 mb-6">
              Why Choose Us?
            </h2>
            <p className="text-green-700 mb-4 leading-relaxed text-base sm:text-lg">
              We source our products directly from trusted local farmers and
              suppliers to ensure you get the freshest produce possible.
            </p>
            <p className="text-green-700 mb-4 leading-relaxed text-base sm:text-lg">
              Our easy-to-navigate website and fast delivery service make your
              grocery shopping seamless and enjoyable.
            </p>
            <p className="text-green-700 mb-4 leading-relaxed text-base sm:text-lg">
              Join thousands of happy customers who trust us for their grocery
              needs. Freshness, quality, and convenience — all in one place.
            </p>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://www.lalpathlabs.com/blog/wp-content/uploads/2019/01/Fruits-and-Vegetables.jpg"
              alt="Fresh fruits"
              className="rounded-lg object-cover w-full h-40 sm:h-48 md:h-56"
            />
            <img
              src="https://plus.unsplash.com/premium_photo-1664527305901-a3c8bec62850?fm=jpg&q=60&w=3000"
              alt="Vegetables"
              className="rounded-lg object-cover w-full h-40 sm:h-48 md:h-56"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz8LW7CGOi2LjXsYXyoFqWff79g4YbJZU7Tg&s"
              alt="Grocery delivery"
              className="rounded-lg object-cover w-full h-40 sm:h-48 md:h-56"
            />
            <img
              src="https://www.themediterraneandish.com/wp-content/uploads/2024/05/herb-list-2.jpg"
              alt="Fresh herbs"
              className="rounded-lg object-cover w-full h-40 sm:h-48 md:h-56"
            />
          </div>
        </div>

        {/* Grocery Products Section */}
        <section className="mt-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-10 text-center">
            Our Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {products.map(({ id, name, price, image }) => (
              <div
                key={id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
              >
                <img
                  src={image}
                  alt={name}
                  className="w-full h-40 sm:h-48 object-cover"
                />
                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <h3 className="text-lg sm:text-xl font-semibold text-green-800 mb-2">
                    {name}
                  </h3>
                  <p className="text-green-700 text-base sm:text-lg font-medium mb-4">
                    ${price.toFixed(2)}
                  </p>
                  <button
                    type="button"
                    className="mt-auto bg-green-700 hover:bg-green-800 text-white font-semibold py-2 rounded-md transition duration-300"
                    onClick={() => alert(`Added ${name} to cart!`)}
                  >
                    Buy
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <Link  to={'/product'} className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg shadow-lg transition duration-300">
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;

