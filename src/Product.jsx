import React, { useContext } from 'react';
import { userContext } from './App';
import { toast } from 'react-toastify';


 const products = [
  {
    id: 1,
    name: 'Fresh Apples',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    name: 'Organic Bananas',
    price: 1.29,
    image: 'https://www.orgpick.com/cdn/shop/products/banana-powder_large_f0d6750f-b412-4815-b1e1-7779bf18c354.jpg?v=1612510545',
  },
  {
    id: 3,
    name: 'Carrots',
    price: 2.49,
    image: 'https://www.trustbasket.com/cdn/shop/articles/Carrot.jpg?v=1688378789',
  },
  {
    id: 4,
    name: 'Broccoli',
    price: 2.99,
    image: 'https://www.freshaisle.com/cdn/shop/files/fresh-broccoli-exotic-vegetables-873.jpg?v=1739195252',
  },
  {
    id: 5,
    name: 'Strawberries',
    price: 4.99,
    image: 'https://c02.purpledshub.com/uploads/sites/41/2023/09/GettyImages_154514873.jpg?w=1029&webp=1',
  },
  {
    id: 6,
    name: 'Tomatoes',
    price: 3.49,
    image: 'https://source.washu.edu/app/uploads/2015/11/Tomato250.jpg',
  },
  {
    id: 7,
    name: 'Fresh Spinach',
    price: 2.79,
    image: 'https://m.media-amazon.com/images/I/71tdN2taTCL._UF1000,1000_QL80_.jpg',
  },
  {
    id: 8,
    name: 'Red Onions',
    price: 1.99,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_c4mzTsqYoLWHNziM4mHQEEp6-qCek6H7bQ&s',
  },
  {
    id: 9,
    name: 'Green Grapes',
    price: 3.59,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTISESWA7XFzRKsEj6L2p_-SUxtQTVjPofPJA&s',
  },
  {
    id: 10,
    name: 'Pineapple',
    price: 5.49,
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Pineapple_and_cross_section.jpg',
  },
  {
    id: 11,
    name: 'Watermelon',
    price: 6.99,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD0qedAEEvk9S0-G_e3ur6BXTD_5k7UJ4Cog&s',
  },
  {
    id: 12,
    name: 'Blueberries',
    price: 5.99,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-SxGRpJEWC_xvIsWKio837O1M1BBvilJfqQ&s',
  },
  {
    id: 13,
    name: 'Cucumber',
    price: 2.29,
    image: 'https://urjaseeds.com/cdn/shop/products/cucumber-seeds-malaysia-t103m_1024x.jpg?v=1591175147',
  },
  {
    id: 14,
    name: 'Mango',
    price: 4.79,
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Hapus_Mango.jpg',
  },
  {
    id: 15,
    name: 'Oranges',
    price: 3.19,
    image: 'https://images.herzindagi.info/her-zindagi-english/images/2025/05/04/article/image/oranges-1746382295098.webp',
  },
  {
    id: 16,
    name: 'Potatoes',
    price: 1.89,
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Patates.jpg',
  },
  {
    id: 17,
    name: 'Cauliflower',
    price: 3.39,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfE9Co-fyaLr9OTvmJR8Nr3HHw6Nmil5NJew&s',
  },
  {
    id: 18,
    name: 'Lettuce',
    price: 2.19,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB_fGSI6v-83L1KyZ1XYy7bhdcwL5n2nOrgA&s',
  },
  {
    id: 19,
    name: 'Papaya',
    price: 3.89,
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Papaya_cross_section_BNC.jpg',
  },
  {
    id: 20,
    name: 'Pomegranate',
    price: 4.29,
    image: 'data:image/jpeg;base64,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',
  },
  {
    id: 21,
    name: 'Sweet Corn',
    price: 2.99,
    image: 'https://m.media-amazon.com/images/I/51Fysv4pwJL.jpg',
  },
  {
    id: 22,
    name: 'Avocado',
    price: 5.49,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgbM7ljho8a3_l74m0ym6YcfA_sBwxl4lxaw&s',
  },
  {
    id: 23,
    name: 'Peas',
    price: 2.59,
    image: 'https://www.allthatgrows.in/cdn/shop/products/Peas.jpg?v=1598082087',
  },
  {
    id: 24,
    name: 'Cabbage',
    price: 2.39,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXYFTS31Ao2UIW3CqPrQHKaQHsL17QCqeSmA&s',
  },
  {
    id: 25,
    name: 'Kiwi',
    price: 4.19,
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Kiwi_aka.jpg',
  },
  {
    id: 26,
    name: 'Bell Peppers',
    price: 3.69,
    image: 'https://cdn.britannica.com/12/147312-050-BEC6A59E/Bell-peppers.jpg',
  },
  {
    id: 27,
    name: 'Garlic',
    price: 2.09,
    image: 'https://m.media-amazon.com/images/I/51BSNgiBDqL._UF894,1000_QL80_.jpg',
  },
  {
    id: 28,
    name: 'Ginger',
    price: 2.59,
    image: 'https://organicmandya.com/cdn/shop/files/Ginger.jpg?v=1757079802&width=1500',
  },
];




const ProductList = () => {

  const { cart, setCart } = useContext(userContext);


 const  addToCart = (product) => {
    const exit = cart.find((item) => item.id === product.id);
    if (exit) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...exit, qty: exit.qty + 1 } : item
         
        )
      );
      toast.success("added in cart",{autoClose:1000})
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      toast.success("added in cart",{autoClose:1000})
    }
  }
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-green-700 mb-8 text-center">
        Fresh Grocery Products
      </h2>

      {/* Product Grid */}
      <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer flex flex-col"
          >
            {/* Image Section */}
            <div className="h-44 sm:h-48 md:h-52 lg:h-56 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Product Info */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="mt-2 text-green-600 font-bold text-lg sm:text-xl">
                ${product.price.toFixed(2)}
              </p>
              <button onClick={()=>{addToCart(product)}}
                type="button"
                className="mt-auto bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-300 w-full"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
