import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import productsData from "../data/products";

export default function ProductCatalog() {
  const [products] = useState(productsData);
  const [search, setSearch] = useState("");
  const [ecoFilter, setEcoFilter] = useState(false);
  const [priceRange, setPriceRange] = useState(5000);
  const [carbonRange, setCarbonRange] = useState(10);

  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesEco = ecoFilter ? p.ecoRating >= 4.5 : true;
    const matchesPrice = p.price <= priceRange;
    const matchesCarbon = p.carbonFootprint <= carbonRange;

    return matchesSearch && matchesEco && matchesPrice && matchesCarbon;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-8 mt-14">
      <h1 className="text-3xl font-bold text-green-700 mb-8">
        Product Catalog
      </h1>

      {/* FILTER SECTION */}
      <div className="bg-white p-6 rounded-2xl shadow mb-8 grid md:grid-cols-4 gap-6">

        {/* Search */}
        <div>
          <label className="text-sm font-semibold text-gray-700">
            Search Product
          </label>
          <input
            type="text"
            placeholder="Search by name..."
            className="mt-2 w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Price Filter */}
        <div>
          <label className="text-sm font-semibold text-gray-700">
            Max Price (₹)
          </label>
          <input
            type="range"
            min="100"
            max="5000"
            step="100"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="w-full mt-3"
          />
          <p className="text-green-700 font-medium mt-1">
            ₹ {priceRange}
          </p>
        </div>

        {/* Carbon Filter */}
        <div>
          <label className="text-sm font-semibold text-gray-700">
            Max Carbon (CO₂e/kg)
          </label>
          <input
            type="range"
            min="1"
            max="10"
            step="0.5"
            value={carbonRange}
            onChange={(e) => setCarbonRange(e.target.value)}
            className="w-full mt-3"
          />
          <p className="text-green-700 font-medium mt-1">
            {carbonRange} CO₂e/kg
          </p>
        </div>

        {/* Eco Filter */}
        <div className="flex items-center mt-6 gap-3">
          <input
            type="checkbox"
            checked={ecoFilter}
            onChange={() => setEcoFilter(!ecoFilter)}
            className="w-4 h-4"
          />
          <span className="text-gray-700 font-medium">
            Eco-friendly only
          </span>
        </div>
      </div>

      {/* PRODUCT GRID */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 mt-20">
          No products match your filters.
        </p>
      )}
    </div>
  );
}
