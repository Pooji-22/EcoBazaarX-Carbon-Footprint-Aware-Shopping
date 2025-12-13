import { useEffect, useState } from "react";
import ecoIcon from "../assets/ecoIcon.jpg";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [name, setName] = useState("");

  useEffect(() => {
    const userName = localStorage.getItem("userName");
    if (userName) setName(userName);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-green-50">

      <div className="w-40 h-40 bg-green-700 rounded-full flex items-center justify-center mb-6">
        <img src={ecoIcon} className="w-28" />
      </div>

      <h2 className="text-3xl font-semibold text-green-800 mb-2">
        Hello, {name}! Welcome to EcoBazaarX
      </h2>

      <p className="text-gray-600 mb-6">Carbon-Footprint Aware Shopping</p>

      <Link to="/shop" className="bg-green-700 text-white px-6 py-3 rounded-xl mb-4">
        Shop Now
      </Link>

      <a href="/login" className="text-red-500 font-medium underline">Logout</a>
    </div>
  );
}
