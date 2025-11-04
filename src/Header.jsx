import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "./App";
import { toast } from "react-toastify";

const Header = () => {
  const { email, login, setLogin } = useContext(userContext);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const logout = () => {
    setLogin(true);
    toast.info("Logout successfully", { autoClose: 1000 });
    navigate("/");
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">KhanaKhzana</div>

        {/* Hamburger button (mobile) */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Nav links */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } absolute md:static top-16 left-0 w-full md:w-auto bg-white md:flex md:space-x-6 md:items-center shadow-md md:shadow-none`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 items-center py-4 md:py-0">
            <li>
              <Link
                to={"/"}
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 font-medium"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to={"/product"}
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 font-medium"
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                to={"/contact"}
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 font-medium"
              >
                Contact
              </Link>
            </li>

            {/* Login/Register or Logout */}
            {login ? (
              <>
                <li>
                  <Link
                    to={"/login"}
                    className="block px-4 py-2 text-gray-700 hover:text-blue-600 font-medium"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/register"}
                    className="block px-4 py-2 text-gray-700 hover:text-blue-600 font-medium"
                  >
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <button
                  onClick={logout}
                  className="block px-4 py-2 text-gray-700 hover:text-red-600 font-medium"
                >
                  Logout
                </button>
              </li>
            )}

            {/* Cart */}
            <li>
              <Link to={"/addtocart"}
                href="#"
                className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 font-medium"
              >
                <svg
                  className="w-5 h-5 mr-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007.5 17h9a1 1 0 00.85-1.53L17 13M7 13V6h13" />
                </svg>
                Add to Cart
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
