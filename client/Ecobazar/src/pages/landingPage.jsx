import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import env from "../assets/ecoIcon.jpg";
import { Leaf, Repeat as Recycle, ShoppingBag, Globe, BadgeCheck } from "lucide-react";
import service from "../assets/service.jpeg"


export default function LandingPage() {
  return (
    <div className="bg-gray-50 font-[Inter]">

      {/* NAVBAR */}
      <Navbar />

      <div id="home" className="pt-24">

        {/* SEARCH SECTION */}
        <div className="w-full bg-gradient-to-r from-green-100 to-green-50 py-14 px-6 flex flex-col items-center">
          <h2 className="text-4xl font-extrabold text-green-700 mb-6 tracking-wide">
            Search Eco-Friendly Products
          </h2>

          <div className="flex w-full max-w-2xl shadow-lg rounded-xl overflow-hidden bg-white">
            <input
              type="text"
              placeholder="Search eco-products, categories..."
              className="w-full px-5 py-4 text-lg outline-none"
            />
            <button className="bg-green-600 text-white px-8 py-4 text-lg hover:bg-green-700 transition-all">
              Search
            </button>
          </div>
        </div>

        {/* HERO SECTION */}
        <section className="flex flex-col md:flex-row items-center justify-center px-10 py-20 gap-10">
          
          {/* Left */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-5xl md:text-6xl font-extrabold text-green-700 leading-tight">
              Shop Smart.  
              <br />
              <span className="text-green-500">Shop Sustainable.</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              EcoBazaarX helps you shop while tracking carbon footprint.
              Explore greener alternatives and make responsible choices for a better future.
            </p>

            <Link
              to="/products"
              className="inline-block mt-4 bg-green-600 text-white px-8 py-4 rounded-xl text-xl font-medium hover:bg-green-700 transition-all"
            >
              Explore Products
            </Link>
          </div>

          {/* Right */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={env}
              alt="Eco Shopping"
              className="w-96 drop-shadow-2xl rounded-2xl hover:scale-105 transition-transform"
            />
          </div>

        </section>
      </div>

      {/* FACILITIES SECTION */}
      <section id="facilities" className="py-24 bg-white px-10">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-14 tracking-wide">
          Our Facilities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          
          {[
            ["Eco Product Tracking", "Track carbon footprint for every product you buy."],
            ["Smart Recommendations", "Get suggestions for eco-friendly alternatives."],
            ["Verified Eco Sellers", "Every seller is verified for eco authenticity."]
          ].map(([title, desc], i) => (
            <div
              key={i}
              className="p-8 bg-gray-100 rounded-2xl shadow hover:shadow-xl transition-all"
            >
              <h3 className="text-2xl font-semibold text-green-700">{title}</h3>
              <p className="text-gray-600 mt-3 text-lg leading-relaxed">{desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* ------------------- SERVICES SECTION ------------------- */}
<section id="services" className="py-24 bg-green-50 px-10">
  <h2 className="text-4xl font-bold text-center text-green-700 mb-14 tracking-wide">
    Services We Provide
  </h2>

  <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-12">

    {/* LEFT IMAGE */}
    <div className="md:w-1/2 flex justify-center">
      <img
        src={service}
        alt="Eco Services"
        className="w-96 rounded-2xl shadow-lg hover:scale-105 transition-transform"
      />
    </div>

    {/* RIGHT TEXT CONTENT */}
    <div className="md:w-1/2 space-y-6">

      <p className="text-lg text-gray-700 leading-relaxed">
        EcoBazaarX offers smart eco-friendly shopping features that help
        users understand their carbon impact and make sustainable choices.
      </p>

      <ul className="space-y-4 text-gray-700 text-lg">
        <li className="flex items-start space-x-3">
          <span className="text-green-600 text-2xl">✔</span>
          <p>
            <span className="font-semibold text-green-700">
              Carbon-aware product catalog –
            </span>{" "}
            every item includes CO₂ footprint data.
          </p>
        </li>

        <li className="flex items-start space-x-3">
          <span className="text-green-600 text-2xl">✔</span>
          <p>
            <span className="font-semibold text-green-700">
              Smart eco recommendations –
            </span>{" "}
            get greener alternatives instantly.
          </p>
        </li>

        <li className="flex items-start space-x-3">
          <span className="text-green-600 text-2xl">✔</span>
          <p>
            <span className="font-semibold text-green-700">
              Carbon score & eco badge filter –
            </span>{" "}
            sort products by sustainability levels.
          </p>
        </li>

        <li className="flex items-start space-x-3">
          <span className="text-green-600 text-2xl">✔</span>
          <p>
            <span className="font-semibold text-green-700">
              Carbon analytics dashboard –
            </span>{" "}
            visualize your total emission footprint.
          </p>
        </li>
      </ul>

      <Link
        to="/products"
        className="inline-block mt-4 bg-green-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-green-700 transition-all"
      >
        Explore Services →
      </Link>

    </div>
  </div>
</section>


      {/* ABOUT SECTION */}
      <section id="about" className="py-20 bg-green-50">
  <div className="max-w-4xl mx-auto px-6 text-center">
    
    <h2 className="text-4xl font-bold text-green-700 mb-6">
      About EcoBazaarX
    </h2>

    <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto mb-10">
      EcoBazaarX is a sustainable shopping platform built to help individuals make 
      smarter and greener choices. We simplify eco-conscious shopping through 
      carbon-footprint tracking, verified eco-sellers, and data-driven product recommendations.
      Our mission is to make sustainable living accessible for everyone.
    </p>

    <ul className="space-y-5 text-left max-w-3xl mx-auto">

      <li className="flex items-start space-x-4">
        <Leaf className="text-green-600 mt-1" />
        <span className="text-gray-700">
          <strong>Eco-conscious product recommendations</strong> curated based on 
          carbon impact and sustainability scores.
        </span>
      </li>

      <li className="flex items-start space-x-4">
        <Recycle className="text-green-600 mt-1" />
        <span className="text-gray-700">
          <strong>Supports recycling and circular economy</strong> by promoting brands 
          with green production and disposal practices.
        </span>
      </li>

      <li className="flex items-start space-x-4">
        <ShoppingBag className="text-green-600 mt-1" />
        <span className="text-gray-700">
          <strong>Carbon footprint tracking</strong> for every item you shop to help 
          you understand your environmental impact.
        </span>
      </li>

      <li className="flex items-start space-x-4">
        <Globe className="text-green-600 mt-1" />
        <span className="text-gray-700">
          <strong>Verified eco-friendly sellers</strong> ensuring authenticity, 
          transparency, and trusted eco-certifications.
        </span>
      </li>

      <li className="flex items-start space-x-4">
        <BadgeCheck className="text-green-600 mt-1" />
        <span className="text-gray-700">
          <strong>Smart analytics & insights</strong> empowering users with data to 
          make sustainable lifestyle decisions.
        </span>
      </li>

    </ul>

  </div>
</section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 bg-green-100 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT: Heading + Text */}
    <div className="space-y-4">
      <h2 className="text-4xl font-bold text-green-700">Contact Us</h2>
      <p className="text-gray-700 text-lg">
        Have questions or need support? Send us a message — we’re here to help.
        We’ll respond as quickly as possible.
      </p>
    </div>

    {/* RIGHT: Form */}
    <div className="bg-white p-8 rounded-2xl shadow-lg">
      <form className="space-y-5">

        <div>
          <label className="block text-gray-700 font-medium mb-1">Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Message</label>
          <textarea
            rows="4"
            placeholder="Write your message..."
            className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700"
        >
          Send Message
        </button>

      </form>
    </div>

  </div>
</section>



    </div>
  );
}
