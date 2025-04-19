import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add other pages here */}
      </Routes>
    </Router>
  );
}
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <header className="bg-blue-700 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">TopSack</h1>
          <nav className="space-x-6">
            <Link to="/" className="hover:text-gray-200">Home</Link>
            <Link to="/about" className="hover:text-gray-200">About Us</Link>
            <Link to="/services" className="hover:text-gray-200">Services</Link>
            <Link to="/contact" className="hover:text-gray-200">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Industrial-Grade Jumbo Bags for Every Need
          </h2>
          <p className="text-lg md:text-xl mb-6">
            Trusted by industries for quality, strength, and reliability.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-6 py-2 rounded-lg shadow hover:bg-gray-100"
          >
            Request a Quote
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 md:flex items-center gap-10">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Why TopSack?</h3>
            <p className="text-gray-700 mb-4">
              With years of experience in industrial packaging, TopSack delivers reliable, customizable, and affordable jumbo bag solutions. We focus on quality, safety, and customer satisfaction.
            </p>
            <Link to="/about" className="text-blue-600 underline">Learn More</Link>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://via.placeholder.com/500x300?text=Factory+or+Bags"
              alt="TopSack Jumbo Bags"
              className="rounded-lg shadow"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-10">Our Core Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-md">
              <img
                src="https://via.placeholder.com/150?text=Bag+1"
                alt="Service 1"
                className="mb-4 mx-auto rounded"
              />
              <h4 className="text-lg font-semibold mb-2">Jumbo Bag Manufacturing</h4>
              <p>Durable bags for every industrial sector.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-md">
              <img
                src="https://via.placeholder.com/150?text=Bag+2"
                alt="Service 2"
                className="mb-4 mx-auto rounded"
              />
              <h4 className="text-lg font-semibold mb-2">Custom Printing</h4>
              <p>Your brand, your identity – printed with precision.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-md">
              <img
                src="https://via.placeholder.com/150?text=Bag+3"
                alt="Service 3"
                className="mb-4 mx-auto rounded"
              />
              <h4 className="text-lg font-semibold mb-2">Bulk Orders & Logistics</h4>
              <p>Efficient processing and global delivery support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Get in Touch with Us</h3>
        <p className="mb-6">Have questions or need a quote? We're here to help.</p>
        <Link
          to="/contact"
          className="bg-white text-blue-700 px-6 py-2 rounded-lg shadow hover:bg-gray-200"
        >
          Contact Us
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} TopSack. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
