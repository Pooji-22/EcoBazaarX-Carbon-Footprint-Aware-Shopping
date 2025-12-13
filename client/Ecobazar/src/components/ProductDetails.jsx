import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productsData from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const found = productsData.find((p) => p.id === parseInt(id));
    setProduct(found || null);
  }, [id]);

  if (!product)
    return <p className="pt-24 text-center text-red-500">Product not found</p>;

  return (
    <div className="min-h-screen bg-gray-50 pt-24 px-6 flex justify-center">
      <div className="bg-white rounded-2xl shadow-lg max-w-4xl w-full p-6 grid md:grid-cols-2 gap-6">

        {/* Product Image */}
        <div className="flex justify-center items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-48 h-48 object-contain rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold text-green-700">
            {product.name}
          </h1>

          <p className="text-gray-700 font-medium">
            Price: <span className="font-semibold">₹{product.price}</span>
          </p>

          <p className="text-green-700 text-sm font-medium">
            Carbon Footprint: {product.carbonFootprint} kg CO₂e
          </p>

          <p className="text-yellow-500 text-sm">
            Eco Rating: {product.ecoRating} ⭐
          </p>

          {/* Carbon Breakdown */}
          <div className="mt-3">
            <h2 className="text-lg font-semibold mb-1">
              Carbon Impact Breakdown
            </h2>
            <ul className="text-sm text-gray-600 list-disc ml-5 space-y-1">
              <li>
                Material Production:{" "}
                {(product.carbonFootprint * 0.6).toFixed(2)} kg CO₂e
              </li>
              <li>
                Transport & Logistics:{" "}
                {(product.carbonFootprint * 0.3).toFixed(2)} kg CO₂e
              </li>
              <li>
                Packaging:{" "}
                {(product.carbonFootprint * 0.1).toFixed(2)} kg CO₂e
              </li>
            </ul>
          </div>

          {/* Add to Cart Button */}
          <button
            className="mt-4 w-fit bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition"
            onClick={() => {
              const cart = JSON.parse(localStorage.getItem("cart")) || [];
              cart.push(product);
              localStorage.setItem("cart", JSON.stringify(cart));
              alert("Product added to cart!");
            }}
          >
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
}
