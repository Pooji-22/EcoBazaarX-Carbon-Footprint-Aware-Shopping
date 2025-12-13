import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-xl shadow-md p-4 bg-white flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg mb-3"
      />
      <h3 className="font-bold text-lg">{product.name}</h3>
      <p className="text-gray-600">₹{product.price}</p>
      <p className="text-green-700 font-semibold">
        Carbon: {product.carbonFootprint} kg CO2e
      </p>
      <p className="text-yellow-500">Eco Rating: {product.ecoRating} ⭐</p>
      <Link
        to={`/products/${product.id}`}
        className="mt-2 bg-green-700 text-white py-2 px-4 rounded-lg text-center hover:bg-green-800"
      >
        View Details
      </Link>
    </div>
  );
}
