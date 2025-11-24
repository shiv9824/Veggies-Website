import React, { useContext, useEffect, useState } from "react";
import { userContext } from "./App";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { user } from "../user";


function Login() {
  const { email, setEmail, login, setLogin } = useContext(userContext);
  const [pwd, setPwd] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:1234/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handlesubmit = (e) => {
    e.preventDefault();

    const useremail = data.find((v) => v.email === email && v.pwd === pwd);
    const Admin = user.find((v) => v.email === email && v.pwd === pwd);

    if (useremail) {
      toast.success("Login successful",{ autoClose: 1000 });
      setLogin(!login);
      navigate("/");

    } 
    else if (Admin) {
      toast.success("Admin Login successful",{ autoClose: 1000 });
      setLogin(!login);
      navigate("/");
    }
    else {
      toast.error("Invalid details",{ autoClose: 1000 });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <form
        onSubmit={handlesubmit}
        className="w-full max-w-md bg-white p-6 sm:p-8 border border-gray-300 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-400 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="border border-gray-400 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            required
          />
        </div>

        <div className="mb-6 text-right">
          <a
            href="#"
            className="text-sm text-blue-500 hover:underline"
          >
            Email : shiv@gmail.com | Pwd : 12345
          </a>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white font-medium py-2 px-4 rounded w-full hover:bg-blue-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
