import { useState } from "react";
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
import environment from "../assets/images.jpeg";

export default function Login() {
  const [email, setEmail] = useState("");



  const handleSubmit = (e) => {
  e.preventDefault();
  const name = email.split("@")[0];
  localStorage.setItem("user", name);  // same key "user"
  window.dispatchEvent(new Event("login")); // trigger Navbar to update
  window.location.href = "/dashboard"; // navigate after login
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center px-4">

      {/* LOGIN CARD */}
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

        {/* LEFT PANEL */}
        <div className="relative bg-green-700 flex items-center justify-center p-10">

          {/* Folded Corner */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-green-600 rotate-45 translate-x-8 -translate-y-8 shadow-lg"></div>

          <div className="text-center text-white">
            <img src={environment} className="w-48 mx-auto mb-6" alt="Eco icon" />
            <h2 className="text-2xl font-bold">EcoBazaarX</h2>
            <p className="text-green-100 mt-2 text-sm">
              Carbon-Footprint Aware Shopping
            </p>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="flex flex-col justify-center px-10 py-12">

          <h1 className="text-3xl font-bold text-green-800 mb-2">
            Welcome Back 🌱
          </h1>
          <p className="text-gray-600 mb-8">
            Login to continue your eco-friendly journey
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>

            {/* EMAIL */}
            <div className="flex items-center border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-green-500">
              <HiOutlineMail className="text-gray-500 w-5 h-5 mr-3" />
              <input
                type="email"
                placeholder="Email address"
                className="w-full outline-none text-sm"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* PASSWORD */}
            <div className="flex items-center border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-green-500">
              <HiOutlineLockClosed className="text-gray-500 w-5 h-5 mr-3" />
              <input
                type="password"
                placeholder="Password"
                className="w-full outline-none text-sm"
                required
              />
            </div>

            {/* BUTTON */}
            <button
              className="w-full bg-green-700 text-white py-3 rounded-xl font-medium hover:bg-green-800 transition duration-200 shadow-md"
            >
              Login
            </button>

            {/* FOOTER */}
            <p className="text-center text-sm text-gray-600">
              New here?{" "}
              <a href="/register" className="text-green-700 font-medium hover:underline">
                Create an account
              </a>
            </p>

          </form>
        </div>

      </div>
    </div>
  );
}
